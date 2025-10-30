#!/usr/bin/env node

/**
 * Export Strapi collections to local markdown with JSON frontmatter.
 *
 * Usage:
 *   NEXT_PUBLIC_API_URL="https://cms.example.com" \
 *   NEXT_PUBLIC_STRAPI_API_TOKEN="..." \
 *   node scripts/strapi-to-markdown.js
 */

const path = require("path");
const fs = require("fs/promises");
const fsSync = require("fs");
const dotenv = require("dotenv");

const ROOT_DIR = process.cwd();

loadEnvFiles();

const API_URL = process.env.NEXT_PUBLIC_API_URL || process.env.STRAPI_API_URL;
const API_TOKEN =
  process.env.NEXT_PUBLIC_STRAPI_API_TOKEN || process.env.STRAPI_API_TOKEN;

const CONTENT_DIR = path.join(ROOT_DIR, "content");
const POSTS_CONTENT_DIR = path.join(CONTENT_DIR, "posts");
const MUSIC_CONTENT_DIR = path.join(CONTENT_DIR, "music");
const PUBLIC_DIR = path.join(ROOT_DIR, "public");
const POSTS_IMAGE_DIR = path.join(PUBLIC_DIR, "images", "posts");
const MUSIC_IMAGE_DIR = path.join(PUBLIC_DIR, "images", "music");

const FRONTMATTER_PREFIX = "---json";
const FRONTMATTER_SUFFIX = "---";

const DEFAULT_LABEL = {
  name: "No Copyright Gaming Music",
  slug: "no-copyright-gaming-music",
};

if (!API_URL) {
  console.error(
    "Missing API base URL. Set NEXT_PUBLIC_API_URL or STRAPI_API_URL."
  );
  process.exit(1);
}

if (!API_TOKEN) {
  console.error(
    "Missing Strapi API token. Set NEXT_PUBLIC_STRAPI_API_TOKEN or STRAPI_API_TOKEN."
  );
  process.exit(1);
}

const apiBase = API_URL.replace(/\/$/, "");

async function ensureFreshDir(dirPath) {
  await fs.rm(dirPath, { recursive: true, force: true });
  await fs.mkdir(dirPath, { recursive: true });
}

