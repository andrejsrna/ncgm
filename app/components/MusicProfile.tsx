'use client';

import { FaAmazon, FaApple, FaDeezer, FaSpotify, FaYoutube } from 'react-icons/fa';
import { SiTidal } from 'react-icons/si';

const musicServices = [
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/artist/702mas8Kyj9BGvD6dZGML8?si=uZ9C0L8pQC2sxBD90DhA0Q',
    icon: <FaSpotify className="h-5 w-5 text-emerald-500" />,
    description: 'Stream the full catalogue on Spotify.',
  },
  {
    name: 'Apple Music',
    url: 'https://music.apple.com/sk/artist/no-copyright-gaming-music/1699748922',
    icon: <FaApple className="h-5 w-5 text-slate-200" />,
    description: 'Access releases on Apple Music.',
  },
  {
    name: 'Amazon Music',
    url: 'https://www.amazon.com/music/player/artists/B0CD2BDVWG/no-copyright-gaming-music',
    icon: <FaAmazon className="h-5 w-5 text-amber-500" />,
    description: 'Available for Amazon Music listeners.',
  },
  {
    name: 'YouTube Music',
    url: 'https://music.youtube.com/channel/UC6FzeY54doTLkzPJYaapmnQ?si=Xfoi99V6BLEr6-x_',
    icon: <FaYoutube className="h-5 w-5 text-rose-600" />,
    description: 'Subscribe on YouTube Music.',
  },
  {
    name: 'Deezer',
    url: 'https://www.deezer.com/en/artist/223452715',
    icon: <FaDeezer className="h-5 w-5 text-emerald-500" />,
    description: 'Find the label on Deezer.',
  },
  {
    name: 'Tidal',
    url: 'https://tidal.com/browse/artist/41512847?u',
    icon: <SiTidal className="h-5 w-5 text-sky-500" />,
    description: 'Stream in high fidelity on Tidal.',
  },
];

export default function MusicProfile() {
  return (
    <section className="bg-transparent py-20 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-4 text-center">
          <h2 className="text-3xl font-semibold text-white">Listen on your platform</h2>
          <p className="text-sm text-slate-300 sm:text-base">
            The No Copyright Gaming Music catalogue is available wherever you publish or discover music.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {musicServices.map((service) => (
            <a
              key={service.name}
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-soft backdrop-blur transition hover:border-cyan-300/40 hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cyan-200 shadow-soft backdrop-blur">
                {service.icon}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">{service.name}</h3>
                <p className="mt-1 text-xs text-slate-300">{service.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
