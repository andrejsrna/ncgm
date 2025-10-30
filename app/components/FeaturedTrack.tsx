'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaSpotify, FaExternalLinkAlt } from 'react-icons/fa';
import { useClientMusic } from '@/app/hooks/useClientMusic';

export default function FeaturedTrack() {
  const { tracks, loading, error } = useClientMusic(3);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  if (loading) {
    return (
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border bg-white p-10 text-center shadow-sm">
            <p className="text-sm text-slate-500">Loading featured tracks…</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-10 text-center text-sm text-rose-600 shadow-sm">
            {error}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Featured releases
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Spotlight tracks from the NCGM label
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              A rotating collection of stream-safe tracks curated for modern creators.
            </p>
          </div>
          <Link
            href="/music"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:underline"
          >
            View all music
            <FaExternalLinkAlt className="h-3 w-3" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tracks.map((track) => (
            <article
              key={track.slug}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm"
            >
              {track.imageUrl && (
                <div className="relative h-40 w-full">
                  <Image
                    src={track.imageUrl}
                    alt={track.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
              )}

              <div className="flex flex-1 flex-col gap-4 p-5">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-slate-900">{track.title}</h3>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    {track.genre ?? 'Electronic'}
                  </p>
                </div>

                <div className="mt-auto space-y-3 text-sm text-slate-600">
                  {track.trackUrl && (
                    <a
                      href={track.trackUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary transition hover:text-primary/80"
                    >
                      <FaSpotify className="h-4 w-4" />
                      Listen on Spotify
                    </a>
                  )}

                  <div className="flex gap-3">
                    <Link
                      href={`/music/${track.slug}`}
                      className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-xs font-medium text-slate-700 transition hover:border-primary hover:text-primary"
                    >
                      View details
                    </Link>
                    {track.embedUrl && (
                      <button
                        type="button"
                        onClick={() => setPreviewUrl(track.embedUrl ?? null)}
                        className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-xs font-medium text-slate-700 transition hover:border-primary hover:text-primary"
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
      </div>

      {previewUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 px-4 backdrop-blur-sm"
          onClick={() => setPreviewUrl(null)}
        >
          <div
            className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-base font-semibold text-slate-900">Preview track</h3>
              <button
                type="button"
                onClick={() => setPreviewUrl(null)}
                className="text-sm text-slate-500 transition hover:text-slate-900"
              >
                Close
              </button>
            </div>
            <div className="overflow-hidden rounded-lg border border-border">
              <div dangerouslySetInnerHTML={{ __html: previewUrl }} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
