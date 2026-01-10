import Link from "next/link";
import { FaChevronLeft, FaEnvelope, FaFileContract, FaInfoCircle, FaLock } from "react-icons/fa";

type Section = {
  id: string;
  title: string;
  description: string;
  bullets: string[];
};

const sections: Section[] = [
  {
    id: "overview",
    title: "Overview",
    description: "These terms apply to your use of njkmusic.com and related services.",
    bullets: [
      "The site provides a catalog of releases, labels, and guidance (licensing, claims, support).",
      "Purchases and downloads typically happen via third-party stores linked from release pages.",
      "By using the site, you agree to these terms and applicable policies (Privacy, Cookies).",
    ],
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    description: "Use the site responsibly and don’t interfere with other users or the service.",
    bullets: [
      "Do not attempt to abuse, scrape, or disrupt the site or its APIs.",
      "Do not submit false claims, fraudulent requests, or misleading information.",
      "Do not upload or distribute malware or exploit vulnerabilities.",
    ],
  },
  {
    id: "content-and-licensing",
    title: "Content & licensing",
    description: "License terms depend on the label and release you use.",
    bullets: [
      "Some releases are creator-ready (royalty-free workflows); others are rights-managed and require purchase/licence.",
      "Do not reupload, resell, or redistribute raw audio files unless explicitly authorized.",
      "For paid ads, broadcast, distribution, or special cases, request clearance before publishing.",
    ],
  },
  {
    id: "third-parties",
    title: "Third-party services",
    description: "Stores and platforms have their own terms and policies.",
    bullets: [
      "Store checkout, refunds, invoices, and delivery are controlled by the store you purchase from.",
      "Platform rules (YouTube/Twitch/etc.) may affect claims and monetization behavior.",
      "We can guide support flows, but we don’t control third-party policy decisions.",
    ],
  },
  {
    id: "changes",
    title: "Changes to these terms",
    description: "We may update these terms over time.",
    bullets: [
      "Updates will be reflected on this page.",
      "Continued use of the site after an update means you accept the updated terms.",
    ],
  },
];

export default function TermsPage() {
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
                Terms &amp; conditions
              </h1>
              <p className="text-base text-slate-300 sm:text-lg">
                These terms describe how you can use njkmusic.com, how licensing and third-party stores work, and how to
                contact us for support.
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
                href="/cookies"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/0 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 backdrop-blur transition hover:bg-white/5"
              >
                Cookies
              </Link>
              <Link
                href="/license"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/0 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 backdrop-blur transition hover:bg-white/5"
              >
                Licensing overview
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
        <section aria-label="Terms navigation">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-1">
                <h2 className="text-xl font-semibold text-white">Jump to</h2>
                <p className="text-sm text-slate-300">
                  Quick links to the main sections.
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
        </section>

        <section aria-label="Terms sections">
          <div className="space-y-12">
            {sections.map((section) => (
              <article
                key={section.id}
                id={section.id}
                className="scroll-mt-24 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-200 backdrop-blur">
                    {section.id === "content-and-licensing" ? (
                      <FaFileContract className="h-5 w-5" aria-hidden />
                    ) : section.id === "acceptable-use" ? (
                      <FaLock className="h-5 w-5" aria-hidden />
                    ) : (
                      <FaInfoCircle className="h-5 w-5" aria-hidden />
                    )}
                  </span>
                  <div className="space-y-2">
                    <h2 className="text-2xl font-semibold tracking-tight text-white">
                      {section.title}
                    </h2>
                    <p className="text-sm text-slate-300">{section.description}</p>
                  </div>
                </div>

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
                <FaEnvelope className="h-6 w-6" aria-hidden />
              </span>
              <div className="space-y-3">
                <h2 id="contact" className="text-2xl font-semibold tracking-tight text-white">
                  Questions?
                </h2>
                <p className="text-sm text-slate-300 sm:text-base">
                  If you have questions about these terms, email us and include links or details so we can respond
                  faster.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:terms@njkmusic.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:from-cyan-400 hover:to-fuchsia-400"
                >
                  <FaEnvelope className="h-4 w-4" aria-hidden />
                  Email terms@njkmusic.com
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/0 px-6 py-3 text-sm font-semibold text-slate-200 backdrop-blur transition hover:bg-white/5"
                >
                  Contact form
                </Link>
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

