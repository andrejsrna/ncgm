'use client';

import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="bg-transparent py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent px-6 py-14 shadow-soft backdrop-blur sm:px-10">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Ready to level up your sound?
          </h2>
          <p className="mt-4 text-sm text-slate-300 sm:text-base">
            Build playlists, download releases, and keep your productions claim-free. Explore the NJK Music catalog or reach out for tailored recommendations.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/music"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-soft transition hover:opacity-90"
            >
              Browse releases
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/0 px-5 py-3 text-sm font-medium text-slate-200 backdrop-blur transition hover:bg-white/5"
            >
              Talk to our team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
