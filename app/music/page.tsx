'use client';

import { useMusicQuery } from "@/app/hooks/useMusicQuery";
import Footer from "@/components/footer";
import Image from "next/image";

export default function MusicPage() {
  const { music, isLoading, error } = useMusicQuery();

  if (isLoading) return <div className="text-center p-8">Loading...</div>;
  if (error) return <div className="text-center p-8 text-red-500">Error: {error.message}</div>;

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Our Music</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {music.map((track) => (
            <div 
              key={track.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-xl"
            >
              {track.attributes?.cover?.data?.attributes?.url ? (
                <div className="relative h-48 w-full">
                  <Image
                    src={track.attributes.cover.data.attributes.url}
                    alt={track.attributes.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="h-48 w-full bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-500">No cover image</span>
                </div>
              )}
              
              <div className="p-6">
                <h2 className="text-xl font-semibold text-white mb-2">{track.attributes.title}</h2>
                <p className="text-gray-400 mb-4">{track.attributes.description}</p>
                <p className="text-sm text-gray-500 mb-4">Genre: {track.attributes.genre}</p>
                
                <div className="space-y-2">
                  <h3 className="text-white font-medium mb-2">Listen on:</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {track.attributes.spotify && (
                      <a href={track.attributes.spotify} target="_blank" rel="noopener noreferrer" 
                         className="text-green-400 hover:text-green-300">Spotify</a>
                    )}
                    {track.attributes.appleMusic && (
                      <a href={track.attributes.appleMusic} target="_blank" rel="noopener noreferrer"
                         className="text-pink-400 hover:text-pink-300">Apple Music</a>
                    )}
                    {track.attributes.amazon && (
                      <a href={track.attributes.amazon} target="_blank" rel="noopener noreferrer"
                         className="text-blue-400 hover:text-blue-300">Amazon</a>
                    )}
                    {track.attributes.youtubeMusic && (
                      <a href={track.attributes.youtubeMusic} target="_blank" rel="noopener noreferrer"
                         className="text-red-400 hover:text-red-300">YouTube Music</a>
                    )}
                    {/* Podobne pre ostatné služby */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
