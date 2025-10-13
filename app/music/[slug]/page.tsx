import { getMusicBySlug } from "@/app/hooks/useMusicQuery";
import { resolveStrapiImageUrl } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FaSpotify, FaApple, FaYoutube, FaDeezer, FaDownload, FaHeadphones } from 'react-icons/fa';
import { SiTidal, SiPandora, SiBeatport, SiBandcamp } from 'react-icons/si';
import { FaArrowLeft } from 'react-icons/fa';
import { Metadata } from 'next';

// Generate dynamic metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    const track = await getMusicBySlug(slug);
    const coverUrl = resolveStrapiImageUrl(track?.Cover);
    
    // Extract plain text from HTML description
    const plainDescription = track.Description 
      ? track.Description.replace(/<[^>]*>/g, '').substring(0, 160)
      : `Listen to ${track.Title} - No copyright ${track.genre?.Genres || 'music'} track perfect for gaming content, streams, and videos.`;
    
    const title = `${track.Title} - No Copyright ${track.genre?.Genres || 'Music'} | NCGM`;
    const url = `https://nocopyrightgamingmusic.com/music/${slug}`;
    
    return {
      title,
      description: plainDescription,
      keywords: [
        track.Title,
        'no copyright music',
        'royalty free music',
        track.genre?.Genres || 'music',
        'gaming music',
        'stream music',
        'youtube music',
        'content creator music',
        'copyright free',
      ],
      authors: [{ name: 'No Copyright Gaming Music' }],
      openGraph: {
        title,
        description: plainDescription,
        url,
        siteName: 'No Copyright Gaming Music',
        images: [
          {
            url: coverUrl || 'https://nocopyrightgamingmusic.com/og-image.jpg',
            width: 1200,
            height: 630,
            alt: `${track.Title} - Album Cover`,
          },
        ],
        locale: 'en_US',
        type: 'music.song',
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description: plainDescription,
        images: [coverUrl || 'https://nocopyrightgamingmusic.com/og-image.jpg'],
      },
      alternates: {
        canonical: url,
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
    };
  } catch (error) {
    // Fallback metadata if track not found
    return {
      title: 'Track Not Found - No Copyright Gaming Music',
      description: 'The requested music track could not be found.',
    };
  }
}

