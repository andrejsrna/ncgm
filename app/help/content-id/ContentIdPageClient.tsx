"use client";

import Link from "next/link";
import CopyButton from "@/app/components/CopyButton";
import type { IconType } from "react-icons";
import {
  FaChevronLeft,
  FaClipboard,
  FaEnvelope,
  FaExclamationTriangle,
  FaFileContract,
  FaInfoCircle,
  FaShieldAlt,
} from "react-icons/fa";

type ClaimType = {
  title: string;
  description: string;
  icon: IconType;
  urgency: "high" | "medium";
  steps: string[];
};

type Tip = {
  title: string;
  description: string;
  icon: IconType;
};

const claimTypes: ClaimType[] = [
  {
    title: "Claim on a licensed release",
    description:
      "You bought/licensed the release, but Content ID still matched your video. This is usually resolved by whitelisting your channel or clearing the specific claim.",
    icon: FaShieldAlt,
    steps: [
      "Collect your proof of purchase/licence (receipt or order ID)",
      "Send us your channel URL + video URL + claim screenshot (or claim ID)",
      "We whitelist your channel (or clear the specific claim) and confirm back",
      "Re-check the claim status after we confirm (platforms can take time to sync)",
    ],
    urgency: "high",
  },
  {
    title: "Third‑party / wrong owner claim",
    description:
      "Another party is claiming a track incorrectly. Send us details so we can validate ownership and advise the right dispute path.",
    icon: FaExclamationTriangle,
    steps: [
      "Take a screenshot of the claim details (claimant name + asset)",
      "Send us the video URL + claim details + the NJK Music release link",
      "We confirm whether it’s our catalog and guide you on the safest dispute flow",
      "If it’s our catalog, we’ll help clear it; if not, we’ll point you to the correct rights holder",
    ],
    urgency: "high",
  },
  {
    title: "Missing attribution / policy mismatch",
    description:
      "Some releases require attribution or have label-specific usage notes. Missing credit can slow down resolution and increase claim likelihood.",
    icon: FaFileContract,
    steps: [
      "Add/repair attribution in the description/metadata where possible",
      "Confirm you used the correct release (same title/label) and not a reupload",
      "If you’re still claimed, send us the claim details and your video URL",
      "We’ll confirm the license model (royalty‑free vs rights‑managed) and next steps",
    ],
    urgency: "medium",
  },
];

const preventionTips: Tip[] = [
  {
    title: "Keep attribution consistent",
    description:
      "Credit the label/track whenever the platform gives you a description or metadata field.",
    icon: FaFileContract,
  },
  {
    title: "Save receipts and order IDs",
    description:
      "For licensed or rights-managed releases, we’ll ask for proof of purchase/licence to whitelist you.",
    icon: FaShieldAlt,
  },
  {
    title: "Check label notes on the track page",
    description:
      "Some labels are rights-managed and require purchase/licence before use in monetized content.",
    icon: FaInfoCircle,
  },
  {
    title: "Request a whitelist early",
    description:
      "If your channel is monetized and a catalog runs Content ID, whitelisting prevents most headaches.",
    icon: FaClipboard,
  },
];

const disputeTemplate = `
Subject: Content ID claim – licensed track (NJK Music)

Hi, I received a Content ID claim on my video, but this track is licensed via NJK Music (njkmusic.com).

Details:
- Track: [Track title] – [Label / NJK Music]
- Release link: https://njkmusic.com/music/[slug]
- My channel/profile URL: [URL]
- Video URL (claimed): [URL]
- Claim ID / claimant (if shown): [ID / claimant]
- Proof of purchase/licence (order ID / receipt): [ID]

If needed, I can add/confirm attribution in the description.

Please whitelist my channel (or clear this specific claim) and let me know once it’s resolved.
`.trim();

