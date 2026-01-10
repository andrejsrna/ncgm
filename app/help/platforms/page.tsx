import Link from "next/link";
import type { IconType } from "react-icons";
import {
  FaChevronLeft,
  FaCheckCircle,
  FaEnvelope,
  FaExclamationTriangle,
  FaFilm,
  FaLock,
  FaPodcast,
} from "react-icons/fa";
import { SiInstagram, SiTiktok, SiTwitch, SiYoutube } from "react-icons/si";

type PlatformCard = {
  name: string;
  description: string;
  status: "Approved" | "Approved with notes";
  icon: IconType;
  goodFor: string[];
  doThis: string[];
};

type RestrictedUse = {
  title: string;
  description: string;
  icon: IconType;
  action: string;
};

const platforms: PlatformCard[] = [
  {
    name: "YouTube",
    description:
      "Long-form videos, shorts, livestream VODs, and highlight edits. Content ID can still match audio, so keep receipts and request whitelisting when needed.",
    status: "Approved with notes",
    icon: SiYoutube,
    goodFor: [
      "Livestream VODs and highlights",
      "Monetized long-form uploads",
      "Shorts and reels-style edits",
    ],
    doThis: [
      "Add attribution in the description when possible",
      "Keep your purchase/licence proof (order ID / receipt)",
      "If you’re licensed and get a claim, request a whitelist",
    ],
  },
  {
    name: "Twitch",
    description:
      "Livestreams, VOD replays, and clips. Use a panel or chatbot command so attribution stays visible across clips and VODs.",
    status: "Approved",
    icon: SiTwitch,
    goodFor: ["Live streams", "Clips and highlights", "VOD archives"],
    doThis: [
      "Use a stream panel or `!music` command for attribution",
      "Keep receipts for rights-managed releases",
      "If Content ID affects exports, follow the claim steps",
    ],
  },
  {
    name: "TikTok",
    description:
      "Short-form edits and teasers. Caption space is limited—keep attribution short and use the domain when you can’t link.",
    status: "Approved with notes",
    icon: SiTiktok,
    goodFor: ["Short-form edits", "Teasers and snippets", "Behind-the-scenes clips"],
    doThis: [
      "Use a short credit in caption or pinned comment",
      "Keep a copy of your proof of licence for brand work",
      "If a claim happens, send us the post URL + claim details",
    ],
  },
  {
    name: "Instagram",
    description:
      "Reels, stories, and posts. For campaigns and sponsored work, confirm the release’s license model (royalty-free vs rights-managed).",
    status: "Approved with notes",
    icon: SiInstagram,
    goodFor: ["Reels and stories", "Lifestyle edits", "Brand recaps"],
    doThis: [
      "Add a short credit in caption when possible",
      "For sponsored/paid distribution, request clearance if needed",
      "If you’re licensed and a claim happens, request whitelisting",
    ],
  },
  {
    name: "Podcasts",
    description:
      "Intros, beds, and transitions for show episodes. Make sure the track is licensed appropriately for distribution and sponsorships.",
    status: "Approved with notes",
    icon: FaPodcast,
    goodFor: ["Podcast intros/outros", "Background beds", "Episode transitions"],
    doThis: [
      "Keep a record of the episode + timestamp where music appears",
      "Use attribution in show notes when possible",
      "For broad distribution/sync questions, contact us",
    ],
  },
  {
    name: "Client deliverables",
    description:
      "Edits and campaign assets delivered to a client are typically OK when the music stays embedded. Redistribution of raw audio files is not allowed.",
    status: "Approved with notes",
    icon: FaFilm,
    goodFor: ["Agency edits", "Brand content", "In-house marketing deliverables"],
    doThis: [
      "Keep your invoice/receipt and share proof with the client if needed",
      "Don’t share raw audio files as standalone deliverables",
      "For broadcast/paid ads, request clearance first",
    ],
  },
];

const restrictedUses: RestrictedUse[] = [
  {
    title: "Paid ads & broadcast",
    description:
      "Large paid distribution (national campaigns, broadcast, TV/radio) often requires custom clearance—especially for rights-managed catalogs.",
    icon: FaLock,
    action: "Request clearance via the contact page.",
  },
  {
    title: "Redistribution of audio",
    description:
      "Uploading our tracks as standalone audio, reselling them, or bundling them into another library is prohibited.",
    icon: FaExclamationTriangle,
    action: "Use the music only as part of your own content/edit.",
  },
  {
    title: "Unsure which license model applies?",
    description:
      "Some labels are royalty-free, others are rights-managed and monetized. If you’re not sure, don’t guess.",
    icon: FaExclamationTriangle,
    action: "Check the release page notes or contact us with the track link.",
  },
];

export default function PlatformsPage() {
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
                Platform usage
              </h1>
              <p className="text-base text-slate-300 sm:text-lg">
                Where you can use NJK Music releases—and what to do for attribution, receipts, Content ID claims, and
                rights-managed catalogs.
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
        <section aria-labelledby="supported-platforms">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 id="supported-platforms" className="text-2xl font-semibold tracking-tight text-white">
                Supported platforms
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Most releases are safe for common creator workflows. Always follow release notes for label-specific
                rules.
              </p>
            </div>
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-slate-300">
              Quick reference
            </span>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {platforms.map((platform) => {
              const Icon = platform.icon;
              return (
                <div
                  key={platform.name}
                  className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-fuchsia-200 backdrop-blur">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <span
                      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] ${
                        platform.status === "Approved"
                          ? "border-emerald-300/30 bg-emerald-500/10 text-emerald-200"
                          : "border-white/10 bg-white/5 text-slate-200"
                      }`}
                    >
                      {platform.status}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-white">{platform.name}</h3>
                  <p className="mt-2 text-sm text-slate-300">{platform.description}</p>

                  <div className="mt-5 space-y-4">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
                        Good for
                      </div>
                      <ul className="mt-3 space-y-2 text-sm text-slate-300">
                        {platform.goodFor.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <FaCheckCircle className="mt-0.5 h-4 w-4 text-cyan-200" aria-hidden />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
                        Do this
                      </div>
                      <ul className="mt-3 space-y-2 text-sm text-slate-300">
                        {platform.doThis.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-fuchsia-200" aria-hidden />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section aria-labelledby="restrictions">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-rose-500/10 text-rose-200">
                <FaLock className="h-5 w-5" aria-hidden />
              </span>
              <div className="space-y-2">
                <h2 id="restrictions" className="text-xl font-semibold text-white">
                  Restrictions &amp; when to contact us
                </h2>
                <p className="max-w-3xl text-sm text-slate-300">
                  If your use case looks like one of these, don’t guess—reach out and we’ll confirm the correct path.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {restrictedUses.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-rose-200 backdrop-blur">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-white">{item.title}</div>
                        <p className="mt-2 text-sm text-slate-300">{item.description}</p>
                        <p className="mt-3 text-sm font-medium text-cyan-200">{item.action}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
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
                  Need help with a platform decision?
                </h2>
                <p className="text-sm text-slate-300 sm:text-base">
                  Send us the release link, your platform, and how you plan to use the music (monetized channel, client
                  work, ads, etc.). We’ll point you to the right license model and next steps.
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

