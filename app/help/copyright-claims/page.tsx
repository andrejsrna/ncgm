import Link from "next/link";
import type { IconType } from "react-icons";
import {
  FaChevronLeft,
  FaEnvelope,
  FaExclamationTriangle,
  FaFileAlt,
  FaInfoCircle,
  FaLock,
  FaShieldAlt,
} from "react-icons/fa";

type StepCard = {
  title: string;
  description: string;
  icon: IconType;
  steps: string[];
  urgency?: "high" | "normal";
};

type PreventionCard = {
  title: string;
  description: string;
  icon: IconType;
  steps: string[];
};

const emergencySteps: StepCard = {
  title: "Do this first",
  description:
    "Most issues resolve quickly when we have the right details. Don’t guess—send us the claim info and proof of licence if applicable.",
  icon: FaExclamationTriangle,
  urgency: "high",
  steps: [
    "Save a screenshot of the claim (claimant name + claim ID + affected video)",
    "Copy the video/post URL and your channel/profile URL",
    "Find the NJK Music release link you used (and your order ID/receipt if licensed)",
    "Contact us with all of the above so we can advise the safest path",
  ],
};

const claimScenarios: StepCard[] = [
  {
    title: "Content ID claim (automated match)",
    description:
      "A platform automatically matched audio in your video. This can happen even when you’re properly licensed—especially for monetized catalogs.",
    icon: FaInfoCircle,
    steps: [
      "Follow the Content ID guide for the platform you’re on",
      "Send us the claim details + video URL + channel URL",
      "If you’re licensed, include proof of licence so we can whitelist/clear quickly",
    ],
  },
  {
    title: "Copyright strike / takedown",
    description:
      "A more serious action than a claim (platform policy enforcement). Treat this as high priority and contact us immediately.",
    icon: FaLock,
    urgency: "high",
    steps: [
      "Don’t submit random disputes if you’re unsure of the license model",
      "Send us the takedown/strike notice details + URLs",
      "Include proof of licence (order ID/receipt) if you purchased/licensed the release",
      "We’ll guide the safest response and next steps",
    ],
  },
  {
    title: "Third‑party / wrong owner claim",
    description:
      "Another party is claiming ownership incorrectly. We can help validate whether the audio is from our catalog and advise the best dispute route.",
    icon: FaShieldAlt,
    urgency: "high",
    steps: [
      "Send us the claimant name + claim details",
      "Send the NJK Music release link (or the track title + label)",
      "We’ll confirm ownership and help you resolve or route you to the correct rights holder",
    ],
  },
];

const prevention: PreventionCard[] = [
  {
    title: "Keep proof of licence",
    description: "Receipts and order IDs are the fastest way to clear confusion and unblock monetization.",
    icon: FaFileAlt,
    steps: [
      "Save the store receipt/order ID",
      "Keep the NJK Music release link with your project files",
      "If delivering to a client, attach proof to the delivery pack",
    ],
  },
  {
    title: "Use consistent attribution",
    description: "Attribution reduces ambiguity and speeds up support responses.",
    icon: FaInfoCircle,
    steps: [
      "Credit: Track title + Label / NJK Music",
      "Link to the release page when possible",
      "List multiple tracks line-by-line (YouTube description works best)",
    ],
  },
  {
    title: "Whitelist for monetized catalogs",
    description: "Some labels are rights-managed and monetized via Content ID—licensed creators should whitelist early.",
    icon: FaShieldAlt,
    steps: [
      "Send channel URL + proof of licence",
      "Include the release link(s) you plan to use",
      "We add you to an exception list where applicable",
    ],
  },
];

export default function CopyrightClaimsPage() {
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
                Copyright claims
              </h1>
              <p className="text-base text-slate-300 sm:text-lg">
                What to do if you receive a claim, strike, or takedown while using NJK Music releases—plus what details
                to send so we can resolve it fast.
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
        <section aria-labelledby="emergency">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-rose-500/10 text-rose-200">
                  <FaExclamationTriangle className="h-5 w-5" aria-hidden />
                </span>
                <div className="space-y-2">
                  <h2 id="emergency" className="text-xl font-semibold text-white">
                    {emergencySteps.title}
                  </h2>
                  <p className="max-w-3xl text-sm text-slate-300">{emergencySteps.description}</p>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:from-cyan-400 hover:to-fuchsia-400"
              >
                Open contact page
              </Link>
            </div>

            <ul className="mt-6 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
              {emergencySteps.steps.map((step) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-rose-200" aria-hidden />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="scenarios">
          <div>
            <h2 id="scenarios" className="text-2xl font-semibold tracking-tight text-white">
              Common scenarios
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Pick the closest scenario and follow the steps. If you’re unsure, contact us first.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {claimScenarios.map((scenario) => {
              const Icon = scenario.icon;
              const badge =
                scenario.urgency === "high"
                  ? "border-rose-300/30 bg-rose-500/10 text-rose-200"
                  : "border-white/10 bg-white/5 text-slate-200";

              return (
                <div
                  key={scenario.title}
                  className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-fuchsia-200 backdrop-blur">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] ${badge}`}>
                      {scenario.urgency === "high" ? "High priority" : "Standard"}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-white">{scenario.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{scenario.description}</p>

                  <ul className="mt-5 space-y-2 text-sm text-slate-300">
                    {scenario.steps.map((step) => (
                      <li key={step} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-200" aria-hidden />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        <section aria-labelledby="prevention">
          <div>
            <h2 id="prevention" className="text-2xl font-semibold tracking-tight text-white">
              Prevent problems
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              These habits reduce claim risk and speed up resolution when something gets flagged.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {prevention.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-200 backdrop-blur">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-white">{card.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{card.description}</p>
                  <ul className="mt-5 space-y-2 text-sm text-slate-300">
                    {card.steps.map((step) => (
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

        <section aria-labelledby="support">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-soft backdrop-blur">
            <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-fuchsia-200 backdrop-blur">
                <FaEnvelope className="h-6 w-6" aria-hidden />
              </span>
              <div className="space-y-3">
                <h2 id="support" className="text-2xl font-semibold tracking-tight text-white">
                  Need help right now?
                </h2>
                <p className="text-sm text-slate-300 sm:text-base">
                  Email us with the URLs and claim details. If you licensed the release, include your order ID/receipt
                  so we can whitelist or resolve the issue faster.
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

