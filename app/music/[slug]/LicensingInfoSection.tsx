import Link from "next/link";
import { FiShield } from "react-icons/fi";

const checklist = [
  "Broadcast-safe WAV and MP3 files included with every download",
  "Unlimited usage across streams, podcasts, and commercial projects",
  "Monetisation cleared for Twitch, YouTube, TikTok, and client work",
  "Credit the No Copyright Gaming Music label to keep releases compliant",
];

export default function LicensingInfoSection() {
  return (
    <section
      aria-labelledby="licensing-info"
      className="rounded-3xl border border-border bg-slate-50 px-6 py-8 shadow-soft"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-4">
          <div className="rounded-2xl bg-primary/10 p-3 text-primary">
            <FiShield className="text-xl" aria-hidden />
          </div>
          <div>
            <h2
              id="licensing-info"
              className="text-base font-semibold uppercase tracking-[0.3em] text-slate-600"
            >
              Licensing at a glance
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-600">
              Every download unlocks a perpetual, royalty-free licence crafted for creators,
              agencies, and indie studios.
            </p>
          </div>
        </div>

        <Link
          href="/help/attribution"
          className="inline-flex items-center justify-center rounded-full border border-border bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 transition hover:border-primary hover:text-primary"
        >
          View attribution guide
        </Link>
      </div>

      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {checklist.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
            <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
