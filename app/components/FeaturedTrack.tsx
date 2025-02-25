// app/components/FeaturedTrack.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaPlay, FaSpotify, FaArrowRight, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { SiBeatport } from 'react-icons/si';
import { useClientMusic } from '@/app/hooks/useClientMusic';
import Image from 'next/image';

interface PreviewModalProps {
  embedUrl: string;
  onClose: () => void;
  title: string;
}

const PreviewModal: React.FC<PreviewModalProps> = ({ embedUrl, onClose, title }) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-2xl w-full max-w-2xl relative">
        <div className="p-4 border-b border-gray-700 flex justify-between items-center">
          <h3 className="text-white font-semibold">{title}</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>
        <div className="p-4">
          <div dangerouslySetInnerHTML={{ __html: embedUrl }} />
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
      <section className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-block p-3 rounded-full bg-blue-500/10 mb-4">
              <FaPlay className="w-6 h-6 text-blue-400 animate-pulse" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Featured Music</h2>
            <p className="text-gray-400">Loading amazing tracks for you...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Music</h2>
          <p className="text-red-400">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block p-3 rounded-full bg-blue-500/10 mb-4">
            <FaPlay className="w-6 h-6 text-blue-400" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Featured Music</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Check out our latest and most popular tracks. Perfect for your gaming content.
          </p>
        </div>

        {/* Track Grid */}
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {featuredTracks.map((track, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 rounded-2xl overflow-hidden group relative backdrop-blur-sm border border-gray-700/50"
            >
              <div className="relative">
                <div className="aspect-w-16 aspect-h-9 relative">
                  <Image
                    src={track.imageUrl}
                    alt={track.title}
                    width={500}
                    height={400}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent opacity-60" />
                </div>

                {/* Preview Button */}
                <button
                  onClick={() => setPreviewTrack({ title: track.title, embedUrl: track.embedUrl })}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/20"
                >
                  <FaPlay className="w-4 h-4 text-white" />
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{track.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{track.genre}</p>

                <div className="flex flex-col gap-3">
                  {/* Spotify Button */}
                  <a
                    href={track.trackUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center text-sm font-medium text-white bg-green-500/20 hover:bg-green-500/30 rounded-xl py-3 px-4 transition-all duration-300 group/spotify"
                  >
                    <FaSpotify className="mr-2 text-lg text-green-400 group-hover/spotify:scale-110 transition-transform" />
                    Listen on Spotify
                  </a>

                  {/* Beatport Button */}
                  <a
                    href={track.beatportUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center text-sm font-medium text-white bg-[#02FF77]/10 hover:bg-[#02FF77]/20 rounded-xl py-3 px-4 transition-all duration-300 group/beatport"
                  >
                    <SiBeatport className="mr-2 text-lg text-[#02FF77] group-hover/beatport:scale-110 transition-transform" />
                    Download on Beatport
                  </a>

                  {/* More Info Button */}
                  <Link 
                    href={`/music/${track.slug}`}
                    className="inline-flex items-center justify-center px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 group/more"
                  >
                    <FaExternalLinkAlt className="mr-2 group-hover/more:rotate-45 transition-transform duration-300" />
                    Show more
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
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            Discover More Tracks
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="mt-4 text-gray-400 text-sm">
            Browse our complete collection of copyright-free gaming music
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