// components/MusicProfiles.tsx
'use client';

import React from 'react';
import { FaSpotify, FaApple, FaAmazon, FaYoutube, FaDeezer } from 'react-icons/fa';
import Image from 'next/image';

interface MusicService {
  name: string;
  url: string;
  color: string;
  icon: React.ReactNode;
  isCustomIcon?: boolean; // Flag to identify custom SVG icons
}

const musicServices: MusicService[] = [
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/artist/702mas8Kyj9BGvD6dZGML8?si=uZ9C0L8pQC2sxBD90DhA0Q',
    color: '#1DB954', // Spotify Green
    icon: <FaSpotify />,
  },
  {
    name: 'Apple Music',
    url: 'https://music.apple.com/sk/artist/no-copyright-gaming-music/1699748922',
    color: '#FA2C5A', // Apple Music Pink
    icon: <FaApple />,
  },
  {
    name: 'Amazon Music',
    url: 'https://www.amazon.com/music/player/artists/B0CD2BDVWG/no-copyright-gaming-music',
    color: '#FF9900', // Amazon Orange
    icon: <FaAmazon />,
  },
  {
    name: 'YouTube Music',
    url: 'https://music.youtube.com/channel/UC6FzeY54doTLkzPJYaapmnQ?si=Xfoi99V6BLEr6-x_',
    color: '#FF0000', // YouTube Red
    icon: <FaYoutube />,
  },
  {
    name: 'Deezer',
    url: 'https://www.deezer.com/en/artist/223452715',
    color: '#00C300', // Deezer Green
    icon: <FaDeezer />,
  },
  {
    name: 'Tidal',
    url: 'https://tidal.com/browse/artist/41512847?u',
    color: '#00BFFF', // Tidal Blue
    icon: '/icons/tidal.svg', // Path to the custom SVG
    isCustomIcon: true, // Indicates that this uses a custom SVG
  },
];

export default function MusicProfiles() {
  return (
    <section id="services" className="py-12 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Music Profiles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {musicServices.map((service, index) => (
            <a
              key={index}
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              style={{ borderLeft: `4px solid ${service.color}` }}
            >
              {/* Icon */}
              {service.isCustomIcon ? (
                <Image
                  src={service.icon}
                  alt={`${service.name} Logo`}
                  width={32}
                  height={32}
                  className="mr-4"
                />
              ) : (
                <span className="text-2xl mr-4" style={{ color: service.color }}>
                  {service.icon}
                </span>
              )}
              {/* Service Name */}
              <span className="text-lg font-semibold" style={{ color: service.color }}>
                {service.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}