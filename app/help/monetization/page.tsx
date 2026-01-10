import Link from "next/link";
import type { IconType } from "react-icons";
import {
  FaChevronLeft,
  FaCheckCircle,
  FaEnvelope,
  FaExclamationTriangle,
  FaMoneyBillWave,
  FaShieldAlt,
} from "react-icons/fa";
import { SiYoutube, SiTwitch, SiTiktok, SiInstagram } from "react-icons/si";

type Platform = {
  name: string;
  icon: IconType;
  summary: string;
  checklist: string[];
};

type BestPractice = {
  title: string;
  description: string;
  icon: IconType;
  steps: string[];
};

const monetizedPlatforms: Platform[] = [
  {
    name: "YouTube",
    icon: SiYoutube,
    summary:
      "Monetized uploads and channels are possible, but Content ID may still match audio. Keep receipts and request whitelisting when needed.",
    checklist: [
      "Add attribution in the description when possible",
      "Keep your order ID/receipt (proof of licence)",
      "If a claim happens, follow the Content ID steps and request a whitelist",
    ],
  },
  {
    name: "Twitch",
    icon: SiTwitch,
    summary:
      "Live monetization (subs/ads) is generally fine when the release is licensed appropriately. Use panels/commands so credit survives clips and VODs.",
    checklist: [
      "Use a stream panel or `!music` command for attribution",
      "Keep receipts for rights-managed catalogs",
      "If your VOD export gets claimed, request whitelisting with details",
    ],
  },
  {
    name: "TikTok",
    icon: SiTiktok,
    summary:
      "Short-form monetized content varies by region and program. Keep credits short and keep proof of licence for sponsored posts.",
    checklist: [
      "Use short caption credit or pinned comment when possible",
      "For brand/sponsored work, keep order ID/receipt",
      "If a claim happens, send us the post URL + claim details",
    ],
  },
  {
    name: "Instagram",
    icon: SiInstagram,
    summary:
      "Reels and brand campaigns are possible, but paid distribution and rights-managed releases may need clearance.",
    checklist: [
      "Add credit in caption when possible",
      "For paid ads/broadcast distribution, request clearance first",
      "If Content ID/claims occur, request whitelisting (licensed creators)",
    ],
  },
];

const bestPractices: BestPractice[] = [
  {
    title: "Keep proof of licence",
    description:
      "If a platform asks for verification (or a claim happens), proof of purchase/licence is the fastest way to resolve it.",
    icon: FaShieldAlt,
    steps: [
      "Save the receipt/order ID from the store you used",
      "Keep the release link from njkmusic.com",
      "If you deliver to a client, keep the proof attached to the project files",
    ],
  },
  {
    title: "Use consistent attribution",
    description:
      "Attribution helps both compliance and support. It also reduces confusion when multiple versions of a track exist online.",
    icon: FaCheckCircle,
    steps: [
      "Credit: Track title + Label / NJK Music",
      "Link to the release page when possible",
      "If you used multiple tracks, list them line by line",
    ],
  },
  {
    title: "Content ID workflow (when applicable)",
    description:
      "Some catalogs are monetized via Content ID. Licensed creators should request a whitelist to prevent repeated claims.",
    icon: FaMoneyBillWave,
    steps: [
      "If claimed: collect claim ID + video URL + channel URL",
      "Include proof of licence (receipt/order ID)",
      "Contact us to whitelist/clear the claim and confirm resolution",
    ],
  },
];

export default function MonetizationPage() {
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
                Monetization
              </h1>
              <p className="text-base text-slate-300 sm:text-lg">
                How to stay monetized while using NJK Music releases. The key is to know the label’s license model, keep
                proof of licence, and follow the Content ID workflow when required.
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
                href="/help/attribution"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/0 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 backdrop-blur transition hover:bg-white/5"
              >
                Attribution templates
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
        <section aria-labelledby="platforms">
          <div>
            <h2 id="platforms" className="text-2xl font-semibold tracking-tight text-white">
              Platforms & checklists
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Use these checklists to keep monetization smooth and resolve claims quickly.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {monetizedPlatforms.map((platform) => {
              const Icon = platform.icon;
              return (
                <div
                  key={platform.name}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-fuchsia-200 backdrop-blur">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-white">{platform.name}</h3>
                      <p className="text-sm text-slate-300">{platform.summary}</p>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2 text-sm text-slate-300">
                    {platform.checklist.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-200" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        <section aria-labelledby="best-practices">
          <div>
            <h2 id="best-practices" className="text-2xl font-semibold tracking-tight text-white">
              Best practices
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              These steps reduce claim risk and make support fast when a platform flags your video.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {bestPractices.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-200 backdrop-blur">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{item.description}</p>
                  <ul className="mt-5 space-y-2 text-sm text-slate-300">
                    {item.steps.map((step) => (
                      <li key={step} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-fuchsia-200" aria-hidden />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        <section aria-labelledby="warning">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-rose-500/10 text-rose-200">
                <FaExclamationTriangle className="h-5 w-5" aria-hidden />
              </span>
              <div className="space-y-2">
                <h2 id="warning" className="text-xl font-semibold text-white">
                  Important
                </h2>
                <p className="max-w-3xl text-sm text-slate-300">
                  Monetization depends on the label’s license model. If you’re running paid ads, broadcast distribution,
                  or a rights-managed catalog, contact us before publishing so we can confirm the correct clearance and
                  whitelist steps.
                </p>
              </div>
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
                  Need help staying monetized?
                </h2>
                <p className="text-sm text-slate-300 sm:text-base">
                  Send us your release link, your channel URL, the video URL (if claimed), and your order ID/receipt. We
                  can whitelist you (when applicable) and guide the fastest resolution.
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

