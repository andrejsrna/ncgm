import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getMusicData } from "@/app/hooks/useMusicQuery";
import MusicCard from "@/app/music/MusicCard";
import { getLabelDefinition, LABEL_LIST } from "@/lib/site";
import { getCanonicalUrl } from "@/lib/env";
import { slugify } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return LABEL_LIST.map((label) => ({ slug: label.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const label = getLabelDefinition(slug);

  if (!label) {
    return {};
  }

  return {
    title: label.seo.title,
    description: label.seo.description,
    keywords: label.seo.keywords,
    alternates: {
      canonical: getCanonicalUrl(`/labels/${label.slug}`),
    },
    openGraph: {
      title: label.seo.title,
      description: label.seo.description,
      url: getCanonicalUrl(`/labels/${label.slug}`),
      siteName: "NJK Music",
      type: "website",
      images: label.heroImage
        ? [
            {
              url: label.heroImage,
              width: 1600,
              height: 900,
              alt: `${label.name} Label Artwork`,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: label.seo.title,
      description: label.seo.description,
      images: label.heroImage ? [label.heroImage] : undefined,
    },
  };
}

export default async function LabelPage({ params }: PageProps) {
  const { slug } = await params;
  const label = getLabelDefinition(slug);

  if (!label) {
    notFound();
  }

  const releases = (await getMusicData())
    .filter((track) => {
      const trackLabelSlug =
        track.label?.slug ?? (track.label?.name ? slugify(track.label.name) : null);
      return trackLabelSlug === label.slug;
    })
    .sort((a, b) => {
      const dateA = new Date(a.publishedAt ?? a.pubDate ?? a.updatedAt ?? "").getTime();
      const dateB = new Date(b.publishedAt ?? b.pubDate ?? b.updatedAt ?? "").getTime();
      return dateB - dateA;
    });

  const releaseCount = releases.length;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: label.name,
    url: getCanonicalUrl(`/labels/${label.slug}`),
    description: label.description,
    genre: "Electronic Music",
    memberOf: {
      "@type": "Organization",
      name: "NJK Music",
      url: getCanonicalUrl("/"),
    },
    numberOfAlbums: releaseCount,
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
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 50%, rgba(185, 28, 28, 0.6) 1px, transparent 1px),
              radial-gradient(circle at 0% 0%, rgba(185, 28, 28, 0.6) 1px, transparent 1px)
            `,
            backgroundSize: "24px 24px, 24px 24px",
            backgroundPosition: "0 0, 12px 12px",
          }}
        />

        <article className="relative mx-auto max-w-6xl px-4 pb-24 pt-28 sm:px-6 lg:px-8">
          <header className="grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-center">
            <div className="space-y-6">
              <Link
                href="/music"
                className="inline-flex items-center gap-2 rounded-full border border-red-900/40 bg-black/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-red-300 transition hover:border-red-600 hover:text-white"
              >
                Back to Music Library
              </Link>
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-red-900/40 bg-red-950/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-red-200">
                  NJK Music Label
                </span>
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  {label.name}
                </h1>
                <p className="text-lg text-red-200/80 sm:text-xl">{label.tagline}</p>
              </div>
              <p className="max-w-2xl text-sm leading-relaxed text-red-200/80 sm:text-base">
                {label.description}
              </p>
              <ul className="space-y-3 text-sm leading-relaxed text-red-100/80">
                {label.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-red-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="relative">
              <div className="rounded-3xl border border-red-900/40 bg-black/70 p-6 shadow-[0_0_45px_-20px_rgba(248,113,113,0.6)]">
                <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-red-200">
                  Label Snapshot
                </h2>
                <dl className="mt-6 space-y-4 text-sm text-red-100/80 sm:text-base">
                  {label.callouts.map((callout) => (
                    <div key={callout.title}>
                      <dt className="uppercase tracking-[0.35em] text-red-400/80">
                        {callout.title}
                      </dt>
                      <dd className="text-lg font-semibold text-white">{callout.detail}</dd>
                    </div>
                  ))}
                  <div>
                    <dt className="uppercase tracking-[0.35em] text-red-400/80">Catalogue</dt>
                    <dd className="text-lg font-semibold text-white">
                      {releaseCount} release{releaseCount === 1 ? "" : "s"}
                    </dd>
                  </div>
                </dl>
              </div>
              {label.heroImage && (
                <div className="mt-6 overflow-hidden rounded-3xl border border-red-900/40 bg-black">
                  <Image
                    src={label.heroImage}
                    alt={`${label.name} artwork`}
                    width={900}
                    height={900}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
            </aside>
          </header>

          <section className="mt-20">
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Latest Releases
              </h2>
              <p className="text-sm uppercase tracking-[0.35em] text-red-300">
                {releaseCount} creator-ready drop{releaseCount === 1 ? "" : "s"}
              </p>
            </div>
            {releaseCount > 0 ? (
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {releases.map((track) => (
                  <MusicCard key={track.documentId ?? track.slug} track={track} />
                ))}
              </div>
            ) : (
              <p className="rounded-2xl border border-red-900/40 bg-black/70 p-8 text-sm text-red-200/80">
                Releases from this label are loading soon. Check back for fresh drops or explore other NJK Music
                catalogues.
              </p>
            )}
          </section>

          <section className="mt-20 rounded-3xl border border-red-900/40 bg-black/70 p-8">
            <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-red-200">
              Explore More Labels
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {LABEL_LIST.filter((item) => item.slug !== label.slug).map((item) => (
                <Link
                  key={item.slug}
                  href={`/labels/${item.slug}`}
                  className="group inline-flex items-center gap-2 rounded-full border border-red-900/40 bg-black/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-red-200/80 transition hover:border-red-600 hover:text-white"
                >
                  <span>{item.name}</span>
                  <span className="text-red-500/60 group-hover:text-red-400">→</span>
                </Link>
              ))}
              {LABEL_LIST.length <= 1 && (
                <span className="text-sm text-red-200/70">
                  New labels are coming soon to the NJK Music roster.
                </span>
              )}
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
