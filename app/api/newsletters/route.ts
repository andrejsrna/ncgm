import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';
import {
  GetObjectCommand,
  HeadObjectCommand,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const subscribersFile = path.join(process.cwd(), 'data', 'newsletter-subscribers.json');
const subscribersObjectKey = process.env.R2_NEWSLETTER_OBJECT_KEY?.trim() || 'newsletter-subscribers.json';

const getR2Client = () => {
  const endpoint = process.env.R2_ENDPOINT?.trim();
  const accessKeyId = process.env.R2_ACCESS_KEY_ID?.trim();
  const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY?.trim();

  if (!endpoint || !accessKeyId || !secretAccessKey) {
    return null;
  }

  return new S3Client({
    region: 'auto',
    endpoint,
    forcePathStyle: true,
    credentials: { accessKeyId, secretAccessKey },
  });
};

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !validateEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    await appendSubscriber(email);

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to process subscription' },
      { status: 500 }
    );
  }
}

interface SubscriberRecord {
  email: string;
  subscribedAt: string;
}

async function appendSubscriber(email: string): Promise<void> {
  const bucket = process.env.R2_BUCKET?.trim();
  const r2 = getR2Client();

  if (bucket && r2) {
    await appendSubscriberR2({ r2, bucket, key: subscribersObjectKey, email });
    return;
  }

  const record: SubscriberRecord = {
    email,
    subscribedAt: new Date().toISOString(),
  };

  await fs.mkdir(path.dirname(subscribersFile), { recursive: true });

  const subscribers = await readSubscribers();
  const alreadySubscribed = subscribers.some(
    (subscriber) => subscriber.email.toLowerCase() === email.toLowerCase()
  );

  if (alreadySubscribed) {
    return;
  }

  subscribers.push(record);
  await fs.writeFile(
    subscribersFile,
    JSON.stringify(subscribers, null, 2),
    'utf8'
  );
}

async function appendSubscriberR2({
  r2,
  bucket,
  key,
  email,
}: {
  r2: S3Client;
  bucket: string;
  key: string;
  email: string;
}): Promise<void> {
  const record: SubscriberRecord = {
    email,
    subscribedAt: new Date().toISOString(),
  };

  const normalizedEmail = email.toLowerCase();

  for (let attempt = 0; attempt < 5; attempt += 1) {
    const head = await safeHeadObject(r2, bucket, key);
    const existingEtag = head?.etag;

    const subscribers = head
      ? await readSubscribersFromR2(r2, bucket, key)
      : [];

    const alreadySubscribed = subscribers.some(
      (subscriber) => subscriber.email.toLowerCase() === normalizedEmail
    );

    if (alreadySubscribed) {
      return;
    }

    subscribers.push(record);

    try {
      await r2.send(
        new PutObjectCommand({
          Bucket: bucket,
          Key: key,
          Body: JSON.stringify(subscribers, null, 2),
          ContentType: 'application/json',
          ...(existingEtag ? { IfMatch: existingEtag } : { IfNoneMatch: '*' }),
        })
      );
      return;
    } catch (error) {
      if (isPreconditionFailed(error)) {
        continue;
      }
      throw error;
    }
  }

  throw new Error('Unable to persist subscription (concurrent updates).');
}

async function readSubscribers(): Promise<SubscriberRecord[]> {
  try {
    const raw = await fs.readFile(subscribersFile, 'utf8');
    const parsed = JSON.parse(raw);

    if (Array.isArray(parsed)) {
      return parsed.filter(
        (item): item is SubscriberRecord =>
          typeof item?.email === 'string' && typeof item?.subscribedAt === 'string'
      );
    }

    return [];
  } catch (error) {
    if (isFileNotFound(error)) {
      return [];
    }
    throw error;
  }
}

function isFileNotFound(error: unknown): boolean {
  return (
    typeof error === 'object' &&
    error !== null &&
    'code' in error &&
    (error as any).code === 'ENOENT'
  );
}

async function safeHeadObject(
  r2: S3Client,
  bucket: string,
  key: string
): Promise<{ etag?: string } | null> {
  try {
    const head = await r2.send(new HeadObjectCommand({ Bucket: bucket, Key: key }));
    return { etag: head.ETag };
  } catch (error) {
    if (isR2NotFound(error)) {
      return null;
    }
    throw error;
  }
}

async function readSubscribersFromR2(
  r2: S3Client,
  bucket: string,
  key: string
): Promise<SubscriberRecord[]> {
  try {
    const result = await r2.send(new GetObjectCommand({ Bucket: bucket, Key: key }));
    const body = await streamToString(result.Body);
    const parsed = JSON.parse(body);

    if (Array.isArray(parsed)) {
      return parsed.filter(
        (item): item is SubscriberRecord =>
          typeof item?.email === 'string' && typeof item?.subscribedAt === 'string'
      );
    }
    return [];
  } catch (error) {
    if (isR2NotFound(error)) {
      return [];
    }
    throw error;
  }
}

async function streamToString(body: unknown): Promise<string> {
  if (!body) {
    return '';
  }

  if (typeof body === 'string') {
    return body;
  }

  if (body instanceof Uint8Array) {
    return Buffer.from(body).toString('utf8');
  }

  if (typeof (body as any)?.transformToString === 'function') {
    return await (body as any).transformToString();
  }

  const chunks: Buffer[] = [];
  for await (const chunk of body as any) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }
  return Buffer.concat(chunks).toString('utf8');
}

function isPreconditionFailed(error: unknown): boolean {
  return (
    typeof error === 'object' &&
    error !== null &&
    '$metadata' in error &&
    (error as any).$metadata?.httpStatusCode === 412
  );
}

function isR2NotFound(error: unknown): boolean {
  return (
    typeof error === 'object' &&
    error !== null &&
    '$metadata' in error &&
    (error as any).$metadata?.httpStatusCode === 404
  );
}
