import type { Metadata } from "next";
import Link from "next/link";
import {
  FaChevronLeft,
  FaEnvelope,
  FaLightbulb,
  FaRobot,
  FaShieldAlt,
} from "react-icons/fa";
import { getCanonicalUrl } from "@/lib/env";

type Section = {
  id: string;
  title: string;
  description: string;
  bullets: string[];
};

export const metadata: Metadata = {
  title: "AI Usage Information | NJK Music",
  description:
    "Transparency about where AI-assisted tools may be used across NJK Music releases and visuals, and how we review and clear what we publish.",
  alternates: {
    canonical: getCanonicalUrl("/ai-usage"),
  },
  openGraph: {
    title: "AI Usage Information | NJK Music",
    description:
      "Some NJK Music releases may include AI-assisted elements. Learn what that means, how we review it, and how to contact us.",
    url: getCanonicalUrl("/ai-usage"),
    siteName: "NJK Music",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "AI Usage Information | NJK Music",
    description:
      "Transparency about AI-assisted tools used in NJK Music releases and visuals.",
  },
};

const sections: Section[] = [
  {
    id: "why-we-share-this",
    title: "Why we’re sharing this",
    description:
      "We want listeners and creators to know how releases are made, what’s human, what’s tool-assisted, and what that means for usage.",
    bullets: [
      "Transparency builds trust with listeners, creators, and partners",
      "Different platforms and clients have different requirements around AI",
      "Clear documentation helps avoid confusion when licensing or clearing usage",
    ],
  },
  {
    id: "where-ai-may-be-used",
    title: "Where AI may be used",
    description:
      "AI can be used as an assistive tool in parts of the workflow. Not every release uses it.",
    bullets: [
      "Artwork concepts or variations (e.g., cover art drafts)",
      "Sound design experiments and ideation",
      "Arrangement or composition assistance (human-directed)",
      "Editorial tasks like tagging, copy drafts, or metadata cleanup",
    ],
  },
  {
    id: "review-and-quality",
    title: "Review and quality control",
    description:
      "Regardless of tools, we publish only releases that pass our review for quality and consistency.",
    bullets: [
      "Human review of the final deliverables before publishing",
      "Listening checks for mix balance, clipping, artifacts, and mastering consistency",
      "Metadata and store links verified to match the correct release",
    ],
  },
  {
    id: "rights-and-usage",
    title: "Rights, licensing, and usage",
    description:
      "Usage rights come from the license model attached to each release/label, not from the tools used to create it.",
    bullets: [
      "Follow the release licensing rules shown on the single music page and the license page",
      "Some catalogues may be rights-managed and monetized with Content ID (clearance may be required)",
      "If you have a client/platform requirement (e.g., “no AI”), contact us and we’ll help you choose the right music",
    ],
  },
];

export default function AiUsagePage() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-soft backdrop-blur">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-cyan-200 hover:text-cyan-100"
            >
              <FaChevronLeft className="h-4 w-4" aria-hidden />
              Back to home
            </Link>

            <div className="mt-8 max-w-3xl space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                AI usage information
              </h1>
              <p className="text-base text-slate-300 sm:text-lg">
                Some NJK Music releases and visuals may include AI-assisted elements. We want to be fully transparent
                about what that can mean, how we review what we publish, and how to reach us if you need specifics for a
                project, platform, or client policy.
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
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-soft transition hover:from-cyan-400 hover:to-fuchsia-400"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-16 px-4 pb-16 sm:px-6 lg:px-8">
        <section aria-labelledby="summary">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-200 backdrop-blur">
                <FaRobot className="h-5 w-5" aria-hidden />
              </span>
              <div className="space-y-2">
                <h2 id="summary" className="text-xl font-semibold text-white">
                  Quick summary
                </h2>
                <p className="max-w-3xl text-sm text-slate-300">
                  AI can be used as an assistive tool in parts of our workflow, but every release goes through human
                  review before publishing.
                </p>
              </div>
            </div>

            <ul className="mt-6 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
              {[
                "Not every release uses AI-assisted tools.",
                "We can clarify AI involvement on request for a specific release.",
                "Licensing terms are defined by the release/label model shown on the site.",
                "If your platform/client requires “no AI”, contact us and we’ll help you choose.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-200" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-label="AI usage details">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-1">
                <h2 className="text-xl font-semibold text-white">Jump to</h2>
                <p className="text-sm text-slate-300">
                  Navigate to the part you care about.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/0 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur transition hover:bg-white/5"
                  >
                    {section.title}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 space-y-12">
            {sections.map((section) => (
              <article
                key={section.id}
                id={section.id}
                className="scroll-mt-24 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur"
              >
                <h2 className="text-2xl font-semibold tracking-tight text-white">
                  {section.title}
                </h2>
                <p className="mt-2 text-sm text-slate-300">{section.description}</p>
                <ul className="mt-6 space-y-2 text-sm text-slate-300">
                  {section.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-fuchsia-200" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="contact">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-soft backdrop-blur">
            <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-fuchsia-200 backdrop-blur">
                <FaLightbulb className="h-6 w-6" aria-hidden />
              </span>
              <div className="space-y-3">
                <h2 id="contact" className="text-2xl font-semibold tracking-tight text-white">
                  Need a clear yes/no for a project?
                </h2>
                <p className="text-sm text-slate-300 sm:text-base">
                  Send us the release link (or slug) and where you plan to use it. We’ll confirm the best option and any
                  licensing/clearance steps.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:from-cyan-400 hover:to-fuchsia-400"
                >
                  <FaEnvelope className="h-4 w-4" aria-hidden />
                  Contact us
                </Link>
                <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/0 px-6 py-3 text-sm font-semibold text-slate-200 backdrop-blur">
                  <FaShieldAlt className="h-4 w-4" aria-hidden />
                  We keep requests confidential
                </span>
              </div>
              <p className="text-xs text-slate-400">
                This page is for transparency and informational purposes and does not constitute legal advice.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

