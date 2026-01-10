import type { Metadata } from "next";
import Link from "next/link";
import {
  FaChevronLeft,
  FaShoppingCart,
  FaCreditCard,
  FaDownload,
  FaReceipt,
  FaShieldAlt,
  FaExclamationTriangle,
  FaEnvelope,
} from "react-icons/fa";
import { SiApplemusic, SiBeatport } from "react-icons/si";
import { RiAmazonFill } from "react-icons/ri";
import type { IconType } from "react-icons";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `Purchase Guide | ${SITE_NAME}`,
  description:
    "How to buy and download NJK Music releases from supported stores, plus what to do about invoices, licensing, and Content ID whitelisting.",
};

type Step = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type Store = {
  name: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

const steps: Step[] = [
  {
    title: "Pick a store",
    description:
      "Open the release you want and choose a store link (Beatport, Apple Music/iTunes, Amazon, etc.).",
    bullets: [
      "If you need a receipt/invoice, pick the store that supports it for your region",
      "For commercial use, confirm whether the label is royalty-free or rights-managed",
      "If a track is monetized via Content ID, plan to request a whitelist after licensing",
    ],
    icon: FaShoppingCart,
  },
  {
    title: "Complete the purchase",
    description:
      "Finish checkout on the store. Keep your order confirmation email or receipt number.",
    bullets: [
      "Use the same email you’ll use for support requests",
      "If the transaction fails, try another payment method or store",
      "Avoid repeat purchases while the store is processing the first one",
    ],
    icon: FaCreditCard,
  },
  {
    title: "Download or add to your library",
    description:
      "After purchase, download from the store (when available) or add it to your music library.",
    bullets: [
      "Check “Purchases”, “Library”, or “Downloads” in your store account",
      "If the store is streaming-only, you may not get downloadable files",
      "Keep the receipt email for proof of purchase/licensing",
    ],
    icon: FaDownload,
  },
  {
    title: "Need an invoice or clearance?",
    description:
      "For rights-managed releases (e.g. Jazz & Bass), licensing is required before use in content or campaigns.",
    bullets: [
      "If you need an invoice, use your store’s invoice tools first",
      "For commercial clearance or questions, contact NJK Music with your receipt",
      "If you’re a creator, request Content ID whitelist after licensing",
    ],
    icon: FaReceipt,
  },
];

const stores: Store[] = [
  {
    name: "Beatport",
    description:
      "Best for DJ/pro use and store-grade releases—often the most consistent option for downloads and catalog metadata.",
    bullets: ["Pro-focused store experience", "Strong metadata + release pages", "Common pick for DJ workflows"],
    icon: SiBeatport,
  },
  {
    name: "Apple Music / iTunes",
    description:
      "Good for listeners and Apple ecosystems. Depending on region and product, downloads may be via iTunes/Purchases.",
    bullets: ["Great for listeners", "Easy library sync", "Invoice availability varies by region"],
    icon: SiApplemusic,
  },
  {
    name: "Amazon Music",
    description:
      "Convenient if you’re already in the Amazon ecosystem. Some listings are streaming-first, so double-check download options.",
    bullets: ["Fast checkout", "Wide regional availability", "Check if it’s streaming-only before buying"],
    icon: RiAmazonFill,
  },
];

export default function PurchaseGuidePage() {
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

            <div className="mt-8 max-w-2xl space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Purchase guide
              </h1>
              <p className="text-base text-slate-300 sm:text-lg">
                A quick, practical guide to buying and accessing releases—plus what to do about invoices, licensing,
                and Content ID whitelisting for monetized catalogs.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-soft transition hover:from-cyan-400 hover:to-fuchsia-400"
              >
                Contact for licensing
              </Link>
              <Link
                href="/help/content-id"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/0 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 backdrop-blur transition hover:bg-white/5"
              >
                Content ID guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-16 px-4 pb-16 sm:px-6 lg:px-8">
        <section aria-labelledby="purchase-steps">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 id="purchase-steps" className="text-2xl font-semibold tracking-tight text-white">
                Step-by-step
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Follow this sequence and keep your receipt handy if you need support or clearance.
              </p>
            </div>
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-slate-300">
              4 steps
            </span>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-200 backdrop-blur">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{step.description}</p>
                  <ul className="mt-5 space-y-2 text-sm text-slate-300">
                    {step.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-200" aria-hidden />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        <section aria-labelledby="stores">
          <div>
            <h2 id="stores" className="text-2xl font-semibold tracking-tight text-white">
              Recommended stores
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Stores differ by region and product type (download vs streaming). If one path fails, try another store link
              on the release page.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {stores.map((store) => {
              const Icon = store.icon;
              return (
                <div
                  key={store.name}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-fuchsia-200 backdrop-blur">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-white">{store.name}</h3>
                  <p className="mt-2 text-sm text-slate-300">{store.description}</p>
                  <ul className="mt-5 space-y-2 text-sm text-slate-300">
                    {store.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-fuchsia-200" aria-hidden />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
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
                    Rights-managed &amp; Content ID notes
                  </h2>
                  <p className="max-w-2xl text-sm text-slate-300">
                    Some labels (for example <span className="text-white">Jazz &amp; Bass</span>) are rights-managed and
                    monetized with Content ID. Creators must license the release and then request a whitelist to prevent
                    automated claims.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
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
                  Request whitelist
                </Link>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
                  1) License first
                </div>
                <p className="mt-2 text-sm text-slate-300">
                  Purchase/license the release before using it in monetized content, ads, or campaigns.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
                  2) Whitelist
                </div>
                <p className="mt-2 text-sm text-slate-300">
                  Send us your channel/profile link + receipt so we can add you to the exception list.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
                  3) Resolve claims
                </div>
                <p className="mt-2 text-sm text-slate-300">
                  If a claim slips through, follow the guide and contact us with the claim details.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="need-help">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-fuchsia-200 backdrop-blur">
                  <FaExclamationTriangle className="h-5 w-5" aria-hidden />
                </span>
                <div className="space-y-2">
                  <h2 id="need-help" className="text-xl font-semibold text-white">
                    Something not working?
                  </h2>
                  <p className="max-w-2xl text-sm text-slate-300">
                    If you can’t download, didn’t receive a receipt, or need an invoice, start with the purchase issues
                    page. If you still get stuck, email us with your order details.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/help/purchase-issues"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/0 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 backdrop-blur transition hover:bg-white/5"
                >
                  Purchase issues
                </Link>
                <a
                  href="mailto:support@njkmusic.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-soft transition hover:from-cyan-400 hover:to-fuchsia-400"
                >
                  <FaEnvelope className="h-4 w-4" aria-hidden />
                  Email support
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

