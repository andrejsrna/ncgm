import fs from "fs/promises";
import path from "path";

export interface ParsedMarkdown<T> {
  metadata: T;
  body: string;
}

const FRONTMATTER_PATTERN = /^---json\s*([\s\S]*?)\n---\s*/i;

export async function readMarkdownFile<T>(
  filePath: string
): Promise<ParsedMarkdown<T>> {
  const raw = await fs.readFile(filePath, "utf8");
  return parseMarkdown<T>(raw);
}

export async function readMarkdownDirectory<T>(
  directoryPath: string
): Promise<Array<ParsedMarkdown<T> & { slug: string }>> {
  const entries = await safeReaddir(directoryPath);
  const markdownFiles = entries.filter((entry) => entry.endsWith(".md"));

  return Promise.all(
    markdownFiles.map(async (fileName) => {
      const fullPath = path.join(directoryPath, fileName);
      const { metadata, body } = await readMarkdownFile<T>(fullPath);
      const slug = fileName.replace(/\.md$/, "");
      return { metadata, body, slug };
    })
  );
}

export function parseMarkdown<T>(content: string): ParsedMarkdown<T> {
  const match = content.match(FRONTMATTER_PATTERN);

  if (!match) {
    return {
      metadata: {} as T,
      body: content.trim(),
    };
  }

  const [, frontmatterJson] = match;

  let metadata: T = {} as T;
  if (frontmatterJson.trim().length > 0) {
    metadata = JSON.parse(frontmatterJson);
  }

  const body = content.slice(match[0].length).trim();

  return { metadata, body };
}

async function safeReaddir(directoryPath: string): Promise<string[]> {
  try {
    await fs.access(directoryPath);
  } catch {
    return [];
  }

  const entries = await fs.readdir(directoryPath);
  entries.sort((a, b) => a.localeCompare(b));
  return entries;
}
