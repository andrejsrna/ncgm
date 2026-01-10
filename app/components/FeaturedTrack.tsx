'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaSpotify, FaExternalLinkAlt } from 'react-icons/fa';
import { useClientMusic } from '@/app/hooks/useClientMusic';

export default function FeaturedTrack() {
  const { tracks, loading, error } = useClientMusic(9);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const tracksWithImages = tracks.filter((track) => Boolean(track.imageUrl)).slice(0, 3);

  if (loading) {
    return (
      <section className="bg-transparent py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-10 text-center shadow-sm backdrop-blur">
            <p className="text-sm text-slate-300">Loading featured tracks…</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-transparent py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-rose-500/30 bg-rose-500/10 p-10 text-center text-sm text-rose-200 shadow-sm backdrop-blur">
            {error}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-transparent py-16">
      <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
              NJK Music labels
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              A selection of tracks from our labels under NJK Music
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Handpicked releases across our roster—built for creators, streamers, and teams.
            </p>
          </div>
          <Link
            href="/music"
            className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
          >
            View all music
            <FaExternalLinkAlt className="h-3 w-3" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tracksWithImages.map((track) => (
            <article
              key={track.slug}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-sm backdrop-blur"
            >
              <div className="relative aspect-square w-full">
                <Image
                  src={track.imageUrl!}
                  alt={track.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col gap-4 p-5">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-white">{track.title}</h3>
                  <p className="text-xs uppercase tracking-wide text-slate-300">
                    {track.genre ?? 'Electronic'}
                  </p>
                </div>

                <div className="mt-auto space-y-3 text-sm text-slate-300">
                  {track.trackUrl && (
                    <a
                      href={track.trackUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-spotify transition hover:opacity-80"
                    >
                      <FaSpotify className="h-4 w-4" />
                      Listen on Spotify
                    </a>
                  )}

                  <div className="flex gap-3">
                    <Link
                      href={`/music/${track.slug}`}
                      className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/0 px-3 py-2 text-xs font-medium text-slate-200 transition hover:border-cyan-300/60 hover:bg-white/5"
                    >
                      View details
                    </Link>
                    {track.embedUrl && (
                      <button
                        type="button"
                        onClick={() => setPreviewUrl(track.embedUrl ?? null)}
                        className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/0 px-3 py-2 text-xs font-medium text-slate-200 transition hover:border-fuchsia-300/60 hover:bg-white/5"
                      >
                        Preview
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {tracksWithImages.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center text-sm text-slate-300 shadow-sm backdrop-blur">
            No featured releases with artwork right now.
          </div>
        )}
      </div>

      {previewUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 px-4 backdrop-blur-sm"
          onClick={() => setPreviewUrl(null)}
        >
          <div
            className="w-full max-w-2xl rounded-2xl border border-white/10 bg-slate-950 p-6 shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-base font-semibold text-white">Preview track</h3>
              <button
                type="button"
                onClick={() => setPreviewUrl(null)}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                Close
              </button>
            </div>
            <div className="overflow-hidden rounded-lg border border-white/10 bg-black">
              <div dangerouslySetInnerHTML={{ __html: previewUrl }} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
