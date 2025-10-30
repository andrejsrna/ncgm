'use client';

import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="bg-primary/5 py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          Ready to level up your sound?
        </h2>
        <p className="mt-4 text-sm text-slate-600 sm:text-base">
          Build playlists, download releases, and keep your productions claim-free. Explore the NJK Music catalog or reach out for tailored recommendations.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/music"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-soft transition hover:bg-primary/90"
          >
            Browse releases
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border border-primary/40 px-5 py-3 text-sm font-medium text-primary transition hover:border-primary hover:bg-white"
          >
            Talk to our team
          </Link>
        </div>
      </div>
    </section>
  );
}
