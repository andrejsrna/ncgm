'use client';

import Image from "next/image";
import { MusicData } from "@/app/hooks/useMusicQuery";
import Link from "next/link";

interface MusicCardProps {
  track: MusicData;
}

export default function MusicCard({ track }: MusicCardProps) {
  return (
    <div 
      className="bg-gray-800 rounded-lg overflow-hidden shadow-xl"
    >
      {track.Cover && (
        <div className="relative h-96 w-full">
          <Image
            src={`${track.Cover.formats.large.url}`}
            alt={track.Title || 'Music cover'}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <Link href={`/music/${track.slug}`}>
          <h2 className="text-xl font-semibold text-white mb-2 hover:text-blue-400">
            {track.Title}
          </h2>
        </Link>
        {track.Description && (
          <p className="text-gray-400 mb-4">{track.Description}</p>
        )}
        {track.genre && (
          <p className="text-sm text-gray-500 mb-4">Genre: {track.genre.Genres}</p>
        )}
        
        <div className="space-y-2">
          <h3 className="text-white font-medium mb-2">Listen on:</h3>
          <div className="grid grid-cols-2 gap-2">
            {track.Spotify && (
              <a href={track.Spotify} target="_blank" rel="noopener noreferrer" 
                 className="text-green-400 hover:text-green-300">Spotify</a>
            )}
            {track.AppleMusic && (
              <a href={track.AppleMusic} target="_blank" rel="noopener noreferrer"
                 className="text-pink-400 hover:text-pink-300">Apple Music</a>
            )}
            {track.YouTubeMusic && (
              <a href={track.YouTubeMusic} target="_blank" rel="noopener noreferrer"
                 className="text-red-400 hover:text-red-300">YouTube Music</a>
            )}
            {track.Amazon && (
              <a href={track.Amazon} target="_blank" rel="noopener noreferrer"
                 className="text-blue-400 hover:text-blue-300">Amazon Music</a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 