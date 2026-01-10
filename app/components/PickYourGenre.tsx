// components/PickYourGenre.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { genres, Genre } from '@/data/genres';

const PickYourGenre: React.FC = () => {
  return (
    <section className="bg-transparent py-20 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-4 text-center">
          <h2 className="text-3xl font-semibold text-white">Explore by genre</h2>
          <p className="text-sm text-slate-300 sm:text-base">
            Browse curated playlists spanning electronic, hip hop, lofi, and cinematic styles.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {genres.map((genre: Genre) => (
            <article
              key={genre.name}
              className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-soft backdrop-blur transition hover:border-cyan-300/40 hover:bg-white/10"
            >
              <div className="relative h-44 w-full">
                <Image
                  src={genre.image}
                  alt={`${genre.name} genre cover`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>

              <div className="flex flex-1 flex-col gap-4 p-5">
                <div>
                  <h3 className="text-lg font-semibold text-white">{genre.name}</h3>
                  {genre.description && (
                    <p className="mt-1 text-sm text-slate-300">{genre.description}</p>
                  )}
                </div>

                <div className="mt-auto flex flex-wrap gap-3 text-sm font-medium text-slate-200">
                  <Link
                    href={genre.spotifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/0 px-3 py-2 text-slate-200 backdrop-blur transition hover:bg-white/5"
                  >
                    Listen
                  </Link>
                  <Link
                    href={`/music?genre=${encodeURIComponent(genre.name.toLowerCase())}`}
                    className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-3 py-2 text-slate-950 transition hover:opacity-90"
                  >
                    Browse tracks
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PickYourGenre;
