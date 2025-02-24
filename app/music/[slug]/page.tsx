import { getMusicBySlug } from "@/app/hooks/useMusicQuery";
import Image from "next/image";
import Link from "next/link";
import { FaSpotify, FaApple, FaYoutube, FaAmazon, FaHeadphones, FaDownload, FaArrowLeft, FaMusic } from 'react-icons/fa';
import { SiTidal, SiPandora, SiIheartradio, SiBeatport, SiBandcamp } from 'react-icons/si';
import { FaDeezer } from 'react-icons/fa';

export default async function MusicDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const track = await getMusicBySlug(slug);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Link 
          href="/music"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 group transition-all duration-300"
        >
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Music
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Image and Basic Info */}
          <div className="space-y-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
                {track.Cover && (
                  <Image
                    src={`${track.Cover.formats.large.url}`}
                    alt={track.Title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent opacity-60" />
              </div>
            </div>

            {track.spotify_embed && (
              <div className="bg-gray-800/50 p-6 rounded-2xl backdrop-blur-sm">
                <div dangerouslySetInnerHTML={{ __html: track.spotify_embed }} />
              </div>
            )}
          </div>

          {/* Right Column - Track Details and Links */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {track.Title}
              </h1>
              
              {track.genre && (
                <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium">
                  {track.genre.Genres}
                </span>
              )}
              
              {track.Description && (
                <p className="text-gray-300 mt-6 text-lg leading-relaxed">
                  {track.Description}
                </p>
              )}
            </div>

            {/* Streaming Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <FaHeadphones className="text-2xl text-blue-400" />
                <h2 className="text-2xl font-semibold text-white">Stream</h2>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {track.Spotify && (
                  <a href={track.Spotify} target="_blank" rel="noopener noreferrer" 
                     className="flex items-center justify-center space-x-3 bg-[#1DB954]/10 text-[#1DB954] px-6 py-4 rounded-xl hover:bg-[#1DB954]/20 transition-all duration-300">
                    <FaSpotify className="text-xl" />
                    <span>Spotify</span>
                  </a>
                )}
                {track.AppleMusic && (
                  <a href={track.AppleMusic} target="_blank" rel="noopener noreferrer"
                     className="flex items-center justify-center space-x-3 bg-[#FB5C74]/10 text-[#FB5C74] px-6 py-4 rounded-xl hover:bg-[#FB5C74]/20 transition-all duration-300">
                    <FaApple className="text-xl" />
                    <span>Apple Music</span>
                  </a>
                )}
                {track.YouTubeMusic && (
                  <a href={track.YouTubeMusic} target="_blank" rel="noopener noreferrer"
                     className="flex items-center justify-center space-x-3 bg-[#FF0000]/10 text-[#FF0000] px-6 py-4 rounded-xl hover:bg-[#FF0000]/20 transition-all duration-300">
                    <FaYoutube className="text-xl" />
                    <span>YouTube Music</span>
                  </a>
                )}
                {track.Deezer && (
                  <a href={track.Deezer} target="_blank" rel="noopener noreferrer"
                     className="flex items-center justify-center space-x-3 bg-[#00C7F2]/10 text-[#00C7F2] px-6 py-4 rounded-xl hover:bg-[#00C7F2]/20 transition-all duration-300">
                    <FaDeezer className="text-xl" />
                    <span>Deezer</span>
                  </a>
                )}
                {track.Tidal && (
                  <a href={track.Tidal} target="_blank" rel="noopener noreferrer"
                     className="flex items-center justify-center space-x-3 bg-gray-500/10 text-gray-300 px-6 py-4 rounded-xl hover:bg-gray-500/20 transition-all duration-300">
                    <SiTidal className="text-xl" />
                    <span>Tidal</span>
                  </a>
                )}
                {track.Pandora && (
                  <a href={track.Pandora} target="_blank" rel="noopener noreferrer"
                     className="flex items-center justify-center space-x-3 bg-[#3668FF]/10 text-[#3668FF] px-6 py-4 rounded-xl hover:bg-[#3668FF]/20 transition-all duration-300">
                    <SiPandora className="text-xl" />
                    <span>Pandora</span>
                  </a>
                )}
                {track.iHeartRadio && (
                  <a href={track.iHeartRadio} target="_blank" rel="noopener noreferrer"
                     className="flex items-center justify-center space-x-3 bg-[#C6002B]/10 text-[#C6002B] px-6 py-4 rounded-xl hover:bg-[#C6002B]/20 transition-all duration-300">
                    <SiIheartradio className="text-xl" />
                    <span>iHeartRadio</span>
                  </a>
                )}
                {track.Boomplay && (
                  <a href={track.Boomplay} target="_blank" rel="noopener noreferrer"
                     className="flex items-center justify-center space-x-3 bg-[#000000]/10 text-[#ffffff] px-6 py-4 rounded-xl hover:bg-[#000000]/20 transition-all duration-300">
                    <FaMusic className="text-xl" />
                    <span>Boomplay</span>
                  </a>
                )}
                {track.iHeartRadio && (
                  <a href={track.iHeartRadio} target="_blank" rel="noopener noreferrer"
                     className="flex items-center justify-center space-x-3 bg-[#FF7700]/10 text-[#FF7700] px-6 py-4 rounded-xl hover:bg-[#FF7700]/20 transition-all duration-300">
                    <FaMusic className="text-xl" />
                    <span>iHeartRadio</span>
                  </a>
                )}
              </div>
            </div>

            {/* Download Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <FaDownload className="text-2xl text-purple-400" />
                <h2 className="text-2xl font-semibold text-white">Download</h2>
              </div>

              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-2xl border border-blue-500/20">
                <h3 className="text-xl font-semibold text-white mb-3">License Information</h3>
                <p className="text-gray-300 mb-4">
                  All tracks are available for content creation with proper attribution. 
                  Purchase once, use forever in your content.
                </p>
                <Link 
                  href="/license"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  View Complete License Terms 
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {track.Amazon && (
                  <a href={track.Amazon} target="_blank" rel="noopener noreferrer"
                     className="flex items-center justify-center space-x-3 bg-[#FF9900]/10 text-[#FF9900] px-6 py-4 rounded-xl hover:bg-[#FF9900]/20 transition-all duration-300">
                    <FaAmazon className="text-xl" />
                    <span>Amazon Music</span>
                  </a>
                )}
                {track.Beatport && (
                  <a href={track.Beatport} target="_blank" rel="noopener noreferrer"
                     className="flex items-center justify-center space-x-3 bg-[#02FF77]/10 text-[#02FF77] px-6 py-4 rounded-xl hover:bg-[#02FF77]/20 transition-all duration-300">
                    <SiBeatport className="text-xl" />
                    <span>Beatport</span>
                  </a>
                )}
				{track.Bandcamp && (
					<a href={track.Bandcamp} target="_blank" rel="noopener noreferrer"
						className="flex items-center justify-center space-x-3 bg-[#1DA1F2]/10 text-[#1DA1F2] px-6 py-4 rounded-xl hover:bg-[#1DA1F2]/20 transition-all duration-300">
						<SiBandcamp className="text-xl" />
						<span>Bandcamp</span>
					</a>
				)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}