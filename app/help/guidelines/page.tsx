import Link from "next/link";
import type { IconType } from "react-icons";
import {
  FaChevronLeft,
  FaCheckCircle,
  FaEnvelope,
  FaExclamationTriangle,
  FaInfoCircle,
  FaLock,
  FaTimesCircle,
} from "react-icons/fa";

type RuleCard = {
  title: string;
  description: string;
  icon: IconType;
  items: string[];
  tone: "do" | "dont" | "note";
};

const rules: RuleCard[] = [
  {
    title: "Allowed",
    description: "Typical creator workflows and everyday usage.",
    icon: FaCheckCircle,
    tone: "do",
    items: [
      "Use tracks in videos, livestreams, reels, shorts, and podcasts (where the release is licensed appropriately).",
      "Use tracks in client deliverables when the music stays embedded in the final edit.",
      "Basic edits like trimming, fades, volume matching, and transitions.",
      "Credit the release when a platform gives you a description/metadata field (when required).",
    ],
  },
  {
    title: "Not allowed",
    description: "These require a separate agreement or are prohibited.",
    icon: FaTimesCircle,
    tone: "dont",
    items: [
      "Reuploading our tracks as standalone audio or claiming them as your own music.",
      "Reselling, sublicensing, or bundling the audio into another library/subscription.",
      "Redistributing raw files (stems, WAV/MP3) as deliverables to third parties.",
      "Using tracks in large paid ad/broadcast distribution without written clearance (especially rights-managed catalogs).",
    ],
  },
  {
    title: "Content ID notes",
    description: "How to avoid monetization surprises.",
    icon: FaInfoCircle,
    tone: "note",
    items: [
      "Content ID is automated and can still match audio even when you’re licensed.",
      "For rights-managed / monetized catalogs, licensed creators should request a whitelist to prevent claims.",
      "If you receive a claim: save claim details + your receipt/order ID and contact support.",
    ],
  },
];

const safeEditing: string[] = [
  "Trim to length, add fades, normalize loudness, and duck under voiceover.",
  "Use short segments as beds, intros/outros, or transitions.",
  "Combine multiple NJK Music tracks in one edit (list credits if possible).",
];

const avoidEditing: string[] = [
  "Creating remixes/derivative songs intended for redistribution.",
  "Removing metadata in a way that obscures ownership.",
  "Publishing the music as a separate “album/playlist” of your own.",
];

export default function GuidelinesPage() {
  return (
    <div className="min-h-screen bg-transparent text-white">
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
                Usage guidelines
              </h1>
              <p className="text-base text-slate-300 sm:text-lg">
                Practical rules for using NJK Music releases in content, client work, and campaigns—plus how Content ID
                and whitelisting fits in for monetized catalogs.
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
                href="/help/attribution"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/0 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 backdrop-blur transition hover:bg-white/5"
              >
                Attribution templates
              </Link>
              <Link
                href="/help/content-id"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/0 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 backdrop-blur transition hover:bg-white/5"
              >
                Content ID guide
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-soft transition hover:from-cyan-400 hover:to-fuchsia-400"
              >
                Contact support
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-16 px-4 pb-16 sm:px-6 lg:px-8">
        <section aria-labelledby="rules">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 id="rules" className="text-2xl font-semibold tracking-tight text-white">
                The core rules
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                The label’s license model always wins—check the release page if you’re unsure.
              </p>
            </div>
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-slate-300">
              Quick reference
            </span>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {rules.map((rule) => {
              const Icon = rule.icon;
              const badge =
                rule.tone === "do"
                  ? "border-emerald-300/30 bg-emerald-500/10 text-emerald-200"
                  : rule.tone === "dont"
                    ? "border-rose-300/30 bg-rose-500/10 text-rose-200"
                    : "border-white/10 bg-white/5 text-slate-200";

              return (
                <div
                  key={rule.title}
                  className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-200 backdrop-blur">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] ${badge}`}>
                      {rule.title}
                    </span>
                  </div>

                  <p className="mt-4 text-sm text-slate-300">{rule.description}</p>
                  <ul className="mt-5 space-y-2 text-sm text-slate-300">
                    {rule.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-fuchsia-200" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        <section aria-labelledby="editing">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-fuchsia-200 backdrop-blur">
                <FaCheckCircle className="h-5 w-5" aria-hidden />
              </span>
              <div className="space-y-2">
                <h2 id="editing" className="text-xl font-semibold text-white">
                  Editing guidelines
                </h2>
                <p className="max-w-3xl text-sm text-slate-300">
                  Basic editing is fine. The goal is to fit the track into your content—not to redistribute the music as
                  a new standalone product.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
                  Safe edits
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {safeEditing.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-200" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
                  Avoid
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {avoidEditing.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-rose-200" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="important">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-rose-500/10 text-rose-200">
                <FaLock className="h-5 w-5" aria-hidden />
              </span>
              <div className="space-y-2">
                <h2 id="important" className="text-xl font-semibold text-white">
                  When to contact us first
                </h2>
                <p className="max-w-3xl text-sm text-slate-300">
                  If you’re running paid ads, broadcast distribution, or a rights-managed catalog, reach out before
                  publishing so we can confirm clearance and whitelisting steps.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:from-cyan-400 hover:to-fuchsia-400"
              >
                Contact support
              </Link>
              <Link
                href="/help/purchase-guide"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/0 px-6 py-3 text-sm font-semibold text-slate-200 backdrop-blur transition hover:bg-white/5"
              >
                Purchase guide
              </Link>
            </div>
          </div>
        </section>

        <section aria-labelledby="support">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-soft backdrop-blur">
            <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-fuchsia-200 backdrop-blur">
                <FaEnvelope className="h-6 w-6" aria-hidden />
              </span>
              <div className="space-y-3">
                <h2 id="support" className="text-2xl font-semibold tracking-tight text-white">
                  Have a specific scenario?
                </h2>
                <p className="text-sm text-slate-300 sm:text-base">
                  Send us the release link, your platform, and how you plan to use the music (monetized channel, client
                  work, ads, etc.). We’ll confirm the correct model and next steps.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:from-cyan-400 hover:to-fuchsia-400"
                >
                  Open contact page
                </Link>
                <a
                  href="mailto:support@njkmusic.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/0 px-6 py-3 text-sm font-semibold text-slate-200 backdrop-blur transition hover:bg-white/5"
                >
                  <FaEnvelope className="h-4 w-4" aria-hidden />
                  Email support@njkmusic.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

