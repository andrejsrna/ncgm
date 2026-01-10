import Link from "next/link";
import { FaChevronLeft, FaCookieBite, FaEnvelope, FaInfoCircle, FaLock } from "react-icons/fa";

type CookieCategory = {
  title: string;
  description: string;
  required: boolean;
  examples: string[];
};

const categories: CookieCategory[] = [
  {
    title: "Essential cookies",
    description:
      "These help the site function reliably (navigation, security, and basic preferences).",
    required: true,
    examples: [
      "Load balancing / security protections",
      "Remembering basic UI preferences (when applicable)",
      "Preventing abuse and spam",
    ],
  },
  {
    title: "Analytics cookies",
    description:
      "These help us understand how the site is used so we can improve pages and navigation.",
    required: false,
    examples: [
      "Anonymous page view counts",
      "Performance and error monitoring",
      "Feature usage metrics",
    ],
  },
  {
    title: "Preference cookies",
    description:
      "These remember optional choices (for example language or display preferences) to improve your experience.",
    required: false,
    examples: ["Language preference", "UI settings", "Remembering dismissed notices"],
  },
];

export default function CookiesPage() {
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
                Cookies
              </h1>
              <p className="text-base text-slate-300 sm:text-lg">
                This page explains how NJK Music may use cookies and similar technologies to keep the site working and
                improve the experience.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/privacy"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/0 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 backdrop-blur transition hover:bg-white/5"
              >
                Privacy policy
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
        <section aria-labelledby="what">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-200 backdrop-blur">
                <FaCookieBite className="h-5 w-5" aria-hidden />
              </span>
              <div className="space-y-2">
                <h2 id="what" className="text-xl font-semibold text-white">
                  What are cookies?
                </h2>
                <p className="max-w-3xl text-sm text-slate-300">
                  Cookies are small text files stored by your browser. Sites use them for essential functionality,
                  preferences, and (optionally) analytics.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="categories">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 id="categories" className="text-2xl font-semibold tracking-tight text-white">
                Cookie categories
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Not every category is always active. Some cookies may be set by third-party services we integrate with.
              </p>
            </div>
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-slate-300">
              Overview
            </span>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {categories.map((category) => (
              <div
                key={category.title}
                className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-fuchsia-200 backdrop-blur">
                    {category.required ? (
                      <FaLock className="h-5 w-5" aria-hidden />
                    ) : (
                      <FaInfoCircle className="h-5 w-5" aria-hidden />
                    )}
                  </span>
                  <span
                    className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] ${
                      category.required
                        ? "border-emerald-300/30 bg-emerald-500/10 text-emerald-200"
                        : "border-white/10 bg-white/5 text-slate-200"
                    }`}
                  >
                    {category.required ? "Required" : "Optional"}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold text-white">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300">{category.description}</p>

                <ul className="mt-5 space-y-2 text-sm text-slate-300">
                  {category.examples.map((example) => (
                    <li key={example} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-200" aria-hidden />
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="manage">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-soft backdrop-blur">
            <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-fuchsia-200 backdrop-blur">
                <FaEnvelope className="h-6 w-6" aria-hidden />
              </span>
              <div className="space-y-3">
                <h2 id="manage" className="text-2xl font-semibold tracking-tight text-white">
                  Questions or requests?
                </h2>
                <p className="text-sm text-slate-300 sm:text-base">
                  If you have questions about cookies or privacy on NJK Music, contact us and we’ll help.
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
                <Link
                  href="/privacy"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/0 px-6 py-3 text-sm font-semibold text-slate-200 backdrop-blur transition hover:bg-white/5"
                >
                  Read privacy policy
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

