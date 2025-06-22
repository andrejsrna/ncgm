import Image from 'next/image';
import Link from 'next/link';
import { getLatestVideos } from '@/app/lib/youtube';
import { FaYoutube, FaPlay } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

async function VideoGrid() {
  const channelId = 'UCWVxIOcVIyuXJ0yCIevHS2w';
  const videos = await getLatestVideos(channelId, 12);

  if (!videos || videos.length === 0) {
    return (
      <div className="text-center py-16 text-red-400/70 border border-red-900/30 bg-black/50 p-8">
        <h3 className="text-2xl font-mono text-red-500 mb-4">Connection to Neural Matrix Lost</h3>
        <p className="max-w-md mx-auto">
          Could not retrieve video data stream. Ensure the YouTube API key is correctly configured in your environment variables.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {videos.map((video) => (
        <a
          key={video.id}
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block overflow-hidden border border-red-900/30 transition-all duration-300 hover:border-red-600/50 hover:shadow-[0_0_25px_rgba(185,28,28,0.3)]"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"></div>
          <Image
            src={video.thumbnailUrl}
            alt={video.title}
            width={1280}
            height={720}
            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FaPlay className="w-16 h-16 text-red-500 drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
          </div>
          <div className="absolute bottom-0 left-0 p-4 z-20 w-full">
            <h3 className="text-lg font-bold text-red-400 group-hover:text-red-300 transition-colors duration-300 line-clamp-2">
              {video.title}
            </h3>
            <p className="text-sm text-red-200/60 mt-1">
              {new Date(video.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}

export default function MixesPage() {
  const channelUrl = 'https://www.youtube.com/channel/UCWVxIOcVIyuXJ0yCIevHS2w';

  return (
    <div className="min-h-screen bg-black relative">
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
      
      <div className="relative max-w-7xl mx-auto px-4 py-32">
        <div className="text-center mb-16">
          <h1 className="relative inline-block text-5xl font-extrabold text-red-500 font-mono tracking-wider">
            <span className="absolute -inset-2 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-50 blur"></span>
            <span className="relative">Signal Transmissions</span>
          </h1>
          <p className="mt-4 text-red-300/70 max-w-2xl mx-auto font-light tracking-wider">
            Latest neural mixes and sonic explorations from our primary broadcast matrix.
          </p>
          <div className="mt-8">
            <Link href={channelUrl} target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center gap-3 px-8 py-4 bg-black border border-red-800/50 hover:border-red-600/50 transition-colors duration-500">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 to-red-600 opacity-75 group-hover:opacity-100 blur-sm transition duration-500"></div>
              <FaYoutube className="relative w-6 h-6 text-red-500" />
              <span className="relative text-red-400 font-mono tracking-wider text-lg">
                Access YouTube Matrix
              </span>
              <FiExternalLink className="relative w-5 h-5 text-red-400/70 group-hover:text-red-400 transition-colors" />
            </Link>
          </div>
        </div>

        <VideoGrid />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-40" />
      </div>
    </div>
  );
} 