async function fetchCollection(collection) {
  const results = [];
  let page = 1;
  let pageCount = 1;

  while (page <= pageCount) {
    const url = new URL(`${apiBase}/api/${collection}`);
    url.searchParams.set("populate", "*");
    url.searchParams.set("pagination[page]", String(page));
    url.searchParams.set("pagination[pageSize]", "100");

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Failed to fetch ${collection} page ${page}: ${response.status} ${errorText}`
      );
    }

    const payload = await response.json();
    const items = Array.isArray(payload.data) ? payload.data : [];

    for (const item of items) {
      results.push(normalizeEntry(item));
    }

    pageCount =
      payload.meta?.pagination?.pageCount ??
      (items.length === 0 ? 0 : page /* stop after current page */);
    page += 1;
  }

  return results;
}

function normalizeEntry(entry) {
  if (entry == null) {
    return {};
  }

  if (entry.attributes && typeof entry.attributes === "object") {
    return { id: entry.id, ...entry.attributes };
  }

  return entry;
}

function clean(value) {
  if (value == null) {
    return undefined;
  }

  if (typeof value === "string") {
    const trimmed = value.trim();
    return trimmed === "" ? undefined : trimmed;
  }

  if (Array.isArray(value)) {
    const cleaned = value.map(clean).filter((item) => item !== undefined);
    return cleaned.length > 0 ? cleaned : undefined;
  }

  if (typeof value === "object") {
    const entries = Object.entries(value)
      .map(([key, val]) => [key, clean(val)])
      .filter(([, val]) => val !== undefined);
    if (entries.length === 0) {
      return undefined;
    }
    return Object.fromEntries(entries);
  }

  return value;
}

function buildMarkdown(metadata, body) {
  const frontmatterObject = clean(metadata) ?? {};
  const frontmatterJson = JSON.stringify(frontmatterObject, null, 2);
  const normalizedBody = typeof body === "string" ? body.trim() : "";

  let markdown = `${FRONTMATTER_PREFIX}\n${frontmatterJson}\n${FRONTMATTER_SUFFIX}\n`;

  if (normalizedBody.length > 0) {
    markdown += `\n${normalizedBody}\n`;
  }

  return markdown;
}

function pickAssetUrl(file) {
  if (!file) {
    return undefined;
  }

  const formatOrder = ["large", "medium", "small", "thumbnail"];
  for (const key of formatOrder) {
    const candidate = file.formats?.[key]?.url;
    if (candidate) {
      return candidate;
    }
  }

  if (file.url) {
    return file.url;
  }

  if (file.data?.attributes) {
    return pickAssetUrl(file.data.attributes);
  }

  return undefined;
}

async function downloadAsset(url, outputDir, outputName) {
  if (!url) {
    return undefined;
  }

  const absoluteUrl = url.startsWith("http") ? url : `${apiBase}${url}`;

  const response = await fetch(absoluteUrl);
  if (!response.ok) {
    throw new Error(
      `Failed to download asset ${absoluteUrl}: ${response.status} ${response.statusText}`
    );
  }

  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const extension = detectExtension(absoluteUrl, response.headers.get("content-type"));
  const fileName = `${sanitizeFileName(outputName)}${extension}`;
  const targetPath = path.join(outputDir, fileName);

  await fs.mkdir(outputDir, { recursive: true });
  await fs.writeFile(targetPath, buffer);

  return `/images/${path.basename(outputDir)}/${fileName}`;
}

function detectExtension(url, contentType) {
  const fromUrl = safeExtname(url);
  if (fromUrl) {
    return fromUrl;
  }

  if (!contentType) {
    return ".jpg";
  }

  const map = {
    "image/jpeg": ".jpg",
    "image/png": ".png",
    "image/webp": ".webp",
    "image/avif": ".avif",
    "image/gif": ".gif",
  };

  return map[contentType.toLowerCase()] ?? ".jpg";
}

function safeExtname(url) {
  try {
    const parsed = new URL(url);
    const ext = path.extname(parsed.pathname);
    if (ext) {
      return ext.split("?")[0] || ext;
    }
  } catch (_) {
    // ignore invalid URLs
  }
  return "";
}

function sanitizeFileName(name) {
  const slug = slugify(name);
  return slug || "asset";
}

function toDateString(value) {
  if (!value) {
    return undefined;
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return undefined;
  }
  return date.toISOString();
}

async function exportPosts() {
  const posts = await fetchCollection("posts");
  console.log(`Fetched ${posts.length} posts`);

  await ensureFreshDir(POSTS_CONTENT_DIR);
  await fs.mkdir(POSTS_IMAGE_DIR, { recursive: true });

  for (const post of posts) {
    const slug = post.slug || sanitizeFileName(post.title || `post-${post.id}`);
    const imageUrl = pickAssetUrl(post.image);
    const localImagePath = imageUrl
      ? await downloadAsset(imageUrl, POSTS_IMAGE_DIR, slug)
      : undefined;

    const metadata = {
      id: post.id,
      slug,
      title: post.title,
      description: post.description,
      category: post.category,
      pubDate: post.pubDate,
      publishedAt: toDateString(post.publishedAt),
      updatedAt: toDateString(post.updatedAt),
      image: localImagePath
        ? {
            url: localImagePath,
            formats: {
              large: { url: localImagePath },
            },
          }
        : undefined,
    };

    const markdown = buildMarkdown(metadata, post.content || "");
    const outputPath = path.join(POSTS_CONTENT_DIR, `${slug}.md`);
    await fs.writeFile(outputPath, markdown, "utf8");
  }

  console.log(`Saved ${posts.length} markdown files for posts`);
}

async function exportMusic() {
  const tracks = await fetchCollection("musicm");
  console.log(`Fetched ${tracks.length} music entries`);

  await ensureFreshDir(MUSIC_CONTENT_DIR);
  await fs.mkdir(MUSIC_IMAGE_DIR, { recursive: true });

  for (const track of tracks) {
    const slug =
      track.slug || sanitizeFileName(track.Title || `track-${track.id}`);
    const coverUrl = pickAssetUrl(track.Cover);
    const localCoverPath = coverUrl
      ? await downloadAsset(coverUrl, MUSIC_IMAGE_DIR, slug)
      : undefined;

    const metadata = {
      id: track.id,
      documentId: track.documentId,
      slug,
      Title: track.Title,
      Description: track.Description,
      genre: track.genre ? { Genres: track.genre.Genres ?? track.genre } : undefined,
      label: normalizeLabel(track.label),
      Spotify: track.Spotify,
      AppleMusic: track.AppleMusic,
      iTunes: track.iTunes,
      YouTubeMusic: track.YouTubeMusic,
      Amazon: track.Amazon,
      Pandora: track.Pandora,
      Deezer: track.Deezer,
      Tidal: track.Tidal,
      iHeartRadio: track.iHeartRadio,
      Boomplay: track.Boomplay,
      Beatport: track.Beatport,
      Bandcamp: track.Bandcamp,
      spotify_embed: track.spotify_embed,
      Cover: localCoverPath
        ? {
            url: localCoverPath,
            formats: {
              large: { url: localCoverPath },
            },
          }
        : undefined,
      createdAt: toDateString(track.createdAt),
      updatedAt: toDateString(track.updatedAt),
      publishedAt: toDateString(track.publishedAt),
      pubDate: toDateString(track.pubDate),
    };

    const body = typeof track.Content === "string" ? track.Content : "";
    const markdown = buildMarkdown(metadata, body);
    const outputPath = path.join(MUSIC_CONTENT_DIR, `${slug}.md`);
    await fs.writeFile(outputPath, markdown, "utf8");
  }

  console.log(`Saved ${tracks.length} markdown files for music`);
}

async function main() {
  await fs.mkdir(CONTENT_DIR, { recursive: true });
  await fs.mkdir(PUBLIC_DIR, { recursive: true });

  await exportPosts();
  await exportMusic();

  console.log("Export complete.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

function loadEnvFiles() {
  const envFiles = [".env.local", ".env"];
  for (const file of envFiles) {
    const fullPath = path.join(ROOT_DIR, file);
    if (fsSync.existsSync(fullPath)) {
      dotenv.config({ path: fullPath, override: false });
    }
  }
}

function normalizeLabel(raw) {
  if (!raw) {
    return DEFAULT_LABEL;
  }

  if (typeof raw === "string") {
    return {
      name: raw,
      slug: slugify(raw),
    };
  }

  if (raw.name) {
    return {
      name: raw.name,
      slug: raw.slug || slugify(raw.name),
    };
  }

  if (raw.data?.attributes) {
    return normalizeLabel(raw.data.attributes);
  }

  const entries = Object.values(raw).find(
    (value) => value && typeof value === "object"
  );

  if (entries) {
    return normalizeLabel(entries);
  }

  return DEFAULT_LABEL;
}

function slugify(value) {
  if (!value) {
    return "";
  }

  return value
    .toString()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
