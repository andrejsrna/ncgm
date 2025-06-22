// components/PickYourGenre.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaPlay } from 'react-icons/fa';
import { FiHeadphones, FiArrowRight } from 'react-icons/fi';
import { genres, Genre } from '@/data/genres';

const PickYourGenre: React.FC = () => {
  return ( 
    <section className="py-24 bg-black relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-noise opacity-[0.15]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent"></div>
      
      {/* Halftone Pattern */}
      <div 
        className="absolute inset-0 mix-blend-soft-light opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(185, 28, 28, 0.9) 2px, transparent 2px),
            radial-gradient(circle at 0% 0%, rgba(185, 28, 28, 0.9) 2px, transparent 2px)
          `,
          backgroundSize: '24px 24px, 24px 24px',
          backgroundPosition: '0 0, 12px 12px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block p-3 rounded-full bg-red-900/20 mb-4">
            <FiHeadphones className="w-6 h-6 text-red-500" />
          </div>
          <h2 
            className="text-5xl font-bold text-white mb-6 tracking-tight"
            style={{ 
              textShadow: '2px 2px 0px rgba(185, 28, 28, 0.3)'
            }}
          >
            Choose Your Frequency
          </h2>
          <p className="text-lg text-red-200/70 max-w-2xl mx-auto font-light tracking-wide">
            Navigate through the sonic dimensions. Each genre a different layer of the digital underground.
          </p>
        </div>

        {/* Genre Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {genres.map((genre: Genre) => (
            <div
              key={genre.name}
              className="group relative"
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-900 to-red-800 opacity-0 group-hover:opacity-75 blur transition duration-500"></div>
              
              {/* Card Content */}
              <div className="relative bg-black border border-red-900/30 group-hover:border-red-800/50 transition-colors duration-500 overflow-hidden">
                {/* Background Image */}
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={genre.image}
                    alt={`${genre.name} Genre Image`}
                    fill
                    className="object-cover brightness-75 saturate-50 group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    priority={false}
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  
                  {/* Halftone Pattern */}
                  <div className="absolute inset-0 mix-blend-soft-light opacity-30"
                       style={{
                         backgroundImage: `radial-gradient(circle at 30% 107%, rgba(185, 28, 28, 0.8) 1px, transparent 1px)`,
                         backgroundSize: '3px 3px'
                       }} />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-medium text-red-300 group-hover:text-red-200 transition-colors duration-300 mb-2">
                    {genre.name}
                  </h3>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-4">
                    {/* Listen Button */}
                    <Link
                      href={genre.spotifyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative block flex-1"
                    >
                      <div className="absolute -inset-0.5 bg-green-900/50 opacity-0 group-hover/btn:opacity-100 blur transition duration-300"></div>
                      <div className="relative flex items-center justify-center py-2 px-4 bg-black border border-green-800/30 group-hover/btn:border-green-700/50 transition-colors duration-300">
                        <FaPlay className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm font-medium text-green-400">Listen</span>
                      </div>
                    </Link>

                    {/* Explore Button */}
                    <Link
                      href={`/music?genre=${genre.name.toLowerCase()}`}
                      className="group/btn relative block flex-1"
                    >
                      <div className="absolute -inset-0.5 bg-red-900/50 opacity-0 group-hover/btn:opacity-100 blur transition duration-300"></div>
                      <div className="relative flex items-center justify-center py-2 px-4 bg-black border border-red-800/30 group-hover/btn:border-red-700/50 transition-colors duration-300">
                        <FiHeadphones className="w-4 h-4 text-red-500 mr-2" />
                        <span className="text-sm font-medium text-red-400">Explore</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            href="/music"
            className="group relative inline-block"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-red-800 to-red-600 opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
            <div className="relative flex items-center gap-2 px-8 py-4 bg-black border border-red-800/50 group-hover:border-red-600/50 transition-colors duration-500">
              <span className="text-red-400 font-medium tracking-wide">Access Full Archive</span>
              <FiArrowRight className="text-red-500 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </Link>
          <p className="mt-6 text-red-300/60 text-sm font-light tracking-wider">
            Need something specific?{' '}
            <Link href="/contact" className="text-red-400 hover:text-red-300 transition-colors underline decoration-red-800/50 hover:decoration-red-700/50">
              Contact us
            </Link>
            {' '}for custom soundscapes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PickYourGenre;