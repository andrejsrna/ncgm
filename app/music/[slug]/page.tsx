import { getMusicBySlug, type MusicData } from "@/app/hooks/useMusicQuery";
import { SITE_URL, getCanonicalUrl } from "@/lib/env";
import { resolveStrapiImageUrl } from "@/lib/utils";
import TrackHero from "@/app/music/[slug]/TrackHero";
import LicensingInfoSection from "@/app/music/[slug]/LicensingInfoSection";
import SpotifyEmbedSection from "@/app/music/[slug]/SpotifyEmbedSection";
import ReleaseDescriptionSection from "@/app/music/[slug]/ReleaseDescriptionSection";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { marked } from "marked";
import { PRIMARY_LABEL, SITE_NAME } from "@/lib/site";

const notFoundMetadata = {
  title: `Track Not Found - ${SITE_NAME}`,
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
    const labelName = track.label?.name ?? PRIMARY_LABEL.name;

    // Extract plain text from HTML description
    const descriptionSource = track.Description ?? track.Content ?? "";
    const plainDescription = descriptionSource
      ? descriptionSource.replace(/<[^>]*>/g, "").substring(0, 160)
      : `Listen to ${track.Title} from the ${labelName} label on ${SITE_NAME}. Crafted for creators seeking stream-safe ${track.genre?.Genres || "music"}.`;

    const title = `${track.Title} – ${labelName} | ${SITE_NAME}`;
    const canonical = getCanonicalUrl(`/music/${slug}`);

    return {
      title,
      description: plainDescription,
      keywords: [
        track.Title,
        "no copyright music",
        "royalty-free music",
        track.genre?.Genres || "music",
        "gaming music",
        "stream music",
        "youtube music",
        "content creator music",
        "copyright free",
        labelName,
        SITE_NAME,
      ],
      authors: [{ name: labelName }],
      openGraph: {
        title,
        description: plainDescription,
        url: canonical,
        siteName: SITE_NAME,
        images: [
          {
            url: coverUrl || `${SITE_URL}/og-image.jpg`,
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
        images: [coverUrl || `${SITE_URL}/og-image.jpg`],
      },
      alternates: {
        canonical,
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
  const labelName = track.label?.name ?? PRIMARY_LABEL.name;

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
    url: getCanonicalUrl(`/music/${slug}`),
    license: `${SITE_URL}/license`,
    author: {
      "@type": "Organization",
      name: labelName,
      url: SITE_URL,
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
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Music",
        item: getCanonicalUrl("/music"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: track.Title,
        item: getCanonicalUrl(`/music/${slug}`),
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <article className="bg-slate-50 py-16">
        <div className="mx-auto max-w-5xl space-y-12 px-4 sm:px-6 lg:px-8">
          <TrackHero track={track} coverUrl={coverUrl} />
          <LicensingInfoSection />
          <SpotifyEmbedSection embedHtml={track.spotify_embed ?? ""} />
          <ReleaseDescriptionSection contentHtml={contentHtml} />
        </div>
      </article>
    </>
  );
}
