import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getMusicData } from "@/app/hooks/useMusicQuery";
import { getCanonicalUrl } from "@/lib/env";
import { LABEL_LIST, SITE_NAME } from "@/lib/site";
import { slugify } from "@/lib/utils";

const pageTitle = "Explore NJK Music Labels";
const pageDescription =
  "Browse every label in the NJK Music ecosystem and discover stream-safe releases for creators, studios, and storytellers.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "njk music labels",
    "stream safe labels",
    "royalty free music labels",
    "no copyright music",
  ],
  alternates: {
    canonical: getCanonicalUrl("/labels"),
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: getCanonicalUrl("/labels"),
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

export default async function LabelsIndexPage() {
  const releases = await getMusicData();
  const releaseCounts = releases.reduce<Record<string, number>>((acc, track) => {
    const trackLabelSlug =
      track.label?.slug ?? (track.label?.name ? slugify(track.label.name) : null);

    if (!trackLabelSlug) {
      return acc;
    }

    acc[trackLabelSlug] = (acc[trackLabelSlug] ?? 0) + 1;
    return acc;
  }, {});

  const labels = [...LABEL_LIST].sort((a, b) => a.name.localeCompare(b.name));

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "NJK Music Labels",
    itemListElement: labels.map((label, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: getCanonicalUrl(`/labels/${label.slug}`),
      name: label.name,
      description: label.description,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <div className="min-h-screen bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <header className="mb-12 space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              NJK Music Labels
            </h1>
            <p className="mx-auto max-w-3xl text-base text-slate-600 sm:text-lg">
              Meet the labels shaping the NJK Music catalog. Each roster delivers stream-safe, royalty-free releases
              designed for creators, agencies, and production teams.
            </p>
          </header>

          <section className="grid gap-8 lg:grid-cols-2">
            {labels.map((label) => {
              const count = releaseCounts[label.slug] ?? 0;

              return (
                <article
                  key={label.slug}
                  className="flex flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-sm"
                >
                  {label.heroImage && (
                    <div className="relative h-48 w-full border-b border-border/60 bg-slate-900/30">
                      <Image
                        src={label.heroImage}
                        alt={`${label.name} artwork`}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 50vw, 100vw"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col gap-6 p-8">
                    <div className="space-y-3">
                      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-600">
                        {label.short ?? label.name}
                      </span>
                      <div className="space-y-2">
                        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                          {label.name}
                        </h2>
                        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                          {label.tagline}
                        </p>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                        {label.description}
                      </p>
                    </div>

                    <dl className="grid gap-4 rounded-2xl border border-dashed border-border/80 bg-slate-50 px-4 py-5 text-sm text-slate-600 sm:grid-cols-3 sm:text-base">
                      {label.callouts.map((callout) => (
                        <div key={callout.title}>
                          <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                            {callout.title}
                          </dt>
                          <dd className="text-base font-semibold text-slate-900 sm:text-lg">
                            {callout.detail}
                          </dd>
                        </div>
                      ))}
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                          Releases
                        </dt>
                        <dd className="text-base font-semibold text-slate-900 sm:text-lg">
                          {count} {count === 1 ? "release" : "releases"}
                        </dd>
                      </div>
                    </dl>

                    <div className="mt-auto">
                      <Link
                        href={`/labels/${label.slug}`}
                        className="inline-flex items-center gap-2 rounded-full border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-slate-800"
                      >
                        View Label Catalog →
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}

            {labels.length === 0 && (
              <p className="rounded-3xl border border-dashed border-border/80 bg-white p-8 text-center text-sm text-slate-500 sm:text-base">
                Label roster updates are coming soon. Check back shortly to explore the NJK Music ecosystem.
              </p>
            )}
          </section>
        </div>
      </div>
    </>
  );
}
