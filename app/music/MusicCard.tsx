'use client';

import Link from "next/link";
import { MusicData } from "@/app/hooks/useMusicQuery";
import Image from "next/image";
import { FaSpotify, FaApple, FaYoutube, FaAmazon } from 'react-icons/fa';
import { resolveStrapiImageUrl } from "@/lib/utils";

interface MusicCardProps {
  track: MusicData;
}

export default function MusicCard({ track }: MusicCardProps) {
  const imageUrl = resolveStrapiImageUrl(track?.Cover)
  return (
    <div className="group relative h-full">
      {/* Glowing border effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 group-hover:opacity-100 blur transition duration-500 animate-pulse-slow"></div>
      
      {/* Main card */}
      <div className="relative bg-black border border-red-900/30 overflow-hidden h-full flex flex-col">
        {/* Cover Image with Effects */}
        {imageUrl && (
          <div className="relative h-72 w-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black z-10" />
            <Image
              src={imageUrl}
              alt={track.Title || 'Music cover'}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:saturate-150"
            />
            {/* Scanline effect */}
            <div className="absolute inset-0 bg-scanline opacity-10 pointer-events-none" />
          </div>
        )}
        
        {/* Content */}
        <div className="relative flex-1 flex flex-col p-6 bg-gradient-to-t from-black via-black/95 to-transparent">
          <Link href={`/music/${track.slug}`} className="block group/title">
            <h2 className="text-xl font-mono font-bold text-red-500 mb-3 tracking-wider group-hover/title:text-red-400 transition-colors duration-300 line-clamp-2">
              <span className="relative">
                <span className="absolute -inset-0.5 text-red-600 opacity-80 blur-[1px]">{track.Title}</span>
                {track.Title}
              </span>
            </h2>
          </Link>

          {track.Content && (
            <p className="text-red-200/70 mb-4 font-light tracking-wide line-clamp-2 text-sm">{track.Content}</p>
          )}

          {track.genre && (
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-sm text-red-400 border border-red-800/50 bg-red-950/30 rounded-sm">
                {track.genre.Genres}
              </span>
            </div>
          )}
          
          {/* Push streaming links to bottom */}
          <div className="mt-auto space-y-3">
            <h3 className="text-red-300 font-medium font-mono tracking-wider text-sm">Access Points:</h3>
            <div className="grid grid-cols-2 gap-3">
              {track.Spotify && (
                <a href={track.Spotify} target="_blank" rel="noopener noreferrer" 
                   className="flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors duration-300">
                  <FaSpotify className="w-4 h-4" />
                  <span className="font-mono text-sm">Spotify</span>
                </a>
              )}
              {track.AppleMusic && (
                <a href={track.AppleMusic} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors duration-300">
                  <FaApple className="w-4 h-4" />
                  <span className="font-mono text-sm">Apple Music</span>
                </a>
              )}
              {track.YouTubeMusic && (
                <a href={track.YouTubeMusic} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors duration-300">
                  <FaYoutube className="w-4 h-4" />
                  <span className="font-mono text-sm">YouTube</span>
                </a>
              )}
              {track.Amazon && (
                <a href={track.Amazon} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300">
                  <FaAmazon className="w-4 h-4" />
                  <span className="font-mono text-sm">Amazon</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 