import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getPosts, type Post } from '@/app/lib/posts';

export const metadata: Metadata = {
  title: 'Neural Feed | No Copyright Gaming Music',
  description: 'Access the latest data streams, system updates, and network broadcasts from No Copyright Gaming Music.',
};

export default async function NewsPage() {
  const posts = await Promise.resolve(getPosts());

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

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="relative inline-block mb-6">
              <span className="absolute -inset-2 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-50 blur"></span>
              <span className="relative text-5xl font-extrabold text-red-500 font-mono tracking-wider">
                Neural Feed
              </span>
            </h1>
            <p className="text-xl text-red-200/70 max-w-2xl mx-auto font-light tracking-wider animate-fade-in-up delay-100">
              Access the latest data streams and system broadcasts from the network.
            </p>
          </div>

          {/* Posts Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post: Post, index: number) => (
              <article 
                key={post.id}
                className="group relative h-full"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Glowing border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 group-hover:opacity-100 blur transition duration-500 animate-pulse-slow"></div>
                
                {/* Main card */}
                <div className="relative bg-black border border-red-900/30 overflow-hidden h-full flex flex-col">
                  {post.image && post.image.formats && post.image.formats.large && (
                    <div className="relative h-48 w-full overflow-hidden flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black z-10" />
                      <Image
                        src={`${post.image.formats.large.url}`}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:saturate-150"
                      />
                      {/* Scanline effect */}
                      <div className="absolute inset-0 bg-scanline opacity-10 pointer-events-none" />
                    </div>
                  )}
                  
                  <div className="p-6 bg-gradient-to-t from-black via-black/95 to-transparent flex-grow flex flex-col">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 text-red-400 text-sm font-mono tracking-wider border border-red-800/50 bg-red-950/30">
                        {post.pubDate}
                      </span>
                      {post.category && (
                        <span className="px-3 py-1 text-red-400 text-sm font-mono tracking-wider border border-red-800/50 bg-red-950/30">
                          {post.category}
                        </span>
                      )}
                    </div>

                    <Link href={`/news/${post.slug}`} className="block group/title">
                      <h2 className="text-xl font-mono font-bold text-red-500 mb-3 tracking-wider group-hover/title:text-red-400 transition-colors duration-300 line-clamp-2">
                        <span className="relative">
                          <span className="absolute -inset-0.5 text-red-600 opacity-80 blur-[1px]">{post.title}</span>
                          {post.title}
                        </span>
                      </h2>
                    </Link>

                    <p className="text-red-200/70 mb-6 line-clamp-3 font-light tracking-wide">
                      {post.description}
                    </p>

                    <Link 
                      href={`/news/${post.slug}`}
                      className="group/link inline-flex items-center text-red-500 hover:text-red-400 transition-colors duration-300 font-mono mt-auto"
                    >
                      Access Data
                      <svg 
                        className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M9 5l7 7-7 7" 
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-40" />
      </div>
    </div>
  );
} 