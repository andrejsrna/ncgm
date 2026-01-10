import Link from "next/link";
import {
  FaChevronLeft,
  FaEnvelope,
  FaLock,
  FaShieldAlt,
  FaUserShield,
} from "react-icons/fa";

type Section = {
  id: string;
  title: string;
  description: string;
  bullets: string[];
};

const sections: Section[] = [
  {
    id: "what-we-collect",
    title: "What we collect",
    description: "We collect only what we need to run and improve the site.",
    bullets: [
      "Basic usage data (pages visited, device/browser info) for performance and troubleshooting",
      "Email address if you subscribe to the newsletter",
      "Support messages you send us (and any details you include, like order IDs or URLs)",
    ],
  },
  {
    id: "how-we-use",
    title: "How we use it",
    description: "We use data to operate the service, respond to requests, and improve the experience.",
    bullets: [
      "Operate and secure the website",
      "Send newsletter updates if you opted in",
      "Handle licensing, whitelisting, and claim support when you contact us",
      "Understand what pages are useful so we can improve navigation and content",
    ],
  },
  {
    id: "sharing",
    title: "Sharing",
    description: "We don’t sell personal data. We share only when necessary to operate the service.",
    bullets: [
      "Service providers that help run the site (hosting, email, analytics) where applicable",
      "Legal or enforcement requests when required by law",
      "Store/platform support flows when you request help and provide details to share",
    ],
  },
  {
    id: "your-rights",
    title: "Your rights",
    description: "You can reach out to access, correct, or request deletion of your personal data.",
    bullets: [
      "Request access to the personal data we hold about you",
      "Request correction of inaccurate data",
      "Request deletion where applicable",
      "Opt out of newsletters at any time (unsubscribe links where available)",
    ],
  },
];

export default function PrivacyPage() {
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
                Privacy policy
              </h1>
              <p className="text-base text-slate-300 sm:text-lg">
                This policy explains how NJK Music collects and uses information when you visit njkmusic.com or contact
                us for support.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/cookies"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/0 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 backdrop-blur transition hover:bg-white/5"
              >
                Cookies
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
        <section aria-labelledby="highlights">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-200 backdrop-blur">
                <FaShieldAlt className="h-5 w-5" aria-hidden />
              </span>
              <div className="space-y-2">
                <h2 id="highlights" className="text-xl font-semibold text-white">
                  Key points
                </h2>
                <p className="max-w-3xl text-sm text-slate-300">
                  We keep data collection minimal and use it to run the site, provide support, and improve the catalog
                  experience.
                </p>
              </div>
            </div>

            <ul className="mt-6 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
              {[
                "We don’t sell your personal data.",
                "Newsletter signups store your email address and timestamp.",
                "You can request deletion or correction by emailing us.",
                "Some providers (hosting/email) may process data on our behalf.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-200" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-label="Privacy policy sections">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-1">
                <h2 className="text-xl font-semibold text-white">Jump to</h2>
                <p className="text-sm text-slate-300">
                  Quick links to each section of the policy.
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
                <FaUserShield className="h-6 w-6" aria-hidden />
              </span>
              <div className="space-y-3">
                <h2 id="contact" className="text-2xl font-semibold tracking-tight text-white">
                  Contact for privacy requests
                </h2>
                <p className="text-sm text-slate-300 sm:text-base">
                  For access, correction, or deletion requests, email us with enough detail to identify your request.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:privacy@njkmusic.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:from-cyan-400 hover:to-fuchsia-400"
                >
                  <FaEnvelope className="h-4 w-4" aria-hidden />
                  Email privacy@njkmusic.com
                </a>
                <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/0 px-6 py-3 text-sm font-semibold text-slate-200 backdrop-blur">
                  <FaLock className="h-4 w-4" aria-hidden />
                  Please don’t send passwords
                </span>
              </div>
              <p className="text-xs text-slate-400">
                This page is provided for informational purposes and does not constitute legal advice.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

