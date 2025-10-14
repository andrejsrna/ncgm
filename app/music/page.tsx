import type { Metadata } from "next";
import { getMusicData } from "@/app/hooks/useMusicQuery";
import { SITE_URL, getCanonicalUrl } from "@/lib/env";
import MusicBrowser from "@/app/music/MusicBrowser";

const pageTitle = "No Copyright Gaming Music Download Library";
const pageDescription =
  "Download no copyright gaming music instantly. Explore high-energy background tracks for Twitch, YouTube, and game projects without worrying about claims.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "no copyright gaming music download",
    "download free gaming music",
    "royalty free gaming tracks",
    "stream safe music downloads",
  ],
  alternates: {
    canonical: getCanonicalUrl("/music"),
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: getCanonicalUrl("/music"),
    siteName: "No Copyright Gaming Music",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "No Copyright Gaming Music Download Library",
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

  const sortedMusic = [...music].sort(
    (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
  );

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

  const faqs = [
    {
      question: "Can I download and use these gaming tracks on Twitch and YouTube?",
      answer:
        "Yes. Every track in our library is cleared for Twitch, YouTube, Kick, and other streaming platforms. You can monetize your content as long as you credit No Copyright Gaming Music where possible.",
    },
    {
      question: "How do I download no copyright gaming music from this page?",
      answer:
        "Browse the grid below and click into a track. Each detail page includes direct download links plus streaming access so you can grab the format that works best for your workflow.",
    },
    {
      question: "Are commercial or client projects allowed?",
      answer:
        "Absolutely. Our license covers podcasts, indie games, trailers, and agency work. Just make sure your clients include the proper attribution outlined in our license guide.",
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
      <div className="min-h-screen bg-black relative">
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

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 py-32">
          {/* Page Title */}
          <div className="mb-12 text-center">
            <h1 className="relative inline-block text-balance">
              <span className="absolute -inset-2 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-50 blur" />
              <span className="relative text-4xl font-bold tracking-tight text-white sm:text-5xl">
                No Copyright Gaming Music Download Hub
              </span>
            </h1>
            <p className="mt-4 text-balance text-red-200/80 sm:text-lg">
              Grab stream-safe, royalty-free downloads crafted for gamers, streamers, and creators. Filter through our
              latest releases to find the perfect soundtrack for Twitch, YouTube, or your next indie build&mdash;no claims,
              no headaches.
            </p>
          </div>

          <div className="mx-auto mb-10 max-w-3xl rounded-2xl border border-red-900/40 bg-black/60 p-6 text-left">
            <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-red-300">
              Why choose our downloads?
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-red-200/80 sm:text-base">
              <li>⚡ Unlimited use across streams, videos, and game demos.</li>
              <li>🎮 Curated by gamers for high-energy, looping-friendly vibes.</li>
              <li>✅ Cleared for monetization with attribution-friendly licensing.</li>
            </ul>
          </div>

          <MusicBrowser tracks={sortedMusic} genres={genres} />

          <section className="mx-auto mt-14 grid gap-6 rounded-2xl border border-red-900/40 bg-black/60 p-6 text-left sm:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.question} className="space-y-2">
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-red-200">
                  {faq.question}
                </h3>
                <p className="text-sm leading-relaxed text-red-200/80 sm:text-base">{faq.answer}</p>
              </div>
            ))}
          </section>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-40" />
        </div>
      </div>
    </>
  );
}
