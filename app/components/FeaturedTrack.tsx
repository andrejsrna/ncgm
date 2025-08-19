// app/components/FeaturedTrack.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaPlay, FaSpotify, FaArrowRight, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { SiBeatport } from 'react-icons/si';
import { useClientMusic } from '@/app/hooks/useClientMusic';
import Image from 'next/image';
import { FiHeadphones } from 'react-icons/fi';

interface PreviewModalProps {
  embedUrl: string;
  onClose: () => void;
  title: string;
}

const PreviewModal: React.FC<PreviewModalProps> = ({ embedUrl, onClose, title }) => {
  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative bg-black/80 w-full max-w-2xl border border-red-800/30">
        {/* Modal noise texture */}
        <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none"></div>
        
        <div className="relative">
          <div className="p-4 border-b border-red-900/30 flex justify-between items-center">
            <h3 className="text-red-400 font-medium tracking-wide">{title}</h3>
            <button 
              onClick={onClose}
              className="text-red-500 hover:text-red-400 transition-colors"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>
          <div className="p-4">
            <div dangerouslySetInnerHTML={{ __html: embedUrl }} />
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedTrack: React.FC = () => {
  const { tracks: featuredTracks, loading, error } = useClientMusic(3);
  const [previewTrack, setPreviewTrack] = useState<{title: string, embedUrl: string} | null>(null);

  if (loading) {
    return (
      <section className="py-24 bg-black relative">
        <div className="absolute inset-0 bg-noise opacity-[0.15]"></div>
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="text-center">
            <div className="inline-block p-3 rounded-full bg-red-900/20 mb-4">
              <FiHeadphones className="w-6 h-6 text-red-500 animate-pulse" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Featured Tracks</h2>
            <p className="text-red-200/70">Scanning the frequencies...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-24 bg-black relative">
        <div className="absolute inset-0 bg-noise opacity-[0.15]"></div>
        <div className="max-w-6xl mx-auto px-4 relative text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Tracks</h2>
          <p className="text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-black relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-noise opacity-[0.15]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block p-3 rounded-full bg-red-900/20 mb-4">
            <FiHeadphones className="w-6 h-6 text-red-500" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight"
              style={{ 
                textShadow: '2px 2px 0px rgba(185, 28, 28, 0.3)'
              }}>
            Featured Tracks
          </h2>
          <p className="text-red-200/70 max-w-2xl mx-auto font-light tracking-wide">
            Your gateway to the sonic underground. Premium tracks for your digital realm.
          </p>
        </div>

        {/* Track Grid */}
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {featuredTracks.map((track, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Card Background Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-900 to-red-800 opacity-0 group-hover:opacity-75 blur transition duration-500"></div>
              
              {/* Card Content */}
              <div className="relative bg-black border border-red-900/30 group-hover:border-red-800/50 transition-colors duration-500">
                <div className="relative">
                  <div className="relative" style={{ aspectRatio: '16 / 9' }}>
                    <Image
                      src={track.imageUrl}
                      alt={track.title}
                      width={500}
                      height={400}
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover brightness-75 saturate-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-80" />
                    
                    {/* Halftone Pattern */}
                    <div className="absolute inset-0 mix-blend-soft-light opacity-30"
                         style={{
                           backgroundImage: `radial-gradient(circle at 30% 107%, rgba(185, 28, 28, 0.8) 1px, transparent 1px)`,
                           backgroundSize: '3px 3px'
                         }} />
                  </div>

                  {/* Preview Button */}
                  <button
                    onClick={() => setPreviewTrack({ title: track.title, embedUrl: track.embedUrl })}
                    className="absolute top-4 right-4 group/play"
                  >
                    <div className="relative">
                      <div className="absolute -inset-2 bg-red-900/50 rounded-full blur-sm opacity-0 group-hover/play:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-red-800/50 flex items-center justify-center">
                        <FaPlay className="w-4 h-4 text-red-500 group-hover/play:text-red-400 transition-colors duration-300" />
                      </div>
                    </div>
                  </button>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-red-300 group-hover:text-red-200 transition-colors duration-300">{track.title}</h3>
                    <p className="text-red-500/80 text-sm font-mono mt-1">{track.genre}</p>
                  </div>

                  <div className="space-y-3">
                    {/* Spotify Button */}
                    <a
                      href={track.trackUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative block"
                    >
                      <div className="absolute -inset-0.5 bg-green-900/50 opacity-0 group-hover/btn:opacity-100 blur transition duration-300"></div>
                      <div className="relative flex items-center justify-center py-2 px-4 bg-black border border-green-800/30 group-hover/btn:border-green-700/50 transition-colors duration-300">
                        <FaSpotify className="mr-2 text-lg text-green-500" />
                        <span className="text-sm font-medium text-green-400">Listen on Spotify</span>
                      </div>
                    </a>

                    {/* Beatport Button */}
                    <a
                      href={track.beatportUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative block transform hover:scale-105 transition-all duration-300"
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#02FF77]/40 to-[#02FF77]/60 opacity-80 group-hover/btn:opacity-100 blur transition duration-500 animate-pulse-slow"></div>
                      <div className="relative flex items-center justify-center py-3 px-6 bg-black border-2 border-[#02FF77]/50 group-hover/btn:border-[#02FF77]/70 transition-all duration-300">
                        <SiBeatport className="mr-3 text-xl text-[#02FF77]" />
                        <span className="text-base font-semibold text-[#02FF77] tracking-wider">Download on Beatport</span>
                        <div className="absolute top-2 right-2 w-2 h-2 bg-[#02FF77] rounded-full animate-pulse"></div>
                      </div>
                    </a>

                    {/* More Info Button */}
                    <Link 
                      href={`/music/${track.slug}`}
                      className="group/btn relative block"
                    >
                      <div className="absolute -inset-0.5 bg-red-900/50 opacity-0 group-hover/btn:opacity-100 blur transition duration-300"></div>
                      <div className="relative flex items-center justify-center py-2 px-4 bg-black border border-red-800/30 group-hover/btn:border-red-700/50 transition-colors duration-300">
                        <FaExternalLinkAlt className="mr-2 text-red-500 group-hover/btn:rotate-45 transition-transform duration-300" />
                        <span className="text-sm font-medium text-red-400">View Details</span>
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
              <span className="text-red-400 font-medium tracking-wide">Explore the Archive</span>
              <FaArrowRight className="text-red-500 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </Link>
          <p className="mt-6 text-red-300/60 text-sm font-light tracking-wider">
            Dive deeper into our collection of dystopian soundscapes
          </p>
        </div>
      </div>

      {/* Preview Modal */}
      {previewTrack && (
        <PreviewModal
          title={previewTrack.title}
          embedUrl={previewTrack.embedUrl}
          onClose={() => setPreviewTrack(null)}
        />
      )}
    </section>
  );
};

export default FeaturedTrack;