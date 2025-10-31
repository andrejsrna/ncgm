'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto flex min-h-[60vh] max-w-6xl flex-col justify-center gap-10 px-4 py-24 sm:px-6 lg:px-8 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            Creator-first music
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Creator-ready labels for every project
          </h1>
          <p className="text-base text-slate-600 sm:text-lg">
            NJK Music curates label-driven releases tailored for gamers, streamers, and creative teams.
            Discover high-quality tracks with clear licensing and instant access.
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <Link
              href="/music"
              className="inline-flex w-full items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition hover:bg-primary/90 sm:w-auto"
            >
              Browse music
            </Link>
            <Link
              href="/labels/no-copyright-gaming-music"
              className="inline-flex w-full items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 sm:w-auto"
            >
              Explore NCGM label
            </Link>
          </div>
        </div>

        <div className="flex-1 rounded-3xl border border-border bg-white p-6 shadow-soft">
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Why creators choose NJK Music
            </h2>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                Royalty-free catalog cleared for Twitch, YouTube, and client work.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                Diverse labels and genres curated by producers and sound designers.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                Simple licensing with transparent attribution guidance.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
