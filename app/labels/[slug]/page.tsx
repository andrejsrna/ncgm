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
      <div className="min-h-screen bg-slate-50 py-16">
        <article className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <header className="grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-start">
            <div className="space-y-8">
              <Link
                href="/labels"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-600 transition hover:bg-slate-100"
              >
                Back to Labels
              </Link>

              <div className="space-y-5 rounded-3xl border border-border bg-white p-8 shadow-sm">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-600">
                  NJK Music Label
                </span>
                <div className="space-y-3">
                  <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                    {label.name}
                  </h1>
                  <p className="text-base uppercase tracking-[0.3em] text-slate-500 sm:text-sm">
                    {label.tagline}
                  </p>
                </div>
                <p className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                  {label.description}
                </p>
                <ul className="grid gap-4 rounded-2xl border border-dashed border-border/80 bg-slate-50 px-4 py-5 text-sm text-slate-600 sm:grid-cols-2 sm:text-base">
                  {label.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
                  Label Snapshot
                </h2>
                <dl className="mt-6 grid gap-6 text-sm text-slate-600 sm:text-base">
                  {label.callouts.map((callout) => (
                    <div key={callout.title} className="rounded-2xl border border-border/60 bg-slate-50 px-4 py-3">
                      <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                        {callout.title}
                      </dt>
                      <dd className="text-lg font-semibold text-slate-900">{callout.detail}</dd>
                    </div>
                  ))}
                  <div className="rounded-2xl border border-border/60 bg-slate-50 px-4 py-3">
                    <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Catalogue</dt>
                    <dd className="text-lg font-semibold text-slate-900">
                      {releaseCount} release{releaseCount === 1 ? "" : "s"}
                    </dd>
                  </div>
                </dl>
              </div>

              {label.heroImage && (
                <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
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

          <section className="mt-16">
            <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  Latest Releases
                </h2>
                <p className="text-sm text-slate-500">
                  Stream-safe drops crafted for the {label.name} community.
                </p>
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
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
              <p className="rounded-3xl border border-dashed border-border/80 bg-white p-8 text-sm text-slate-600 sm:text-base">
                Releases from this label are loading soon. Check back for fresh drops or explore other NJK Music
                catalogues.
              </p>
            )}
          </section>

          <section className="mt-16 rounded-3xl border border-border bg-white p-8 shadow-sm">
            <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
              Explore More Labels
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {LABEL_LIST.filter((item) => item.slug !== label.slug).map((item) => (
                <Link
                  key={item.slug}
                  href={`/labels/${item.slug}`}
                  className="group inline-flex items-center gap-2 rounded-full border border-border bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-600 transition hover:bg-slate-100"
                >
                  <span>{item.name}</span>
                  <span className="text-primary group-hover:translate-x-0.5 transition">→</span>
                </Link>
              ))}
              {LABEL_LIST.length <= 1 && (
                <span className="text-sm text-slate-500">
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
