import { getMusicBySlug, type MusicData } from "@/app/hooks/useMusicQuery";
import { resolveStrapiImageUrl } from "@/lib/utils";
import TrackHero from "@/app/music/[slug]/TrackHero";
import LicensingInfoSection from "@/app/music/[slug]/LicensingInfoSection";
import SpotifyEmbedSection from "@/app/music/[slug]/SpotifyEmbedSection";
import ReleaseDescriptionSection from "@/app/music/[slug]/ReleaseDescriptionSection";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { marked } from "marked";

const notFoundMetadata = {
  title: "Track Not Found - No Copyright Gaming Music",
  description: "The requested music track could not be found.",
};

// Generate dynamic metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const track = (await getMusicBySlug(slug)) as MusicData | undefined;

    if (!track) {
      return notFoundMetadata;
    }

    const coverUrl = resolveStrapiImageUrl(track.Cover);

    // Extract plain text from HTML description
    const plainDescription = track.Content
      ? track.Content.replace(/<[^>]*>/g, "").substring(0, 160)
      : `Listen to ${track.Title} - No copyright ${track.genre?.Genres || "music"} track perfect for gaming content, streams, and videos.`;

    const title = `${track.Title} - No Copyright ${track.genre?.Genres || "Music"} | NCGM`;
    const url = `https://nocopyrightgamingmusic.com/music/${slug}`;

    return {
      title,
      description: plainDescription,
      keywords: [
        track.Title,
        "no copyright music",
        "royalty free music",
        track.genre?.Genres || "music",
        "gaming music",
        "stream music",
        "youtube music",
        "content creator music",
        "copyright free",
      ],
      authors: [{ name: "No Copyright Gaming Music" }],
      openGraph: {
        title,
        description: plainDescription,
        url,
        siteName: "No Copyright Gaming Music",
        images: [
          {
            url: coverUrl || "https://nocopyrightgamingmusic.com/og-image.jpg",
            width: 1200,
            height: 630,
            alt: `${track.Title} - Album Cover`,
          },
        ],
        locale: "en_US",
        type: "music.song",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description: plainDescription,
        images: [coverUrl || "https://nocopyrightgamingmusic.com/og-image.jpg"],
      },
      alternates: {
        canonical: url,
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };
  } catch {
    return notFoundMetadata;
  }
}

export default async function MusicDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const track = (await getMusicBySlug(slug)) as MusicData | undefined;

  if (!track) {
    notFound();
  }

  const coverUrl = resolveStrapiImageUrl(track.Cover);
  const contentHtml = track.Content ? await marked(track.Content) : "";

  // Generate structured data (JSON-LD) for rich snippets
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MusicRecording",
    name: track.Title,
    genre: track.genre?.Genres || "Electronic",
    datePublished: track.publishedAt || track.createdAt,
    image: coverUrl,
    description: track.Content
      ? track.Content.replace(/<[^>]*>/g, "").substring(0, 200)
      : `${track.Title} - No copyright ${track.genre?.Genres || "music"} for content creators`,
    url: `https://nocopyrightgamingmusic.com/music/${slug}`,
    license: "https://nocopyrightgamingmusic.com/license",
    author: {
      "@type": "Organization",
      name: "No Copyright Gaming Music",
      url: "https://nocopyrightgamingmusic.com",
    },
    offers:
      track.Beatport || track.Bandcamp
        ? {
            "@type": "AggregateOffer",
            availability: "https://schema.org/InStock",
            priceCurrency: "USD",
            url: track.Beatport || track.Bandcamp,
          }
        : undefined,
    audio: track.Spotify
      ? {
          "@type": "AudioObject",
          contentUrl: track.Spotify,
          encodingFormat: "audio/mpeg",
        }
      : undefined,
  };

  // Breadcrumb structured data
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://nocopyrightgamingmusic.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Music",
        item: "https://nocopyrightgamingmusic.com/music",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: track.Title,
        item: `https://nocopyrightgamingmusic.com/music/${slug}`,
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <article className="min-h-screen bg-black relative">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(185, 28, 28, 0.7) 1px, transparent 1px),
            radial-gradient(circle at 0% 0%, rgba(185, 28, 28, 0.7) 1px, transparent 1px)
          `,
            backgroundSize: "24px 24px, 24px 24px",
            backgroundPosition: "0 0, 12px 12px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 py-32">
          <TrackHero track={track} coverUrl={coverUrl} />
          <LicensingInfoSection />
          <SpotifyEmbedSection embedHtml={track.spotify_embed ?? ""} />
          <ReleaseDescriptionSection contentHtml={contentHtml} />
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-40" />
        </div>
      </article>
    </>
  );
}
