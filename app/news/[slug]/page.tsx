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
}: PageProps): Promise<JSX.Element> {
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

      <div className="relative min-h-screen bg-black text-red-100">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          aria-hidden
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 50%, rgba(185, 28, 28, 0.6) 1px, transparent 1px),
              radial-gradient(circle at 0% 0%, rgba(185, 28, 28, 0.6) 1px, transparent 1px)
            `,
            backgroundSize: "24px 24px, 24px 24px",
            backgroundPosition: "0 0, 12px 12px",
          }}
        />

        <article className="relative mx-auto max-w-4xl px-4 pb-24 pt-28 sm:px-6 sm:pt-32 lg:px-8">
          <nav aria-label="Breadcrumb">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 rounded-full border border-red-900/40 bg-black/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-red-300 transition hover:border-red-600 hover:text-white"
            >
              <FaArrowLeft className="text-red-400" aria-hidden />
              Back to Neural Feed
            </Link>
          </nav>

          <header className="mt-10 space-y-6">
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.35em] text-red-300">
              {post.category && (
                <span className="rounded-full border border-red-900/40 bg-red-950/40 px-3 py-1">
                  {post.category}
                </span>
              )}
              {formattedDate && (
                <time
                  dateTime={publishedIso}
                  className="rounded-full border border-red-900/40 bg-red-950/40 px-3 py-1"
                >
                  {formattedDate}
                </time>
              )}
              <span className="flex items-center gap-2 rounded-full border border-red-900/40 bg-red-950/40 px-3 py-1 text-red-200">
                <FaClock aria-hidden />
                {readingTime} min read
              </span>
            </div>

            <div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {post.title}
              </h1>
              <p className="mt-4 max-w-2xl text-base text-red-200/80 sm:text-lg">
                {description}
              </p>
            </div>
          </header>

          {imageUrl && (
            <figure className="relative mt-12 overflow-hidden rounded-3xl border border-red-900/40 bg-black/40">
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

          <section className="mt-12 space-y-12">
            <div
              className="prose prose-invert max-w-none text-base leading-relaxed tracking-wide
                prose-headings:text-white prose-headings:font-semibold prose-headings:tracking-tight
                prose-p:text-red-200/80 prose-a:text-red-300 prose-a:no-underline hover:prose-a:text-white
                prose-strong:text-red-100 prose-em:text-red-200/90 prose-code:text-red-200
                prose-code:bg-red-950/60 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                prose-blockquote:border-l-2 prose-blockquote:border-red-500/40 prose-blockquote:bg-red-950/30 prose-blockquote:py-4 prose-blockquote:px-6
                prose-ul:my-6 prose-ol:my-6 prose-li:marker:text-red-400
                prose-hr:border-red-900/50"
            >
              <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </div>

            <aside className="border-t border-red-900/30 pt-8">
              <ShareButtons post={post} />
            </aside>
          </section>
        </article>

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-30" />
        </div>
      </div>
    </>
  );
}
