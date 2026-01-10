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
      <div className="min-h-screen bg-transparent py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <header className="mb-12 space-y-5 text-center">
            <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-200 backdrop-blur">
              Labels
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              NJK Music label roster
            </h1>
            <p className="mx-auto max-w-3xl text-base text-slate-300 sm:text-lg">
              Explore each label mood in the NJK Music ecosystem and jump into its latest releases.
            </p>
          </header>

          <section className="grid gap-8 lg:grid-cols-2">
            {labels.map((label) => {
              const count = releaseCounts[label.slug] ?? 0;

              return (
                <article
                  key={label.slug}
                  className="flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-soft backdrop-blur transition hover:border-cyan-300/40 hover:bg-white/10"
                >
                  <div className="flex flex-1 flex-col gap-6 p-8">
                    <div className="space-y-3">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-200 backdrop-blur">
                        {label.short ?? label.name}
                      </span>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          {label.heroImage && (
                            <Image
                              src={label.heroImage}
                              alt={`${label.name} icon`}
                              width={40}
                              height={40}
                              className="h-10 w-10 rounded-xl border border-white/10 object-cover"
                            />
                          )}
                          <h2 className="text-2xl font-semibold tracking-tight text-white">
                            {label.name}
                          </h2>
                        </div>
                        <p className="text-sm uppercase tracking-[0.3em] text-slate-300">
                          {label.tagline}
                        </p>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                        {label.description}
                      </p>
                    </div>

                    <div className="mt-auto">
                      <Link
                        href={`/labels/${label.slug}`}
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-slate-950 transition hover:opacity-90"
                      >
                        View label ({count}) →
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}

            {labels.length === 0 && (
              <p className="rounded-3xl border border-dashed border-white/15 bg-white/5 p-8 text-center text-sm text-slate-300 shadow-soft backdrop-blur sm:text-base">
                Label roster updates are coming soon. Check back shortly to explore the NJK Music ecosystem.
              </p>
            )}
          </section>
        </div>
      </div>
    </>
  );
}
