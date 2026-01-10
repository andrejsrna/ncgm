'use client';

import Link from 'next/link';
import { pressStart2P } from '@/lib/fonts';

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center gap-10 px-4 py-24 text-center sm:px-6 lg:px-8">
        <div className="space-y-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200 backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-fuchsia-400 shadow-[0_0_16px_rgba(232,121,249,0.65)]" />
            Creator-safe music for streams, edits, and drops
          </span>
          <h1 className={`${pressStart2P.className} text-4xl leading-tight tracking-tight text-white sm:text-5xl`}>
            Your next track starts here.
          </h1>
          <p className="mx-auto max-w-2xl text-base text-slate-300 sm:text-lg">
            High-energy, modern releases built for gaming culture and creator workflows—clean licensing, fast downloads,
            and a catalog that feels alive.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/music"
              className="inline-flex w-full items-center justify-center rounded-md bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-soft transition hover:opacity-90 sm:w-auto"
            >
              Browse releases
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
