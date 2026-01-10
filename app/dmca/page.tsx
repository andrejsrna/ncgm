import Link from "next/link";
import {
  FaChevronLeft,
  FaEnvelope,
  FaFileAlt,
  FaInfoCircle,
  FaLock,
} from "react-icons/fa";

type ChecklistSection = {
  title: string;
  description: string;
  items: string[];
};

const noticeRequirements: ChecklistSection = {
  title: "DMCA takedown notice (what to include)",
  description:
    "To report alleged copyright infringement, your notice should include the following information:",
  items: [
    "Your full name and contact information (email + address)",
    "A description of the copyrighted work you believe is infringed",
    "The exact URL(s) of the allegedly infringing material on njkmusic.com",
    "A statement that you have a good faith belief the use is not authorized by the rights holder, agent, or law",
    "A statement that the information in the notice is accurate, under penalty of perjury",
    "A physical or electronic signature of the rights holder or authorized agent",
  ],
};

const counterNoticeRequirements: ChecklistSection = {
  title: "DMCA counter-notice (if your content was removed)",
  description:
    "If you believe your material was removed by mistake or misidentification, you may submit a counter-notice:",
  items: [
    "Your name, address, phone number, and email",
    "The URL(s) or description of the material that was removed",
    "A statement under penalty of perjury that you have a good faith belief the removal was a mistake or misidentification",
    "Your consent to the jurisdiction of the appropriate court (and acceptance of service of process from the claimant)",
    "A physical or electronic signature",
  ],
};

export default function DmcaPage() {
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
                DMCA
              </h1>
              <p className="text-base text-slate-300 sm:text-lg">
                This page explains how to send a DMCA notice or counter-notice related to content hosted on
                njkmusic.com.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:dmca@njkmusic.com"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-soft transition hover:from-cyan-400 hover:to-fuchsia-400"
              >
                <FaEnvelope className="h-4 w-4" aria-hidden />
                Email dmca@njkmusic.com
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/0 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 backdrop-blur transition hover:bg-white/5"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-16 px-4 pb-16 sm:px-6 lg:px-8">
        <section aria-labelledby="notice">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-200 backdrop-blur">
                <FaFileAlt className="h-5 w-5" aria-hidden />
              </span>
              <div className="space-y-2">
                <h2 id="notice" className="text-xl font-semibold text-white">
                  {noticeRequirements.title}
                </h2>
                <p className="max-w-3xl text-sm text-slate-300">
                  {noticeRequirements.description}
                </p>
              </div>
            </div>

            <ul className="mt-6 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
              {noticeRequirements.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-200" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="counter-notice">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-fuchsia-200 backdrop-blur">
                <FaInfoCircle className="h-5 w-5" aria-hidden />
              </span>
              <div className="space-y-2">
                <h2 id="counter-notice" className="text-xl font-semibold text-white">
                  {counterNoticeRequirements.title}
                </h2>
                <p className="max-w-3xl text-sm text-slate-300">
                  {counterNoticeRequirements.description}
                </p>
              </div>
            </div>

            <ul className="mt-6 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
              {counterNoticeRequirements.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-fuchsia-200" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="address">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-rose-500/10 text-rose-200">
                <FaLock className="h-5 w-5" aria-hidden />
              </span>
              <div className="space-y-2">
                <h2 id="address" className="text-xl font-semibold text-white">
                  DMCA contact
                </h2>
                <p className="max-w-3xl text-sm text-slate-300">
                  Send notices to our designated email. Include URLs and complete information so we can respond quickly.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
                  Email
                </div>
                <a
                  href="mailto:dmca@njkmusic.com"
                  className="mt-3 inline-block text-sm font-medium text-cyan-200 hover:text-cyan-100"
                >
                  dmca@njkmusic.com
                </a>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
                  Postal address
                </div>
                <div className="mt-3 space-y-1 text-sm text-slate-300">
                  <div>No Copyright Gaming Music</div>
                  <div>Enhold s.r.o.</div>
                  <div>Drobného 1900/2</div>
                  <div>841 02 Bratislava - mestská časť Dúbravka</div>
                  <div>Slovakia</div>
                </div>
              </div>
            </div>

            <p className="mt-6 text-xs text-slate-400">
              This page is provided for informational purposes and does not constitute legal advice.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

