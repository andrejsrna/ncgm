// components/PickYourGenre.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { genres, Genre } from '@/data/genres';

const PickYourGenre: React.FC = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-4 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Explore by genre</h2>
          <p className="text-sm text-slate-600 sm:text-base">
            Browse curated playlists spanning electronic, hip hop, lofi, and cinematic styles.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {genres.map((genre: Genre) => (
            <article
              key={genre.name}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition hover:shadow-md"
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
                  <h3 className="text-lg font-semibold text-slate-900">{genre.name}</h3>
                  <p className="mt-1 text-sm text-slate-600">{genre.description}</p>
                </div>

                <div className="mt-auto flex flex-wrap gap-3 text-sm font-medium text-primary">
                  <Link
                    href={genre.spotifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-slate-600 transition hover:border-primary hover:text-primary"
                  >
                    Listen
                  </Link>
                  <Link
                    href={`/music?genre=${encodeURIComponent(genre.name.toLowerCase())}`}
                    className="inline-flex items-center gap-2 rounded-md bg-primary/10 px-3 py-2 text-primary transition hover:bg-primary/20"
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