export default function ContentIdPageClient() {
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

            <span className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 backdrop-blur">
              Content ID
            </span>

            <div className="mt-6 max-w-3xl space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Content ID &amp; claims
              </h1>
              <p className="text-base text-slate-300 sm:text-lg">
                Content ID is an automated system that matches audio in videos. Depending on the label, some releases
                are creator-ready (royalty-free) and some are rights-managed and monetized—meaning licensed creators may
                need a whitelist to avoid claims.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-soft transition hover:from-cyan-400 hover:to-fuchsia-400"
              >
                Request whitelist / support
              </Link>
              <Link
                href="/help/purchase-guide"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/0 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 backdrop-blur transition hover:bg-white/5"
              >
                Purchase guide
              </Link>
              <Link
                href="/help/attribution"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/0 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 backdrop-blur transition hover:bg-white/5"
              >
                Attribution guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-16 px-4 pb-16 sm:px-6 lg:px-8">
        <section aria-labelledby="prevention">
          <div>
            <h2 id="prevention" className="text-2xl font-semibold tracking-tight text-white">
              Prevent most claims
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              A bit of prep goes a long way—especially for monetized channels and rights-managed catalogs.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {preventionTips.map((tip) => {
              const Icon = tip.icon;
              return (
                <div
                  key={tip.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-200 backdrop-blur">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-white">{tip.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{tip.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section aria-labelledby="claim-types">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 id="claim-types" className="text-2xl font-semibold tracking-tight text-white">
                If you received a claim
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Pick the closest scenario and follow the steps. When in doubt, contact us first.
              </p>
            </div>
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-slate-300">
              Fast paths
            </span>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {claimTypes.map((claim) => {
              const Icon = claim.icon;
              return (
                <div
                  key={claim.title}
                  className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-fuchsia-200 backdrop-blur">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span
                      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] ${
                        claim.urgency === "high"
                          ? "border-rose-300/30 bg-rose-500/10 text-rose-200"
                          : "border-white/10 bg-white/5 text-slate-200"
                      }`}
                    >
                      {claim.urgency === "high" ? "High priority" : "Medium priority"}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-white">{claim.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{claim.description}</p>

                  <ul className="mt-5 space-y-2 text-sm text-slate-300">
                    {claim.steps.map((step, index) => (
                      <li key={step} className="flex items-start gap-3">
                        <span className="mt-0.5 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
                          {(index + 1).toString().padStart(2, "0")}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6">
                    <Link
                      href="/contact"
                      className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/0 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 backdrop-blur transition hover:bg-white/5"
                    >
                      Contact support
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section aria-labelledby="template">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-200 backdrop-blur">
                <FaClipboard className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <h2 id="template" className="text-xl font-semibold text-white">
                  Claim email template
                </h2>
                <p className="mt-1 text-sm text-slate-300">
                  Paste this into your email to us (or use it as your support message).
                </p>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black/40">
              <pre className="whitespace-pre-wrap p-6 text-sm text-slate-200">{disputeTemplate}</pre>
            </div>

            <CopyButton template={disputeTemplate} />
          </div>
        </section>

        <section aria-labelledby="important">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-rose-500/10 text-rose-200">
                <FaExclamationTriangle className="h-5 w-5" aria-hidden />
              </span>
              <div className="space-y-2">
                <h2 id="important" className="text-xl font-semibold text-white">
                  Important
                </h2>
                <p className="max-w-3xl text-sm text-slate-300">
                  Don’t dispute blindly. If you’re unsure whether the release is royalty-free or rights-managed, contact
                  us first and include the claim details. We’ll tell you the fastest safe path.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="help">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-soft backdrop-blur">
            <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-fuchsia-200 backdrop-blur">
                <FaEnvelope className="h-6 w-6" aria-hidden />
              </span>
              <div className="space-y-3">
                <h2 id="help" className="text-2xl font-semibold tracking-tight text-white">
                  Need help resolving a claim?
                </h2>
                <p className="text-sm text-slate-300 sm:text-base">
                  Send us your channel URL, the claimed video URL, and the claim details. If the release is licensed,
                  include your receipt/order ID so we can whitelist you quickly.
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

