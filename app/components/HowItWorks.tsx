'use client';

import { FiSearch, FiDownloadCloud, FiVolume2 } from 'react-icons/fi';
import Link from 'next/link';

const steps = [
  {
    icon: <FiSearch className="h-6 w-6" />,
    title: 'Discover',
    description: 'Browse curated playlists and releases across labels and genres.',
  },
  {
    icon: <FiDownloadCloud className="h-6 w-6" />,
    title: 'Download',
    description: 'Grab high-quality WAV and MP3 files cleared for monetisation.',
  },
  {
    icon: <FiVolume2 className="h-6 w-6" />,
    title: 'Create',
    description: 'Use tracks in streams, videos, podcasts, and client work without claims.',
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-transparent py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-4 text-center">
          <h2 className="text-3xl font-semibold text-white">How it works</h2>
          <p className="text-sm text-slate-300 sm:text-base">
            A simple workflow designed for creators who need dependable, stream-safe audio.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left shadow-sm backdrop-blur"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-white/5 p-3 text-cyan-200">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{step.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/help"
            className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/0 px-5 py-3 text-sm font-medium text-slate-200 backdrop-blur transition hover:border-cyan-300/60 hover:bg-white/5"
          >
            View licensing details
          </Link>
        </div>
      </div>
    </section>
  );
}
