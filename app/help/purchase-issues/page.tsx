import type { Metadata } from "next";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  FaChevronLeft,
  FaEnvelope,
  FaExclamationTriangle,
  FaExternalLinkAlt,
  FaFileAlt,
  FaReceipt,
  FaShieldAlt,
} from "react-icons/fa";
import { SiApplemusic, SiBeatport } from "react-icons/si";
import { RiAmazonFill } from "react-icons/ri";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `Purchase issues | ${SITE_NAME}`,
  description:
    "Troubleshoot checkout and download problems across Beatport, Apple/iTunes, and Amazon. Learn what to collect and when to contact NJK Music support.",
};

type IssueGroup = {
  title: string;
  description: string;
  icon: IconType;
  issues: {
    title: string;
    description: string;
    steps: string[];
    urgent?: boolean;
  }[];
};

type StoreContact = {
  name: string;
  icon: IconType;
  supportLabel: string;
  url: string;
};

const beforeYouStart: string[] = [
  "Store used (Beatport / Apple / Amazon) + the email on the purchase",
  "Order ID / receipt / invoice (screenshot or PDF)",
  "Release link from njkmusic.com (or track title + label)",
  "What you expected (download file, invoice, library access) and what happened instead",
];

const issueGroups: IssueGroup[] = [
  {
    title: "Checkout & payment",
    description: "Problems completing a purchase or getting charged incorrectly.",
    icon: FaShieldAlt,
    issues: [
      {
        title: "Payment failed / purchase rejected",
        description: "The store blocks the payment or rejects the checkout.",
        steps: [
          "Try a different payment method (card/PayPal where available)",
          "Confirm your billing address and region settings match the payment method",
          "Wait 10–15 minutes before retrying (stores sometimes hold a pending attempt)",
          "If it still fails, try a different store link from the release page",
        ],
      },
      {
        title: "Charged multiple times",
        description: "You see duplicate charges for the same purchase attempt.",
        urgent: true,
        steps: [
          "Do not retry the purchase again immediately",
          "Check if one of the charges is pending (it may auto-reverse)",
          "Collect transaction IDs + timestamps",
          "Contact the store support first (they control payments and refunds)",
        ],
      },
    ],
  },
  {
    title: "Downloads & access",
    description: "You paid, but can’t access the files or the delivery looks wrong.",
    icon: FaFileAlt,
    issues: [
      {
        title: "Can’t find the download",
        description: "The store purchase succeeded, but you can’t locate the files.",
        steps: [
          "Check the store’s Purchases / Library / Downloads section",
          "Make sure you’re logged into the same account/email used for the purchase",
          "Try another browser or device (sometimes it’s a session/cache issue)",
          "Check your email for a purchase confirmation and use the order link",
        ],
      },
      {
        title: "Download is broken / corrupted",
        description: "The file fails to download or the archive is incomplete.",
        urgent: true,
        steps: [
          "Retry on a stable connection (wired or strong Wi‑Fi)",
          "Try a different browser and disable aggressive download blockers",
          "Re-download and verify file size matches the store listing (if shown)",
          "If it persists, contact the store support with your order ID",
        ],
      },
    ],
  },
  {
    title: "Receipts, invoices & account questions",
    description: "You need proof of purchase for a client or platform, or you can’t find your receipt.",
    icon: FaReceipt,
    issues: [
      {
        title: "I need an invoice / receipt",
        description: "You need an invoice for accounting, clients, or clearance.",
        steps: [
          "Use the store’s invoice/receipt tools first (varies by store and region)",
          "If you can’t generate it, contact the store support with your order ID",
          "Keep a screenshot of the purchase confirmation as temporary proof",
          "For rights-managed workflows, we can also help confirm what we need for whitelisting",
        ],
      },
      {
        title: "Purchase not showing in my account",
        description: "Checkout completed, but the order isn’t visible in your library.",
        steps: [
          "Wait up to 24 hours for processing (some stores sync slowly)",
          "Search your email for the confirmation and open the receipt link",
          "Confirm you didn’t use a different account/email during checkout",
          "Contact the store support with transaction details",
        ],
      },
    ],
  },
];

