import Link from "next/link";
import { Metadata } from "next";
import { FaEnvelope, FaLifeRing } from "react-icons/fa";
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
  title: `Creator FAQ | ${SITE_NAME}`,
  description:
    "Clear answers to licensing, downloads, and support questions for NJK Music. Discover how to integrate tracks into your projects with confidence.",
};

const faqs: FaqCategory[] = [
  {
    category: "Getting started",
    description: "Understand how NJK Music fits into your workflow.",
    questions: [
      {
        q: "What is NJK Music?",
        a: "NJK Music is a creator-first label family releasing mood-driven collections for gamers, streamers, and studios. Each track is curated by producers so you can move fast without worrying about copyright conflicts.",
      },
      {
        q: "How do I begin using the catalogue?",
        a: "Browse the music library, choose a release, and follow the marketplace link to complete your purchase. Keep your receipt so you can reference order details if a platform ever requests proof of licensing.",
      },
      {
        q: "Do I need a subscription or account?",
        a: "You can pick the releases you need one at a time through stores such as Beatport and iTunes. There is no separate subscription or login for NJK Music right now.",
      },
    ],
  },
  {
    category: "Licensing and usage",
    description: "Confirm where and how you can publish NJK Music tracks.",
    questions: [
      {
        q: "Can I monetize videos with NJK Music?",
        a: "Monetization depends on the NJK label mood. Most of our moods unlock monetized uploads once you purchase the release, while a few rights-managed moods restrict ad-supported use. Review the notes on each release page and save your invoice so you can verify usage rights if a platform asks.",
      },
      {
        q: "Is there a limit on projects or channels?",
        a: "No. A single purchase covers use across your channels, client handoffs, and social clips as long as the audio is integrated into your own content. Selling or redistributing the raw files is not permitted.",
      },
      {
        q: "How should I credit the label?",
        a: "Include a simple line such as \"Music by NJK Music\" with a link to njkmusic.com whenever the format allows. Sponsorships or client deliverables should mention the track title and label when possible.",
      },
    ],
  },
  {
    category: "Downloads and formats",
    description: "Understand how your files are delivered and what to expect.",
    questions: [
      {
        q: "Where do downloads come from?",
        a: "Every release links to an authorized storefront like Beatport or Bandcamp. Complete checkout on the storefront and download the files directly from your account with that retailer.",
      },
      {
        q: "Which formats are included?",
        a: "Most storefronts supply high resolution WAV and MP3 files immediately after purchase. Some stores also include additional formats or extended mixes depending on the release.",
      },
      {
        q: "Can I request stems or loop packs?",
        a: "Select releases include stems or loop packs as a bonus download. If you need something specific for editing, send the track details to support and we will let you know what is available.",
      },
    ],
  },
  {
    category: "Claims and support",
    description: "Resolve Content ID matches and connect with the team.",
    questions: [
      {
        q: "What if I receive a Content ID claim?",
        a: "Gather the claim ID, video link, and purchase receipt, then email support@njkmusic.com. Our team will verify the release and work with the platform to clear the claim.",
      },
      {
        q: "Can clients use the music I deliver?",
        a: "Yes. Clients can publish the finished project that features NJK Music as long as they are not redistributing the audio on its own. Share your receipt with the client so they have proof of licensing.",
      },
      {
        q: "How fast does support respond?",
        a: "Most questions are answered within one to two business days. Include links, timestamps, and any platform notices in your message so we can resolve the request quickly.",
      },
    ],
  },
];

const anchorFor = (label: string) =>
  label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function FaqPage() {
  return (
    <div id="top" className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto flex min-h-[40vh] max-w-6xl flex-col justify-center gap-6 px-4 py-24 sm:px-6 lg:px-8">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Creator FAQ
          </span>
          <div className="max-w-2xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Answers built for producers, streamers, and studios
            </h1>
            <p className="text-base text-slate-600 sm:text-lg">
              Explore the most common questions about our label moods, licensing, downloads, and claims when you work with NJK Music releases. Use the quick links, jump to a topic, or contact the team for tailored help.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
            >
              <FaEnvelope className="h-4 w-4" />
              Contact support
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <section aria-label="FAQ navigation" className="-mt-12">
          <div className="rounded-3xl border border-border bg-white p-6 shadow-soft sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-1">
                <h2 className="text-xl font-semibold text-slate-900">Browse by topic</h2>
                <p className="text-sm text-slate-600">
                  Jump straight to the answers you need most.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {faqs.map((category) => (
                  <a
                    key={category.category}
                    href={`#${anchorFor(category.category)}`}
                    className="inline-flex items-center justify-center rounded-full border border-border bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-primary hover:bg-primary/10 hover:text-primary"
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
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                    {category.category}
                  </h2>
                  <p className="text-sm text-slate-600">{category.description}</p>
                </div>
                <a
                  href="#top"
                  className="text-xs font-medium uppercase tracking-[0.3em] text-slate-500 transition hover:text-primary"
                >
                  Back to top
                </a>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {category.questions.map((faq) => (
                  <div
                    key={faq.q}
                    className="flex h-full flex-col rounded-3xl border border-border bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <h3 className="text-lg font-semibold text-slate-900">{faq.q}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{faq.a}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="mt-20 rounded-3xl border border-transparent bg-slate-900 p-8 text-white shadow-soft sm:p-12">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
              <FaLifeRing className="h-6 w-6" />
            </span>
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold tracking-tight">
                Need a hand from the team?
              </h2>
              <p className="text-sm text-slate-200 sm:text-base">
                Share links, timestamps, and any platform notices so we can review your case quickly. We respond to most requests within one to two business days.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:support@njkmusic.com"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                <FaEnvelope className="h-4 w-4" />
                Email support
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold tracking-[0.2em] text-white transition hover:border-white hover:bg-white/10"
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
