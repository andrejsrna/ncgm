import { getMusicBySlug } from "@/app/hooks/useMusicQuery";
import { resolveStrapiImageUrl } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FaSpotify, FaApple, FaYoutube, FaDeezer, FaDownload, FaHeadphones } from 'react-icons/fa';
import { SiTidal, SiPandora, SiBeatport, SiBandcamp } from 'react-icons/si';
import { FaArrowLeft } from 'react-icons/fa';

export default async function MusicDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const track = await getMusicBySlug(slug);
  const coverUrl = resolveStrapiImageUrl(track?.Cover);

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

      <div className="relative max-w-7xl mx-auto px-4 py-32">
        {/* Back Button */}
        <Link 
          href="/music"
          className="inline-flex items-center text-red-500 hover:text-red-400 mb-16 group transition-all duration-300 font-mono"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-red-500/20 blur group-hover:bg-red-500/30 transition-all duration-300" />
            <div className="relative flex items-center">
              <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Return to Archives</span>
            </div>
          </div>
        </Link>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Image and Player */}
          <div className="space-y-12">
            <div className="relative group">
              {/* Glowing border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 group-hover:opacity-100 blur transition duration-500 animate-pulse-slow" />
              
              {/* Image Container */}
              <div className="relative h-[600px] w-full overflow-hidden bg-black">
                {coverUrl && (
                  <Image
                    src={coverUrl}
                    alt={track.Title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700 group-hover:saturate-150"
                    priority
                  />
                )}
                {/* Scanline effect */}
                <div className="absolute inset-0 bg-scanline opacity-10 pointer-events-none" />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 opacity-60" />
              </div>
            </div>

            {track.spotify_embed && (
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-900 to-red-800 opacity-50 blur" />
                <div className="relative bg-black/80 p-6 backdrop-blur-sm border border-red-900/30">
                  <div dangerouslySetInnerHTML={{ __html: track.spotify_embed }} />
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Track Details */}
          <div className="space-y-12">
            {/* Title and Info */}
            <div>
              <h1 className="relative inline-block">
                <span className="absolute -inset-2 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-50 blur"></span>
                <span className="relative text-5xl font-extrabold text-red-500 font-mono tracking-wider">
                  {track.Title}
                </span>
              </h1>
              
              {track.genre && (
                <div className="mt-6">
                  <span className="inline-block px-4 py-2 text-red-400 text-sm font-mono tracking-wider border border-red-800/50 bg-red-950/30">
                    {track.genre.Genres}
                  </span>
                </div>
              )}
              
              {track.Description && (
                <p className="text-red-200/70 mt-8 text-lg leading-relaxed font-light tracking-wide">
                  {track.Description}
                </p>
              )}
            </div>

            {/* Streaming Section */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute -inset-1 bg-red-500/20 blur" />
                  <FaHeadphones className="relative text-2xl text-red-500" />
                </div>
                <h2 className="text-2xl font-mono font-semibold text-red-500 tracking-wider">Neural Access</h2>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {track.Spotify && (
                  <a href={track.Spotify} target="_blank" rel="noopener noreferrer" 
                     className="group relative">
                    <div className="absolute -inset-0.5 bg-[#1DB954]/20 opacity-75 group-hover:opacity-100 blur transition duration-300" />
                    <div className="relative flex items-center justify-center gap-3 bg-black px-6 py-4 border border-[#1DB954]/30">
                      <FaSpotify className="text-xl text-[#1DB954]" />
                      <span className="font-mono text-[#1DB954]">Spotify</span>
                    </div>
                  </a>
                )}
                {track.AppleMusic && (
                  <a href={track.AppleMusic} target="_blank" rel="noopener noreferrer"
                     className="group relative">
                    <div className="absolute -inset-0.5 bg-red-500/20 opacity-75 group-hover:opacity-100 blur transition duration-300" />
                    <div className="relative flex items-center justify-center gap-3 bg-black px-6 py-4 border border-red-500/30">
                      <FaApple className="text-xl text-red-500" />
                      <span className="font-mono text-red-500">Apple Music</span>
                    </div>
                  </a>
                )}
                {track.YouTubeMusic && (
                  <a href={track.YouTubeMusic} target="_blank" rel="noopener noreferrer"
                     className="group relative">
                    <div className="absolute -inset-0.5 bg-red-600/20 opacity-75 group-hover:opacity-100 blur transition duration-300" />
                    <div className="relative flex items-center justify-center gap-3 bg-black px-6 py-4 border border-red-600/30">
                      <FaYoutube className="text-xl text-red-600" />
                      <span className="font-mono text-red-600">YouTube</span>
                    </div>
                  </a>
                )}
                {track.Deezer && (
                  <a href={track.Deezer} target="_blank" rel="noopener noreferrer"
                     className="group relative">
                    <div className="absolute -inset-0.5 bg-red-400/20 opacity-75 group-hover:opacity-100 blur transition duration-300" />
                    <div className="relative flex items-center justify-center gap-3 bg-black px-6 py-4 border border-red-400/30">
                      <FaDeezer className="text-xl text-red-400" />
                      <span className="font-mono text-red-400">Deezer</span>
                    </div>
                  </a>
                )}
                {track.Tidal && (
                  <a href={track.Tidal} target="_blank" rel="noopener noreferrer"
                     className="group relative">
                    <div className="absolute -inset-0.5 bg-red-300/20 opacity-75 group-hover:opacity-100 blur transition duration-300" />
                    <div className="relative flex items-center justify-center gap-3 bg-black px-6 py-4 border border-red-300/30">
                      <SiTidal className="text-xl text-red-300" />
                      <span className="font-mono text-red-300">Tidal</span>
                    </div>
                  </a>
                )}
                {track.Pandora && (
                  <a href={track.Pandora} target="_blank" rel="noopener noreferrer"
                     className="group relative">
                    <div className="absolute -inset-0.5 bg-red-400/20 opacity-75 group-hover:opacity-100 blur transition duration-300" />
                    <div className="relative flex items-center justify-center gap-3 bg-black px-6 py-4 border border-red-400/30">
                      <SiPandora className="text-xl text-red-400" />
                      <span className="font-mono text-red-400">Pandora</span>
                    </div>
                  </a>
                )}
              </div>
            </div>

            {/* Download Section */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute -inset-2 bg-red-500/30 blur animate-pulse" />
                  <FaDownload className="relative text-3xl text-red-500" />
                </div>
                <h2 className="text-3xl font-mono font-bold text-red-500 tracking-wider">Data Extraction</h2>
              </div>



              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {track.Beatport && (
                  <a href={track.Beatport} target="_blank" rel="noopener noreferrer"
                     className="group relative transform hover:scale-105 transition-all duration-300">
                    <div className="absolute -inset-2 bg-gradient-to-r from-red-600 to-red-800 opacity-80 group-hover:opacity-100 blur transition duration-500 animate-pulse-slow" />
                    <div className="relative flex items-center justify-center gap-4 bg-black px-8 py-6 border-2 border-red-500/50 group-hover:border-red-400/70 transition-all duration-300">
                      <SiBeatport className="text-3xl text-red-500 group-hover:text-red-400 transition-colors duration-300" />
                      <span className="font-mono text-red-500 group-hover:text-red-400 transition-colors duration-300 text-lg font-semibold tracking-wider">Beatport</span>
                      <div className="absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    </div>
                  </a>
                )}
                {track.Bandcamp && (
                  <a href={track.Bandcamp} target="_blank" rel="noopener noreferrer"
                     className="group relative transform hover:scale-105 transition-all duration-300">
                    <div className="absolute -inset-2 bg-gradient-to-r from-red-600 to-red-800 opacity-80 group-hover:opacity-100 blur transition duration-500 animate-pulse-slow" />
                    <div className="relative flex items-center justify-center gap-4 bg-black px-8 py-6 border-2 border-red-500/50 group-hover:border-red-400/70 transition-all duration-300">
                      <SiBandcamp className="text-3xl text-red-500 group-hover:text-red-400 transition-colors duration-300" />
                      <span className="font-mono text-red-500 group-hover:text-red-400 transition-colors duration-300 text-lg font-semibold tracking-wider">Bandcamp</span>
                      <div className="absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    </div>
                  </a>
                )}
              </div>

              {/* Info Section */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-900/30 to-red-700/30 opacity-60 blur" />
                <div className="relative bg-black/80 p-6 border border-red-800/40 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="absolute -inset-1 bg-red-500/20 blur" />
                        <FaHeadphones className="relative text-2xl text-red-500" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-lg font-mono font-semibold text-red-400 tracking-wider">Download Information</h4>
                      <div className="space-y-2 text-sm text-red-200/80">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span>High-quality WAV and MP3 formats available</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span>Purchase once, use forever in your content</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span>Proper attribution required for commercial use</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span>No copyright claims - safe for content creation</span>
                        </div>
                      </div>
                      <div className="pt-2">
                        <Link 
                          href="/help/attribution"
                          className="inline-flex items-center text-red-500 hover:text-red-400 transition-colors duration-300 font-mono text-sm"
                        >
                          Learn about attribution requirements
                          <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-40" />
      </div>
    </div>
  );
}