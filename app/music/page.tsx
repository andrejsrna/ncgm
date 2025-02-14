import { Suspense } from 'react';
import { getMusicData, MusicData } from "@/app/hooks/useMusicQuery";
import MusicCard from "@/app/music/MusicCard";

function Loading() {
  return <div className="text-center p-8">Loading...</div>;
}

async function MusicGrid() {
  const music = await getMusicData();
  
  // Sort music by date (newest first)
  const sortedMusic = [...music].sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
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
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Our Music</h1>
        
        <Suspense fallback={<Loading />}>
          <MusicGrid />
        </Suspense>
      </div>
    </div>
  );
}
