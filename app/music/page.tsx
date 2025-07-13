import { Suspense } from 'react';
import { getMusicData, MusicData } from "@/app/hooks/useMusicQuery";
import MusicCard from "@/app/music/MusicCard";
import { FiLoader } from 'react-icons/fi';

function Loading() {
  return (
    <div className="flex items-center justify-center p-12">
      <FiLoader className="w-8 h-8 text-red-500 animate-spin" />
      <span className="ml-3 text-red-400 font-mono tracking-wider">Initializing Data Stream...</span>
    </div>
  );
}

async function MusicGrid() {
  const music = await getMusicData();
  
  // Sort music by date (newest first)
  const sortedMusic = [...music].sort((a, b) => 
    new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {sortedMusic?.map((track: MusicData) => (
        <MusicCard key={track.documentId} track={track} />
      ))}
    </div>
  );
}

export default async function MusicPage() {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(185, 28, 28, 0.7) 1px, transparent 1px),
            radial-gradient(circle at 0% 0%, rgba(185, 28, 28, 0.7) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px, 24px 24px',
          backgroundPosition: '0 0, 12px 12px'
        }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-32">
        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="relative inline-block">
            <span className="absolute -inset-2 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-50 blur"></span>
            <span className="relative text-5xl font-extrabold text-red-500 font-mono tracking-wider">
              Neural Archives
            </span>
          </h1>
          <p className="mt-4 text-red-300/70 max-w-2xl mx-auto font-light tracking-wider">
            Dive into our curated collection of digital soundscapes, where each track tells a story from the neon-lit streets.
          </p>
        </div>
        
        <Suspense fallback={<Loading />}>
          <MusicGrid />
        </Suspense>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-40" />
      </div>
    </div>
  );
}