export default async function MusicDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const track = await getMusicBySlug(slug);
  const coverUrl = resolveStrapiImageUrl(track?.Cover);

  // Generate structured data (JSON-LD) for rich snippets
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'MusicRecording',
    name: track.Title,
    genre: track.genre?.Genres || 'Electronic',
    datePublished: track.publishedAt || track.createdAt,
    image: coverUrl,
    description: track.Description 
      ? track.Description.replace(/<[^>]*>/g, '').substring(0, 200)
      : `${track.Title} - No copyright ${track.genre?.Genres || 'music'} for content creators`,
    url: `https://nocopyrightgamingmusic.com/music/${slug}`,
    license: 'https://nocopyrightgamingmusic.com/license',
    author: {
      '@type': 'Organization',
      name: 'No Copyright Gaming Music',
      url: 'https://nocopyrightgamingmusic.com',
    },
    offers: track.Beatport || track.Bandcamp ? {
      '@type': 'AggregateOffer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD',
      url: track.Beatport || track.Bandcamp,
    } : undefined,
    audio: track.Spotify ? {
      '@type': 'AudioObject',
      contentUrl: track.Spotify,
      encodingFormat: 'audio/mpeg',
    } : undefined,
  };

  // Breadcrumb structured data
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://nocopyrightgamingmusic.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Music',
        item: 'https://nocopyrightgamingmusic.com/music',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: track.Title,
        item: `https://nocopyrightgamingmusic.com/music/${slug}`,
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      
      <article className="min-h-screen bg-black relative">
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

        {/* Main Content Layout */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Left Column - Image Artwork */}
          <div>
            <div className="relative group">
              {/* Glowing border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 group-hover:opacity-100 blur transition duration-500 animate-pulse-slow" />
              
              {/* Image Container */}
              <div className="relative h-[600px] w-full overflow-hidden bg-black">
                {coverUrl && (
                  <Image
                    src={coverUrl}
                    alt={`${track.Title} - No copyright ${track.genre?.Genres || 'music'} album cover art`}
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
          </div>

          {/* Right Column - Track Details */}
          <div className="space-y-6">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="text-sm mb-4">
              <ol className="flex items-center gap-2 text-red-400/60 font-mono">
                <li>
                  <Link href="/" className="hover:text-red-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/music" className="hover:text-red-400 transition-colors">
                    Music
                  </Link>
                </li>
                <li>/</li>
                <li className="text-red-400" aria-current="page">
                  {track.Title}
                </li>
              </ol>
            </nav>

            {/* Title and Date */}
            <div>
              <h1 className="relative inline-block">
                <span className="absolute -inset-2 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-50 blur"></span>
                <span className="relative text-4xl font-extrabold text-red-500 font-mono tracking-wider">
                  {track.Title}
                </span>
              </h1>
              
              {/* Date */}
              <div className="mt-2">
                <span className="text-red-300/60 text-sm font-mono tracking-wider">
                  {new Date(track.createdAt).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
              
              {track.genre && (
                <div className="mt-3">
                  <span className="inline-block px-3 py-1 text-red-400 text-sm font-mono tracking-wider border border-red-800/50 bg-red-950/30">
                    {track.genre.Genres}
                  </span>
                </div>
              )}
            </div>

            {/* Neural Access Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="absolute -inset-1 bg-red-500/20 blur" />
                  <FaHeadphones className="relative text-lg text-red-500" />
                </div>
                <h2 className="text-xl font-mono font-semibold text-red-500 tracking-wider">Neural Access</h2>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {track.Spotify && (
                  <a href={track.Spotify} target="_blank" rel="noopener noreferrer nofollow" 
                     aria-label={`Listen to ${track.Title} on Spotify`}
                     className="group relative">
                    <div className="absolute -inset-0.5 bg-[#1DB954]/20 opacity-75 group-hover:opacity-100 blur transition duration-300" />
                    <div className="relative flex items-center justify-center gap-2 bg-black px-4 py-3 border border-[#1DB954]/30">
                      <FaSpotify className="text-lg text-[#1DB954]" />
                      <span className="font-mono text-[#1DB954] text-sm">Spotify</span>
                    </div>
                  </a>
                )}
                {track.AppleMusic && (
                  <a href={track.AppleMusic} target="_blank" rel="noopener noreferrer nofollow"
                     aria-label={`Listen to ${track.Title} on Apple Music`}
                     className="group relative">
                    <div className="absolute -inset-0.5 bg-red-500/20 opacity-75 group-hover:opacity-100 blur transition duration-300" />
                    <div className="relative flex items-center justify-center gap-2 bg-black px-4 py-3 border border-red-500/30">
                      <FaApple className="text-lg text-red-500" />
                      <span className="font-mono text-red-500 text-sm">Apple Music</span>
                    </div>
                  </a>
                )}
                {track.YouTubeMusic && (
                  <a href={track.YouTubeMusic} target="_blank" rel="noopener noreferrer nofollow"
                     aria-label={`Listen to ${track.Title} on YouTube Music`}
                     className="group relative">
                    <div className="absolute -inset-0.5 bg-red-600/20 opacity-75 group-hover:opacity-100 blur transition duration-300" />
                    <div className="relative flex items-center justify-center gap-2 bg-black px-4 py-3 border border-red-600/30">
                      <FaYoutube className="text-lg text-red-600" />
                      <span className="font-mono text-red-600 text-sm">YouTube</span>
                    </div>
                  </a>
                )}
                {track.Deezer && (
                  <a href={track.Deezer} target="_blank" rel="noopener noreferrer nofollow"
                     aria-label={`Listen to ${track.Title} on Deezer`}
                     className="group relative">
                    <div className="absolute -inset-0.5 bg-red-400/20 opacity-75 group-hover:opacity-100 blur transition duration-300" />
                    <div className="relative flex items-center justify-center gap-2 bg-black px-4 py-3 border border-red-400/30">
                      <FaDeezer className="text-lg text-red-400" />
                      <span className="font-mono text-red-400 text-sm">Deezer</span>
                    </div>
                  </a>
                )}
                {track.Tidal && (
                  <a href={track.Tidal} target="_blank" rel="noopener noreferrer nofollow"
                     aria-label={`Listen to ${track.Title} on Tidal`}
                     className="group relative">
                    <div className="absolute -inset-0.5 bg-red-300/20 opacity-75 group-hover:opacity-100 blur transition duration-300" />
                    <div className="relative flex items-center justify-center gap-2 bg-black px-4 py-3 border border-red-300/30">
                      <SiTidal className="text-lg text-red-300" />
                      <span className="font-mono text-red-300 text-sm">Tidal</span>
                    </div>
                  </a>
                )}
                {track.Pandora && (
                  <a href={track.Pandora} target="_blank" rel="noopener noreferrer nofollow"
                     aria-label={`Listen to ${track.Title} on Pandora`}
                     className="group relative">
                    <div className="absolute -inset-0.5 bg-red-400/20 opacity-75 group-hover:opacity-100 blur transition duration-300" />
                    <div className="relative flex items-center justify-center gap-2 bg-black px-4 py-3 border border-red-400/30">
                      <SiPandora className="text-lg text-red-400" />
                      <span className="font-mono text-red-400 text-sm">Pandora</span>
                    </div>
                  </a>
                )}
              </div>
            </div>

            {/* Data Extraction Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="absolute -inset-1 bg-red-500/30 blur animate-pulse" />
                  <FaDownload className="relative text-xl text-red-500" />
                </div>
                <h2 className="text-xl font-mono font-bold text-red-500 tracking-wider">Data Extraction</h2>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {track.Beatport && (
                  <a href={track.Beatport} target="_blank" rel="noopener noreferrer nofollow"
                     aria-label={`Download ${track.Title} on Beatport`}
                     className="group relative transform hover:scale-105 transition-all duration-300">
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-800 opacity-80 group-hover:opacity-100 blur transition duration-500 animate-pulse-slow" />
                    <div className="relative flex items-center justify-center gap-3 bg-black px-6 py-4 border-2 border-red-500/50 group-hover:border-red-400/70 transition-all duration-300">
                      <SiBeatport className="text-2xl text-red-500 group-hover:text-red-400 transition-colors duration-300" />
                      <span className="font-mono text-red-500 group-hover:text-red-400 transition-colors duration-300 font-semibold tracking-wider">Beatport</span>
                      <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    </div>
                  </a>
                )}
                {track.Bandcamp && (
                  <a href={track.Bandcamp} target="_blank" rel="noopener noreferrer nofollow"
                     aria-label={`Download ${track.Title} on Bandcamp`}
                     className="group relative transform hover:scale-105 transition-all duration-300">
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-800 opacity-80 group-hover:opacity-100 blur transition duration-500 animate-pulse-slow" />
                    <div className="relative flex items-center justify-center gap-3 bg-black px-6 py-4 border-2 border-red-500/50 group-hover:border-red-400/70 transition-all duration-300">
                      <SiBandcamp className="text-2xl text-red-500 group-hover:text-red-400 transition-colors duration-300" />
                      <span className="font-mono text-red-500 group-hover:text-red-400 transition-colors duration-300 font-semibold tracking-wider">Bandcamp</span>
                      <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    </div>
                  </a>
                )}
              </div>

            </div>
          </div>
        </div>

        {/* Licensing Information Section */}
        <div className="mb-16">
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

        {/* Spotify Embed Section */}
        {track.spotify_embed && (
          <div className="mb-16">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-900 to-red-800 opacity-50 blur" />
              <div className="relative bg-black/80 p-6 backdrop-blur-sm border border-red-900/30">
                <div dangerouslySetInnerHTML={{ __html: track.spotify_embed }} />
              </div>
            </div>
          </div>
        )}

        {/* Release Description Section */}
        {track.Description && (
          <div className="mb-16">
            {/* Section Heading */}
            <div className="mb-8">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute -inset-1 bg-red-500/20 blur" />
                  <FaHeadphones className="relative text-2xl text-red-500" />
                </div>
                <h2 className="text-2xl font-mono font-semibold text-red-500 tracking-wider">Release Description</h2>
              </div>
            </div>

            {/* Description Content */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-900 to-red-800 opacity-5 blur" />
              <div 
                className="relative prose prose-invert max-w-none
                  prose-p:text-red-200/70 prose-p:tracking-wide prose-p:leading-relaxed prose-p:text-lg prose-p:font-light prose-p:mb-4 prose-p:whitespace-pre-line
                  prose-headings:text-red-500 prose-headings:font-mono prose-headings:tracking-wider prose-headings:mb-4 prose-headings:mt-6
                  prose-a:text-red-500 prose-a:no-underline hover:prose-a:text-red-400
                  prose-strong:text-red-400 prose-strong:font-normal
                  prose-code:text-red-300 prose-code:bg-red-900/20 prose-code:px-1 prose-code:rounded
                  prose-blockquote:border-red-800 prose-blockquote:bg-red-950/30 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:my-6
                  prose-li:text-red-200/70 prose-li:mb-2
                  prose-ul:my-4 prose-ol:my-4
                  [&_br]:block [&_br]:my-2"
                style={{ whiteSpace: 'normal' }}
              >
                <div 
                  dangerouslySetInnerHTML={{ __html: track.Description }} 
                  className="[&>p]:whitespace-pre-line"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-40" />
      </div>
    </article>
    </>
  );
}