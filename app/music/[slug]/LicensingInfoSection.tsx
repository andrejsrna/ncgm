import Link from "next/link";
import { FaShieldAlt } from "react-icons/fa";

const checklist = [
  "Broadcast-safe WAV + MP3 exports included",
  "Unlimited usage across streams, podcasts, and client projects",
  "Always-on monetization without copyright flags",
  "Credit No Copyright Gaming Music for commercial campaigns",
];

export default function LicensingInfoSection() {
  return (
    <section
      aria-labelledby="licensing-info"
      className="rounded-3xl border border-red-900/40 bg-black/70 px-6 py-8 shadow-[0_0_60px_-25px_rgba(248,113,113,0.6)]"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-4">
          <div className="rounded-2xl border border-red-700/60 bg-red-900/30 p-3 text-red-300">
            <FaShieldAlt className="text-xl" aria-hidden />
          </div>
          <div>
            <h2 id="licensing-info" className="text-base font-semibold uppercase tracking-[0.35em] text-red-200">
              License at a Glance
            </h2>
            <p className="mt-2 max-w-xl text-sm text-red-200/70">
              Every download unlocks a perpetual, royalty-free license crafted for creators, agencies, and indie
              studios.
            </p>
          </div>
        </div>

        <Link
          href="/help/attribution"
          className="self-start rounded-full border border-red-600/50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-red-200 transition hover:border-red-400 hover:text-white"
        >
          View Attribution Guide
        </Link>
      </div>

      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {checklist.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-red-100/80">
            <span className="mt-1 h-2 w-2 rounded-full bg-red-400" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
