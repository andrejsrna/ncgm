import path from "path";
import { readMarkdownDirectory, readMarkdownFile } from "@/lib/markdown";

export interface Post {
  pubDate?: string;
  id?: number;
  title: string;
  description?: string;
  content: string;
  slug: string;
  category?: string;
  image?: {
    formats?: {
      large?: {
        url?: string;
      };
    };
    url?: string;
  };
  publishedAt?: string;
  updatedAt?: string;
}

type PostFrontmatter = Omit<Post, "content">;

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export const getPosts = async (): Promise<Post[]> => {
  const entries = await readMarkdownDirectory<PostFrontmatter>(POSTS_DIR);

  const posts = entries.map(({ metadata, body, slug }) =>
    hydratePost(metadata, body, slug)
  );

  return posts.sort((a, b) => {
    const dateA = getComparableDate(a);
    const dateB = getComparableDate(b);
    return dateB - dateA;
  });
};

export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  const filePath = path.join(POSTS_DIR, `${slug}.md`);

  try {
    const { metadata, body } = await readMarkdownFile<PostFrontmatter>(
      filePath
    );
    return hydratePost(metadata, body, slug);
  } catch (error) {
    if (isNotFound(error)) {
      return null;
    }
    throw error;
  }
};

function hydratePost(
  metadata: PostFrontmatter,
  body: string,
  fallbackSlug: string
): Post {
  const slug = metadata.slug ?? fallbackSlug;
  const publishedAt =
    metadata.publishedAt ?? metadata.pubDate ?? metadata.updatedAt;

  return {
    ...metadata,
    slug,
    content: body,
    publishedAt,
    updatedAt: metadata.updatedAt ?? publishedAt,
  };
}

function getComparableDate(post: Post): number {
  const reference =
    post.publishedAt ?? post.pubDate ?? post.updatedAt ?? new Date().toISOString();
  const timestamp = new Date(reference).getTime();
  return Number.isNaN(timestamp) ? 0 : timestamp;
}

function isNotFound(error: unknown): boolean {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    error.code === "ENOENT"
  );
}
