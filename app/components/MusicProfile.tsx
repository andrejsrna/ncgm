// components/MusicProfiles.tsx
'use client';

import Image from 'next/image';
import React from 'react';
import { FaAmazon, FaApple, FaDeezer, FaPlay, FaSpotify, FaYoutube } from 'react-icons/fa';

interface MusicServiceBase {
  name: string;
  url: string;
  color: string;
  hoverColor: string;
  description: string;
  listeners?: string;
}

interface MusicServiceWithIconComponent extends MusicServiceBase {
  icon: React.ReactNode;
  isCustomIcon: false;
}

interface MusicServiceWithCustomIcon extends MusicServiceBase {
  icon: string;
  isCustomIcon: true;
}

type MusicService = MusicServiceWithIconComponent | MusicServiceWithCustomIcon;

export const musicServices: MusicService[] = [
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/artist/702mas8Kyj9BGvD6dZGML8?si=uZ9C0L8pQC2sxBD90DhA0Q',
    color: '#1DB954',
    hoverColor: '#1ed760',
    icon: <FaSpotify />,
    isCustomIcon: false,
    description: 'Stream our music on Spotify',
    listeners: '10K+ monthly listeners'
  },
  {
    name: 'Apple Music',
    url: 'https://music.apple.com/sk/artist/no-copyright-gaming-music/1699748922',
    color: '#FA2C5A',
    hoverColor: '#ff375f',
    icon: <FaApple />,
    isCustomIcon: false,
    description: 'Listen on Apple Music',
    listeners: 'Featured Artist'
  },
  {
    name: 'Amazon Music',
    url: 'https://www.amazon.com/music/player/artists/B0CD2BDVWG/no-copyright-gaming-music',
    color: '#FF9900',
    hoverColor: '#ffaa22',
    icon: <FaAmazon />,
    isCustomIcon: false,
    description: 'Available on Amazon Music',
    listeners: 'Prime Music Included'
  },
  {
    name: 'YouTube Music',
    url: 'https://music.youtube.com/channel/UC6FzeY54doTLkzPJYaapmnQ?si=Xfoi99V6BLEr6-x_',
    color: '#FF0000',
    hoverColor: '#ff1a1a',
    icon: <FaYoutube />,
    isCustomIcon: false,
    description: 'Subscribe on YouTube Music',
    listeners: '50K+ subscribers'
  },
  {
    name: 'Deezer',
    url: 'https://www.deezer.com/en/artist/223452715',
    color: '#00C300',
    hoverColor: '#00d600',
    icon: <FaDeezer />,
    isCustomIcon: false,
    description: 'Find us on Deezer',
    listeners: 'Trending Artist'
  },
  {
    name: 'Tidal',
    url: 'https://tidal.com/browse/artist/41512847?u',
    color: '#00BFFF',
    hoverColor: '#33ccff',
    icon: '/icons/tidal.svg',
    isCustomIcon: true,
    description: 'High Fidelity on TIDAL',
    listeners: 'HiFi Quality'
  }
];

const MusicProfiles: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Listen Everywhere</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find our music on all major streaming platforms. Choose your preferred service and start listening today.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {musicServices.map((service, index) => (
            <a
              key={index}
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900
                         hover:from-gray-700 hover:to-gray-800 transition-all duration-300 p-6
                         transform hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black"
              style={{
                boxShadow: `0 0 15px ${service.color}30, 0 0 30px ${service.color}20`,
                '--tw-ring-color': service.color,
              } as React.CSSProperties}
            >
              <div className="absolute top-0 left-0 w-3 h-3 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                   style={{ backgroundColor: service.color }} />

              <div className="flex items-center space-x-4 relative z-10">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors duration-300"
                       style={{ boxShadow: `0 0 10px ${service.color}40` }}>
                    {service.isCustomIcon ? (
                        <Image
                          src={service.icon}
                          alt={`${service.name} Logo`}
                          width={28}
                          height={28}
                          className="opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                        />
                    ) : (
                        <span className="text-3xl opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                              style={{ color: service.color }}>
                          {service.icon}
                        </span>
                    )}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-white/95 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-2 group-hover:text-gray-200 transition-colors">
                    {service.description}
                  </p>
                  {service.listeners && (
                    <p className="text-sm font-semibold" style={{ color: service.color }}>
                      {service.listeners}
                    </p>
                  )}
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                  <FaPlay className="text-white/70" size={18} />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            Don&apos;t see your preferred platform? Check our{' '}
            <a href="/help" className="text-blue-400 hover:text-blue-300 transition-colors">
              help center
            </a>
            {' '}for more options.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MusicProfiles;
