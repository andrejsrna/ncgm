// components/MusicProfiles.tsx
'use client';

import Image from 'next/image';
import React from 'react';
import { FaAmazon, FaApple, FaDeezer, FaPlay, FaSpotify, FaYoutube } from 'react-icons/fa';
import { FiHeadphones } from 'react-icons/fi';

interface MusicServiceBase {
  name: string;
  url: string;
  color: string;
  hoverColor: string;
  description: string;
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
    description: 'Stream our music on Spotify'
  },
  {
    name: 'Apple Music',
    url: 'https://music.apple.com/sk/artist/no-copyright-gaming-music/1699748922',
    color: '#FA2C5A',
    hoverColor: '#ff375f',
    icon: <FaApple />,
    isCustomIcon: false,
    description: 'Listen on Apple Music'
  },
  {
    name: 'Amazon Music',
    url: 'https://www.amazon.com/music/player/artists/B0CD2BDVWG/no-copyright-gaming-music',
    color: '#FF9900',
    hoverColor: '#ffaa22',
    icon: <FaAmazon />,
    isCustomIcon: false,
    description: 'Available on Amazon Music'
  },
  {
    name: 'YouTube Music',
    url: 'https://music.youtube.com/channel/UC6FzeY54doTLkzPJYaapmnQ?si=Xfoi99V6BLEr6-x_',
    color: '#FF0000',
    hoverColor: '#ff1a1a',
    icon: <FaYoutube />,
    isCustomIcon: false,
    description: 'Subscribe on YouTube Music'
  },
  {
    name: 'Deezer',
    url: 'https://www.deezer.com/en/artist/223452715',
    color: '#00C300',
    hoverColor: '#00d600',
    icon: <FaDeezer />,
    isCustomIcon: false,
    description: 'Find us on Deezer'
  },
  {
    name: 'Tidal',
    url: 'https://tidal.com/browse/artist/41512847?u',
    color: '#00BFFF',
    hoverColor: '#33ccff',
    icon: '/icons/tidal.svg',
    isCustomIcon: true,
    description: 'High Fidelity on TIDAL'
  }
];

const MusicProfiles: React.FC = () => {
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

      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-block p-3 rounded-full bg-red-900/20 mb-4">
            <FiHeadphones className="w-6 h-6 text-red-500" />
          </div>
          <h2 
            className="text-4xl font-bold text-white mb-4 tracking-tight"
            style={{ 
              textShadow: '2px 2px 0px rgba(185, 28, 28, 0.3)'
            }}
          >
            Access All Frequencies
          </h2>
          <p className="text-lg text-red-200/70 max-w-2xl mx-auto font-light tracking-wide">
            Tune in to your preferred digital wavelength. Our signal reaches every corner of the sonic grid.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {musicServices.map((service, index) => (
            <a
              key={index}
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              {/* Card Glow Effect */}
              <div 
                className="absolute -inset-0.5 opacity-0 group-hover:opacity-100 blur transition duration-300"
                style={{
                  background: `linear-gradient(to right, ${service.color}, ${service.hoverColor})`
                }}
              />
              
              {/* Card Content */}
              <div className="relative bg-black border border-red-900/30 group-hover:border-opacity-0 transition-colors duration-300">
                <div className="p-6 relative">
                  {/* Service Icon */}
                  <div className="flex items-center space-x-4">
                    <div 
                      className="w-12 h-12 rounded flex items-center justify-center bg-black/20"
                      style={{ 
                        boxShadow: `0 0 20px ${service.color}20`
                      }}
                    >
                      {service.isCustomIcon ? (
                        <Image
                          src={service.icon}
                          alt={`${service.name} Logo`}
                          width={28}
                          height={28}
                          className="opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      ) : (
                        <span 
                          className="text-3xl transition-colors duration-300"
                          style={{ 
                            color: service.color,
                          }}
                        >
                          {service.icon}
                        </span>
                      )}
                    </div>

                    <div className="flex-1">
                      <h3 
                        className="text-xl font-medium mb-1 transition-colors duration-300"
                        style={{ color: service.color }}
                      >
                        {service.name}
                      </h3>
                      <p className="text-red-200/70 text-sm font-light">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Play Icon */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <FaPlay 
                      className="transition-colors duration-300"
                      style={{ color: service.color }}
                      size={18} 
                    />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-red-300/60 text-sm font-light tracking-wider">
            Can&apos;t find your platform?{' '}
            <a 
              href="/help" 
              className="text-red-400 hover:text-red-300 transition-colors underline decoration-red-800/50 hover:decoration-red-700/50"
            >
              Check our help center
            </a>
            {' '}for more options.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MusicProfiles;
