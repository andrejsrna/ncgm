#!/usr/bin/env node

/**
 * Upload a local file to Cloudflare R2 (S3-compatible).
 *
 * Usage:
 *   node scripts/r2-upload.js <localFilePath> <r2ObjectKey>
 *
 * Example:
 *   node scripts/r2-upload.js public/images/music/jazz-kung-fu.webp images/music/jazz-kung-fu.webp
 */

const fs = require("fs/promises");
const path = require("path");
const dotenv = require("dotenv");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

dotenv.config({ path: path.join(process.cwd(), ".env.local"), quiet: true });
dotenv.config({ quiet: true });

function guessContentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  switch (ext) {
    case ".webp":
      return "image/webp";
    case ".png":
      return "image/png";
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".gif":
      return "image/gif";
    case ".svg":
      return "image/svg+xml";
    case ".json":
      return "application/json";
    default:
      return "application/octet-stream";
  }
}

async function main() {
  const [, , localFilePath, objectKey] = process.argv;

  if (!localFilePath || !objectKey) {
    console.error("Usage: node scripts/r2-upload.js <localFilePath> <r2ObjectKey>");
    process.exit(1);
  }

  const endpoint = process.env.R2_ENDPOINT?.trim();
  const bucket = process.env.R2_BUCKET?.trim();
  const accessKeyId = process.env.R2_ACCESS_KEY_ID?.trim();
  const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY?.trim();

  if (!endpoint || !bucket || !accessKeyId || !secretAccessKey) {
    console.error("Missing R2 env vars. Set R2_ENDPOINT, R2_BUCKET, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY in .env.local.");
    process.exit(1);
  }

  const body = await fs.readFile(localFilePath);
  const contentType = guessContentType(localFilePath);

  const client = new S3Client({
    region: "auto",
    endpoint,
    forcePathStyle: true,
    credentials: { accessKeyId, secretAccessKey },
  });

  await client.send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: objectKey,
      Body: body,
      ContentType: contentType,
    })
  );

  console.log(`Uploaded: ${localFilePath} -> s3://${bucket}/${objectKey}`);
}

main().catch((error) => {
  console.error("Upload failed:", error?.message || error);
  process.exit(1);
});
