// components/PickYourGenre.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { genres, Genre } from '@/data/genres';

const PickYourGenre: React.FC = () => {
  return (
    <section className="py-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12 font-gaming">
          Pick Your Genre
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {genres.map((genre: Genre) => (
            <div
              key={genre.name}
              className="flex flex-col items-center bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <Image
                src={genre.image}
                alt={`${genre.name} Genre Image`}
                width={200}
                height={200}
                className="object-cover w-full h-48"
                priority={false}
              />
              <div className="p-4 flex flex-col items-center">
                <h3 className="text-xl font-semibold text-white mb-2">{genre.name}</h3>
                <Link href={genre.spotifyLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-block px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-300 font-medium"
                  >
                    Listen on Spotify
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PickYourGenre;