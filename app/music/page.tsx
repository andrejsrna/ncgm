import type { Metadata } from "next";
import Link from "next/link";
import { getMusicData } from "@/app/hooks/useMusicQuery";
import { SITE_URL, getCanonicalUrl } from "@/lib/env";
import MusicBrowser from "@/app/music/MusicBrowser";
import { slugify } from "@/lib/utils";
import { PRIMARY_LABEL, SITE_NAME } from "@/lib/site";

const pageTitle = `${SITE_NAME} Label Library`;
const pageDescription =
  "Explore NJK Music's label ecosystem. Start with the No Copyright Gaming Music catalog for stream-safe, creator-ready releases.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "njk music",
    "label catalog",
    "royalty-free music",
    "stream safe music",
  ],
  alternates: {
    canonical: getCanonicalUrl("/music"),
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: getCanonicalUrl("/music"),
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "NJK Music Label Library",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [`${SITE_URL}/og-image.jpg`],
  },
};

export default async function MusicPage() {
  const music = await getMusicData();

  const sortedMusic = [...music].sort((a, b) => {
    const dateA = new Date(a.pubDate ?? a.publishedAt ?? a.updatedAt ?? 0).getTime();
    const dateB = new Date(b.pubDate ?? b.publishedAt ?? b.updatedAt ?? 0).getTime();
    return dateB - dateA;
  });

  const genreMap = sortedMusic.reduce<Record<string, number>>((acc, track) => {
    const name = track.genre?.Genres?.trim();
    if (!name) {
      return acc;
    }
    acc[name] = (acc[name] || 0) + 1;
    return acc;
  }, {});

  const genres = Object.entries(genreMap)
    .map(([label, count]) => ({ label, count }))
    .sort((a, b) => a.label.localeCompare(b.label));

  const labelMap = sortedMusic.reduce<Record<
    string,
    { label: string; slug: string; count: number }
  >>((acc, track) => {
    const name = track.label?.name?.trim();
    if (!name) {
      return acc;
    }
    const slug = track.label?.slug ?? slugify(name);
    const existing = acc[slug] ?? { label: name, slug, count: 0 };
    existing.count += 1;
    existing.label = name;
    acc[slug] = existing;
    return acc;
  }, {});

  const labels = Object.values(labelMap).sort((a, b) =>
    a.label.localeCompare(b.label)
  );

  const faqs = [
    {
      question: "Can I download and use these gaming tracks on Twitch and YouTube?",
      answer:
        `Yes. Every release across NJK Music labels is cleared for Twitch, YouTube, Kick, and other streaming platforms. You can monetize your content as long as you follow the No Copyright Gaming Music attribution guidelines where applicable.`,
    },
    {
      question: "How do I download no copyright gaming music from this page?",
      answer:
        `Browse the grid below and click into a track. Each detail page includes direct download links plus streaming access so you can grab the format that works best for your workflow.`,
    },
    {
      question: "Are commercial or client projects allowed?",
      answer:
        "Absolutely. The NJK Music license covers podcasts, indie games, trailers, and agency work. Just make sure your clients include the proper attribution outlined in our license guide.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              NJK Music Label Library
            </h1>
            <p className="text-base text-slate-600 sm:text-lg">
              Discover NJK Music&apos;s growing collective of labels. Start with the {PRIMARY_LABEL.name} catalog for
              stream-safe releases built for gamers, streamers, and studios.
            </p>
            <div className="flex justify-center">
              <Link
                href={`/labels/${PRIMARY_LABEL.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-600 transition hover:bg-slate-100"
              >
                Explore {PRIMARY_LABEL.short ?? PRIMARY_LABEL.name} Label →
              </Link>
            </div>
          </div>

          <div className="mx-auto mb-14 max-w-3xl rounded-2xl border border-border bg-white p-6 text-left shadow-sm">
            <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
              Why choose our downloads?
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 sm:text-base">
              <li>⚡ Unlimited use across streams, videos, and game demos.</li>
              <li>🎮 Curated by gamers for high-energy, looping-friendly vibes.</li>
              <li>✅ Cleared for monetization with attribution-friendly licensing.</li>
            </ul>
          </div>

          <MusicBrowser tracks={sortedMusic} genres={genres} labels={labels} />

          <section className="mx-auto mt-16 grid gap-6 rounded-2xl border border-border bg-white p-6 text-left shadow-sm sm:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.question} className="space-y-2">
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                  {faq.question}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{faq.answer}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
}