const storeContacts: StoreContact[] = [
  {
    name: "Beatport",
    icon: SiBeatport,
    supportLabel: "beatport.com/support",
    url: "https://beatport.com/support",
  },
  {
    name: "Apple / iTunes",
    icon: SiApplemusic,
    supportLabel: "support.apple.com/itunes",
    url: "https://support.apple.com/itunes",
  },
  {
    name: "Amazon Music",
    icon: RiAmazonFill,
    supportLabel: "music.amazon.com/support",
    url: "https://music.amazon.com/support",
  },
];

export default function PurchaseIssuesPage() {
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
                Purchase issues
              </h1>
              <p className="text-base text-slate-300 sm:text-lg">
                Trouble checking out, downloading, or getting an invoice? Start here. For most issues, the fastest path
                is: collect your order details → contact the store support → contact NJK Music if you need licensing or
                Content ID help.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
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
        <section aria-labelledby="before-you-start">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-rose-500/10 text-rose-200">
                <FaExclamationTriangle className="h-5 w-5" aria-hidden />
              </span>
              <div className="space-y-2">
                <h2 id="before-you-start" className="text-xl font-semibold text-white">
                  Before you start
                </h2>
                <p className="max-w-3xl text-sm text-slate-300">
                  Having this info ready saves a lot of back-and-forth with store support and with us.
                </p>
              </div>
            </div>

            <ul className="mt-6 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
              {beforeYouStart.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-rose-200" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="issues">
          <div>
            <h2 id="issues" className="text-2xl font-semibold tracking-tight text-white">
              Common issues
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Choose the closest problem and follow the steps. If you’re billed multiple times, treat it as high
              priority and contact the store.
            </p>
          </div>

          <div className="mt-8 space-y-12">
            {issueGroups.map((group) => {
              const GroupIcon = group.icon;
              return (
                <section key={group.title}>
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cyan-200 backdrop-blur">
                      <GroupIcon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                      <p className="mt-1 text-sm text-slate-300">{group.description}</p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-6 md:grid-cols-2">
                    {group.issues.map((issue) => (
                      <div
                        key={issue.title}
                        className={`rounded-3xl border bg-white/5 p-6 shadow-soft backdrop-blur ${
                          issue.urgent ? "border-rose-300/30" : "border-white/10"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <h4 className="text-lg font-semibold text-white">{issue.title}</h4>
                          {issue.urgent ? (
                            <span className="inline-flex items-center rounded-full border border-rose-300/30 bg-rose-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-rose-200">
                              High priority
                            </span>
                          ) : null}
                        </div>
                        <p className="mt-2 text-sm text-slate-300">{issue.description}</p>
                        <ul className="mt-5 space-y-2 text-sm text-slate-300">
                          {issue.steps.map((step, index) => (
                            <li key={step} className="flex items-start gap-3">
                              <span className="mt-0.5 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
                                {(index + 1).toString().padStart(2, "0")}
                              </span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </section>

        <section aria-labelledby="store-support">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-fuchsia-200 backdrop-blur">
                <FaReceipt className="h-5 w-5" aria-hidden />
              </span>
              <div className="space-y-2">
                <h2 id="store-support" className="text-xl font-semibold text-white">
                  Store support links
                </h2>
                <p className="max-w-3xl text-sm text-slate-300">
                  Stores control checkout, refunds, invoices, and download delivery. For payment or download issues,
                  contact the store first.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {storeContacts.map((contact) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={contact.name}
                    href={contact.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:bg-black/30"
                  >
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-200 backdrop-blur">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-white">{contact.name}</div>
                        <div className="mt-1 text-sm text-slate-300">
                          {contact.supportLabel}
                        </div>
                        <div className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-cyan-200 group-hover:text-cyan-100">
                          Open support
                          <FaExternalLinkAlt className="h-3.5 w-3.5" aria-hidden />
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <section aria-labelledby="still-need-help">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-soft backdrop-blur">
            <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-fuchsia-200 backdrop-blur">
                <FaEnvelope className="h-6 w-6" aria-hidden />
              </span>
              <div className="space-y-3">
                <h2 id="still-need-help" className="text-2xl font-semibold tracking-tight text-white">
                  Still need help?
                </h2>
                <p className="text-sm text-slate-300 sm:text-base">
                  If the issue is about licensing, Content ID, or whitelisting, contact us with your release link and
                  proof of purchase/licence. If it’s strictly a store checkout/download issue, store support is usually
                  fastest.
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

