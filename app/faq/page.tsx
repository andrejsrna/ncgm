import type { Metadata } from "next";
import Link from "next/link";
import { FaChevronLeft, FaEnvelope, FaLifeRing } from "react-icons/fa";
import { SITE_NAME } from "@/lib/site";

type FaqCategory = {
  category: string;
  description: string;
  questions: {
    q: string;
    a: string;
  }[];
};

export const metadata: Metadata = {
  title: `FAQ | ${SITE_NAME}`,
  description:
    "Answers to the questions we hear most from creators, listeners, and partners—licensing models, Content ID, downloads, and how to reach the NJK Music team.",
};

const faqs: FaqCategory[] = [
  {
    category: "Getting started",
    description: "Quick orientation for listeners, creators, and teams.",
    questions: [
      {
        q: "What is NJK Music?",
        a: "NJK Music is a label collective and release hub. We publish music across multiple imprints—from creator-ready drops to rights-managed catalogs—so listeners can discover new records and creators can license tracks with confidence.",
      },
      {
        q: "Where should I start?",
        a: "Start on the Music page, pick a release you like, and open the label page if you want to explore the full roster. If you’re using music in content, also review the Licensing and Content ID guides.",
      },
      {
        q: "Do I need an account on njkmusic.com?",
        a: "No. The site is a catalog and guidance hub. Purchases happen on the linked stores (Beatport, Apple/iTunes, Amazon, etc.).",
      },
    ],
  },
  {
    category: "Listening & discovery",
    description: "Questions for normal listeners and fans.",
    questions: [
      {
        q: "Can I just listen without downloading anything?",
        a: "Yes. Use the streaming links on each release page (when available), or follow the label pages to browse the full catalog.",
      },
      {
        q: "How do I find more tracks like this one?",
        a: "Open the label page from any release and browse similar drops. On release pages, we also show related tracks based on label/genre.",
      },
      {
        q: "Do you have multiple labels?",
        a: "Yes. NJK Music groups releases by imprint/label so each catalog can keep a consistent mood and licensing approach.",
      },
    ],
  },
  {
    category: "Licensing & usage",
    description: "What’s allowed and when you need clearance.",
    questions: [
      {
        q: "Are all tracks royalty-free?",
        a: "Not always. Some labels are creator-ready (royalty-free workflows), while others are rights-managed and require a purchase/licence before use. Always check the label notes on the release page and the Licensing overview.",
      },
      {
        q: "Can I use NJK Music in client work?",
        a: "In most cases, yes—finished edits and campaign deliverables are fine as long as the music stays embedded in the project and you’re not redistributing the raw audio files. If a client needs broader redistribution or broadcast usage, contact us for clearance.",
      },
      {
        q: "What’s not allowed?",
        a: "You can’t reupload our tracks as your own music, resell the audio, or redistribute the raw files (including as part of another library). For large-scale advertising, broadcast, or distribution, request custom clearance first.",
      },
    ],
  },
  {
    category: "Content ID & claims",
    description: "How claims happen and how we resolve them.",
    questions: [
      {
        q: "Why did I get a Content ID claim?",
        a: "Content ID is automated and can match audio even when you’re properly licensed. Some catalogs are monetized, and licensed creators may need a whitelist to prevent claims.",
      },
      {
        q: "What should I send to get whitelisted?",
        a: "Send your channel/profile URL, the claimed video URL, and your proof of purchase/licence (receipt or order ID). If possible, include a screenshot of the claim details (claimant + claim ID).",
      },
      {
        q: "Should I dispute the claim myself?",
        a: "If you’re unsure whether the release is royalty-free or rights-managed, contact us first. We’ll tell you the safest and fastest path and can whitelist/clear when applicable.",
      },
    ],
  },
  {
    category: "Purchases & downloads",
    description: "Where files come from and what to do when something breaks.",
    questions: [
      {
        q: "Where do downloads come from?",
        a: "Downloads and receipts come from the linked stores on the release page (Beatport, Apple/iTunes, Amazon, etc.). After purchase, download from your store account’s Purchases/Library section.",
      },
      {
        q: "Which formats do I get?",
        a: "It depends on the store and the release. Many stores offer WAV/MP3 (or equivalent) for purchased downloads. Streaming-only listings may not include downloadable files.",
      },
      {
        q: "What if I can’t download or I need an invoice?",
        a: "Start with the Purchase Guide and Purchase Issues pages. If you’re still stuck, contact us with your order ID and the store you used.",
      },
    ],
  },
];

const anchorFor = (label: string) =>
  label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur">
      <summary className="cursor-pointer list-none select-none text-lg font-semibold text-white">
        <span className="inline-flex items-start gap-3">
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-200" aria-hidden />
          <span>{q}</span>
        </span>
      </summary>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">{a}</p>
      <div className="mt-4 text-xs font-medium uppercase tracking-[0.3em] text-slate-400">
        <a className="hover:text-slate-200" href="#top">
          Back to top
        </a>
      </div>
    </details>
  );
}

export default function FaqPage() {
  return (
    <div id="top" className="min-h-screen bg-transparent text-white">
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-soft backdrop-blur">
            <Link
              href="/help"
              className="inline-flex items-center gap-2 text-sm font-medium text-cyan-200 hover:text-cyan-100"
            >
              <FaChevronLeft className="h-4 w-4" aria-hidden />
              Back to Help Centre
            </Link>

            <div className="mt-8 max-w-3xl space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                FAQ
              </h1>
              <p className="text-base text-slate-300 sm:text-lg">
                Answers for creators, listeners, and partners—how our labels work, what licensing model applies, and how
                to resolve Content ID claims fast.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/license"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/0 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 backdrop-blur transition hover:bg-white/5"
              >
                Licensing overview
              </Link>
              <Link
                href="/help/content-id"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/0 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 backdrop-blur transition hover:bg-white/5"
              >
                Content ID guide
              </Link>
              <Link
                href="/music"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-soft transition hover:from-cyan-400 hover:to-fuchsia-400"
              >
                Explore music
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <section aria-label="FAQ navigation">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-1">
                <h2 className="text-xl font-semibold text-white">Browse by topic</h2>
                <p className="text-sm text-slate-300">
                  Jump straight to the topic you need.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {faqs.map((category) => (
                  <a
                    key={category.category}
                    href={`#${anchorFor(category.category)}`}
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/0 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur transition hover:bg-white/5"
                  >
                    {category.category}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 space-y-16">
          {faqs.map((category) => (
            <article
              key={category.category}
              id={anchorFor(category.category)}
              className="scroll-mt-24"
            >
              <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="max-w-2xl space-y-2">
                  <h2 className="text-2xl font-semibold tracking-tight text-white">
                    {category.category}
                  </h2>
                  <p className="text-sm text-slate-300">{category.description}</p>
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {category.questions.map((faq) => (
                  <FaqItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-10 shadow-soft backdrop-blur">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-fuchsia-200 backdrop-blur">
              <FaLifeRing className="h-6 w-6" aria-hidden />
            </span>
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                Still stuck?
              </h2>
              <p className="text-sm text-slate-300 sm:text-base">
                Send us your links and details (release, platform, claim ID, order ID). We’ll point you to the right
                path—royalty-free usage, licensing, or whitelisting.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:support@njkmusic.com"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:from-cyan-400 hover:to-fuchsia-400"
              >
                <FaEnvelope className="h-4 w-4" aria-hidden />
                Email support
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/0 px-6 py-3 text-sm font-semibold text-slate-200 backdrop-blur transition hover:bg-white/5"
              >
                Contact form
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

