import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getPosts, type Post } from '@/app/lib/posts';

export const metadata: Metadata = {
  title: 'News & Updates | No Copyright Gaming Music',
  description: 'Latest news, updates, and announcements from No Copyright Gaming Music.',
};

export default async function NewsPage() {
  const posts = await Promise.resolve(getPosts());

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20" />
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              Latest News & Updates
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in-up delay-100">
              Stay up to date with the latest announcements, features, and community highlights.
            </p>
          </div>

          {/* Posts Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post: Post, index: number) => (
              <article 
                key={post.id}
                className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 
                  transform hover:-translate-y-1 transition-all duration-300 animate-fade-in-up`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                {post.image && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={`${post.image.formats.large.url}`}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm">
                      {post.pubDate}
                    </span>
                    {post.category && (
                      <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm">
                        {post.category}
                      </span>
                    )}
                  </div>

                  <Link href={`/news/${post.slug}`}>
                    <h2 className="text-xl font-semibold text-white mb-3 hover:text-blue-400 transition-colors">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {post.description}
                  </p>

                  <Link 
                    href={`/news/${post.slug}`}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Read More 
                    <svg 
                      className="w-4 h-4 ml-2" 
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
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 