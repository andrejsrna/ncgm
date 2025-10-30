import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const subscribersFile = path.join(process.cwd(), 'data', 'newsletter-subscribers.json');

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
    if (isNotFound(error)) {
      return [];
    }
    throw error;
  }
}

function isNotFound(error: unknown): boolean {
  return (
    typeof error === 'object' &&
    error !== null &&
    'code' in error &&
    error.code === 'ENOENT'
  );
}
