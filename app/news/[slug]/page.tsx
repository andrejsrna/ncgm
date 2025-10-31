import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Remarkable } from "remarkable";
import { FaArrowLeft, FaClock } from "react-icons/fa";
import ShareButtons from "@/app/components/sharebuttons";
import { getPostBySlug, type Post } from "@/app/lib/posts";
import { SITE_URL, getCanonicalUrl } from "@/lib/env";
import { resolveStrapiImageUrl } from "@/lib/utils";

const markdown = new Remarkable({ breaks: true, html: true });

interface PageProps {
  params: Promise<{ slug: string }>;
}

const fallbackMetadata: Metadata = {
  title: "Article Not Found | No Copyright Gaming Music",
  description: "The requested news article could not be located.",
};

const formatPlainText = (html: string) =>
  html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

const buildDescription = (post: Post, plainText: string) => {
  if (post.description?.length) {
    return post.description;
  }
  return plainText.slice(0, 160);
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return fallbackMetadata;
  }

  const imageUrl = resolveStrapiImageUrl(post.image);
  const htmlContent = markdown.render(post.content || "");
  const plainText = formatPlainText(htmlContent);
  const description = buildDescription(post, plainText);
  const canonical = getCanonicalUrl(`/news/${slug}`);
  const publishedTime = post.publishedAt || post.pubDate;

  return {
    title: `${post.title} | Neural Feed`,
    description,
    keywords: [
      post.title,
      post.category,
      "gaming music news",
      "nocopyrightgamingmusic",
    ].filter(Boolean) as string[],
    alternates: {
      canonical,
    },
    openGraph: {
      title: post.title,
      description,
      url: canonical,
      siteName: "No Copyright Gaming Music",
      type: "article",
      publishedTime,
      modifiedTime: post.updatedAt,
      images: imageUrl
        ? [
            {
              url: imageUrl,
              alt: post.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export default async function NewsDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const imageUrl = resolveStrapiImageUrl(post.image);
  const htmlContent = markdown.render(post.content || "");
  const plainText = formatPlainText(htmlContent);
  const description = buildDescription(post, plainText);
  const wordCount = plainText.split(/\s+/).filter(Boolean).length;
  const readingTime = Math.max(1, Math.round(wordCount / 225));
  const publishedDate = post.publishedAt || post.pubDate;
  const publishedIso = publishedDate ? new Date(publishedDate).toISOString() : undefined;
  const updatedIso = post.updatedAt
    ? new Date(post.updatedAt).toISOString()
    : publishedIso;
  const formattedDate = publishedDate
    ? new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(new Date(publishedDate))
    : post.pubDate;
  const canonical = `${SITE_URL}/news/${slug}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    description,
    datePublished: publishedIso,
    dateModified: updatedIso,
    mainEntityOfPage: canonical,
    image: imageUrl ? [imageUrl] : undefined,
    author: {
      "@type": "Organization",
      name: "No Copyright Gaming Music",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "No Copyright Gaming Music",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-slate-50">
        <section className="bg-gradient-to-b from-white to-slate-50">
          <div className="mx-auto flex min-h-[30vh] max-w-4xl flex-col justify-center gap-6 px-4 py-16 sm:px-6 lg:px-8">
            <Link
              href="/news"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 transition hover:bg-slate-100"
              aria-label="Back to news index"
            >
              <FaArrowLeft className="h-4 w-4 text-primary" aria-hidden />
              Back to News
            </Link>

            <div className="space-y-6">
              <div className="flex flex-wrap gap-3 text-xs font-medium uppercase tracking-[0.3em] text-slate-500">
                {post.category && (
                  <span className="inline-flex items-center rounded-full border border-border bg-white px-3 py-1">
                    {post.category}
                  </span>
                )}
                {formattedDate && (
                  <time
                    dateTime={publishedIso}
                    className="inline-flex items-center rounded-full border border-border bg-white px-3 py-1"
                  >
                    {formattedDate}
                  </time>
                )}
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-slate-600">
                  <FaClock aria-hidden className="h-3.5 w-3.5 text-primary" />
                  {readingTime} min read
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  {post.title}
                </h1>
                <p className="max-w-2xl text-base text-slate-600 sm:text-lg">{description}</p>
              </div>
            </div>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
          {imageUrl && (
            <figure className="relative -mt-16 overflow-hidden rounded-3xl border border-border bg-white shadow-sm sm:-mt-20">
              <Image
                src={imageUrl}
                alt={post.title}
                width={1600}
                height={900}
                className="h-full w-full object-cover"
                priority
              />
              <figcaption className="sr-only">{post.title}</figcaption>
            </figure>
          )}

          <div className="mt-16 space-y-12 rounded-3xl border border-border bg-white p-6 shadow-sm sm:p-10">
            <div
              className="prose max-w-none text-base leading-relaxed text-slate-700
                prose-headings:text-slate-900 prose-headings:font-semibold prose-headings:tracking-tight
                prose-a:text-primary prose-a:no-underline hover:prose-a:text-primary/80
                prose-strong:text-slate-900 prose-em:text-slate-700 prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                prose-blockquote:border-l-4 prose-blockquote:border-primary/40 prose-blockquote:bg-slate-50 prose-blockquote:py-4 prose-blockquote:px-6
                prose-ul:my-6 prose-ol:my-6 prose-li:marker:text-primary
                prose-hr:border-border"
            >
              <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </div>

            <aside className="rounded-2xl border border-dashed border-border/70 bg-slate-50 px-6 py-8">
              <ShareButtons post={post} />
            </aside>
          </div>
        </article>
      </div>
    </>
  );
}
