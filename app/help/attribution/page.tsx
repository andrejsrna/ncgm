import type { Metadata } from "next";
import Link from "next/link";
import CopyButton from "@/app/components/CopyButton";
import { SITE_NAME } from "@/lib/site";
import {
  FaChevronLeft,
  FaClipboard,
  FaEnvelope,
  FaFileContract,
  FaShieldAlt,
  FaYoutube,
  FaTwitch,
  FaHashtag,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: `Attribution | ${SITE_NAME}`,
  description:
    "Copy-paste attribution templates for YouTube, Twitch, and social posts. Learn what to include, where to place credits, and how to handle Content ID workflows.",
};

type AttributionCard = {
  title: string;
  icon: React.ReactNode;
  where: string;
  template: string;
  tips: string[];
};

const templates: AttributionCard[] = [
  {
    title: "YouTube (description)",
    icon: <FaYoutube className="h-5 w-5" aria-hidden />,
    where: "Video description (top or near credits), pinned comment if needed.",
    template: [
      "Track: [Title] — [Label / NJK Music]",
      "Licensed via: https://njkmusic.com/music/[slug]",
      "",
      "If you need proof: [order ID / receipt]",
    ].join("\n"),
    tips: [
      "Include the release link when possible (it helps support verify your license fast).",
      "If you used multiple tracks, list them as separate lines.",
      "Keep your receipt/order ID handy for rights-managed catalogs.",
    ],
  },
  {
    title: "Twitch (panel or chatbot command)",
    icon: <FaTwitch className="h-5 w-5" aria-hidden />,
    where: "Stream panels or a `!music` / `!track` chatbot command.",
    template: [
      "Now playing: [Title] — [Label / NJK Music]",
      "Release: https://njkmusic.com/music/[slug]",
      "",
      "More music: https://njkmusic.com/music",
    ].join("\n"),
    tips: [
      "A panel + a command is ideal for VOD replays and clips.",
      "Update the text when the track changes (or keep a short playlist list).",
      "For monetized catalogs, whitelist is recommended to prevent claims.",
    ],
  },
  {
    title: "Instagram / TikTok / Reels (caption)",
    icon: <FaHashtag className="h-5 w-5" aria-hidden />,
    where: "Caption, pinned comment, or the post description (where available).",
    template: [
      "Music: [Title] — [Label / NJK Music]",
      "Licensed via njkmusic.com",
      "",
      "#njkmusic",
    ].join("\n"),
    tips: [
      "Some platforms limit links in captions—use the domain line if you can’t link directly.",
      "If a claim happens, send us the post link + claim details + your proof of license.",
      "For brand work, keep a copy of the final deliverable + receipt/order ID.",
    ],
  },
];

const quickChecklist = [
  "Track title (or release name)",
  "Label name (or “NJK Music”)",
  "Link to the release page when possible",
  "Proof of purchase/licence for rights-managed catalogs (order ID / receipt)",
];

export default function AttributionPage() {
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
                Attribution templates
              </h1>
              <p className="text-base text-slate-300 sm:text-lg">
                Copy-paste credits for YouTube, Twitch, and social posts. These templates help you stay consistent and
                make support resolutions faster if you ever receive a claim.
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
        <section aria-labelledby="checklist">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-200 backdrop-blur">
                <FaClipboard className="h-5 w-5" aria-hidden />
              </span>
              <div className="space-y-2">
                <h2 id="checklist" className="text-xl font-semibold text-white">
                  Quick checklist
                </h2>
                <p className="max-w-3xl text-sm text-slate-300">
                  If you include these items, attribution is usually “good enough” for most platforms.
                </p>
              </div>
            </div>

            <ul className="mt-6 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
              {quickChecklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-200" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="templates">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 id="templates" className="text-2xl font-semibold tracking-tight text-white">
                Copy-paste templates
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Pick your platform and swap the placeholders.
              </p>
            </div>
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-slate-300">
              Templates
            </span>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {templates.map((template) => (
              <div
                key={template.title}
                className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-fuchsia-200 backdrop-blur">
                    {template.icon}
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-white">{template.title}</h3>
                    <p className="text-sm text-slate-300">{template.where}</p>
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                  <pre className="whitespace-pre-wrap p-5 text-sm text-slate-200">
                    {template.template}
                  </pre>
                </div>

                <CopyButton template={template.template} />

                <div className="mt-6 space-y-2 text-sm text-slate-300">
                  {template.tips.map((tip) => (
                    <div key={tip} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-fuchsia-200" aria-hidden />
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="rights-managed">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-200 backdrop-blur">
                  <FaShieldAlt className="h-5 w-5" aria-hidden />
                </span>
                <div className="space-y-2">
                  <h2 id="rights-managed" className="text-xl font-semibold text-white">
                    Rights-managed catalogs &amp; Content ID
                  </h2>
                  <p className="max-w-3xl text-sm text-slate-300">
                    Some labels are rights-managed and monetized via Content ID. In those cases, attribution alone is
                    not enough—you need a purchase/licence, and licensed creators should request a whitelist to avoid
                    claims.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/help/purchase-guide"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/0 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 backdrop-blur transition hover:bg-white/5"
                >
                  Purchase guide
                </Link>
                <Link
                  href="/help/content-id"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/0 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 backdrop-blur transition hover:bg-white/5"
                >
                  Content ID steps
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-soft transition hover:from-cyan-400 hover:to-fuchsia-400"
                >
                  Request whitelist
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="need-help">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-soft backdrop-blur">
            <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-fuchsia-200 backdrop-blur">
                <FaEnvelope className="h-6 w-6" aria-hidden />
              </span>
              <div className="space-y-3">
                <h2 id="need-help" className="text-2xl font-semibold tracking-tight text-white">
                  Need help with a claim?
                </h2>
                <p className="text-sm text-slate-300 sm:text-base">
                  Send us your channel URL, the video URL, and claim details. If the release is licensed, include your
                  order ID/receipt so we can whitelist you quickly.
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
          </div>
        </section>
      </div>
    </div>
  );
}

