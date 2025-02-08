// components/PickYourGenre.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaPlay, FaHeadphones } from 'react-icons/fa';
import { genres, Genre } from '@/data/genres';

const PickYourGenre: React.FC = () => {
  return ( 
    <section className="py-24 bg-gradient-to-b from-indigo-900 via-purple-900 to-blue-900 relative">
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 via-transparent to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 font-gaming">
            Pick Your Genre
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Discover our carefully curated collection of gaming music across different genres.
            Find the perfect soundtrack for your content.
          </p>
        </div>

        {/* Genre Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {genres.map((genre: Genre) => (
            <div
              key={genre.name}
              className="group relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300"
            >
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />
              
              {/* Background Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={genre.image}
                  alt={`${genre.name} Genre Image`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  priority={false}
                />
              </div>

              {/* Content */}
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {genre.name}
                </h3>
                
                {/* Action Buttons */}
                <div className="flex gap-3 mt-4">
                  <Link
                    href={genre.spotifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-green-500/90 hover:bg-green-500 text-white rounded-lg transition-colors duration-300"
                  >
                    <FaPlay className="w-4 h-4" />
                    <span className="font-medium">Listen</span>
                  </Link>
                  <Link
                    href={`/music?genre=${genre.name.toLowerCase()}`}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700/90 hover:bg-gray-700 text-white rounded-lg transition-colors duration-300"
                  >
                    <FaHeadphones className="w-4 h-4" />
                    <span className="font-medium">Explore</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            href="/music"
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Music
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
          <p className="mt-4 text-gray-400 text-sm">
            Can&apos;t find what you&apos;re looking for?{' '}
            <Link href="/contact" className="text-blue-400 hover:text-blue-300 transition-colors">
              Contact us
            </Link>
            {' '}for custom requests.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PickYourGenre;