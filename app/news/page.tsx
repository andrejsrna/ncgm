import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getPosts, type Post } from '@/app/lib/posts';

export const metadata: Metadata = {
  title: 'News | NJK Music',
  description: 'Latest updates, releases, and announcements from across the NJK Music network.',
};

export default async function NewsPage() {
  const posts = await Promise.resolve(getPosts());
  const formatDate = (value?: string) => {
    if (!value) {
      return null;
    }
    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) {
      return value;
    }
    return parsed.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-transparent py-16 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mb-14">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-soft backdrop-blur">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-200 backdrop-blur">
              News
            </span>
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Updates from NJK Music
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              New releases, label announcements, and behind-the-scenes notes from across the NJK Music roster.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-dashed border-white/15 bg-white/5 px-4 py-3 text-sm text-slate-300 backdrop-blur">
                <span className="block text-xs font-semibold uppercase tracking-[0.3em] text-slate-200">
                  Release Notes
                </span>
                What&apos;s new across labels and moods.
              </div>
              <div className="rounded-2xl border border-dashed border-white/15 bg-white/5 px-4 py-3 text-sm text-slate-300 backdrop-blur">
                <span className="block text-xs font-semibold uppercase tracking-[0.3em] text-slate-200">
                  Updates
                </span>
                Announcements, changes, and highlights.
              </div>
              <div className="rounded-2xl border border-dashed border-white/15 bg-white/5 px-4 py-3 text-sm text-slate-300 backdrop-blur">
                <span className="block text-xs font-semibold uppercase tracking-[0.3em] text-slate-200">
                  Insights
                </span>
                Short notes from behind the scenes.
              </div>
            </div>
          </div>
        </header>

        <section>
          {posts.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post: Post) => {
                const imageUrl = post.image?.formats?.large?.url ?? post.image?.url ?? null;
                const displayDate = formatDate(post.pubDate ?? post.publishedAt);

                return (
                  <article
                    key={post.id ?? post.slug}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-soft backdrop-blur transition hover:border-cyan-300/40 hover:bg-white/10"
                  >
                    {imageUrl && (
                      <div className="relative aspect-[4/3] w-full overflow-hidden">
                        <Image
                          src={imageUrl}
                          alt={post.title}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent" />
                      </div>
                    )}
                    <div className="flex flex-1 flex-col gap-5 p-6">
                      <div className="flex flex-wrap items-center gap-3">
                        {displayDate && (
                          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 backdrop-blur">
                            {displayDate}
                          </span>
                        )}
                        {post.category && (
                          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 backdrop-blur">
                            {post.category}
                          </span>
                        )}
                      </div>

                      <div className="space-y-3">
                        <Link href={`/news/${post.slug}`} className="block">
                          <h2 className="text-xl font-semibold tracking-tight text-white transition group-hover:text-cyan-200">
                            {post.title}
                          </h2>
                        </Link>
                        {post.description && (
                          <p className="text-sm leading-relaxed text-slate-300 line-clamp-3">
                            {post.description}
                          </p>
                        )}
                      </div>

                      <div className="mt-auto">
                        <Link
                          href={`/news/${post.slug}`}
                          className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200 transition hover:text-cyan-100"
                        >
                          Read
                          <span aria-hidden className="transition group-hover:translate-x-0.5">→</span>
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-white/15 bg-white/5 p-12 text-center shadow-soft backdrop-blur">
              <h2 className="text-lg font-semibold text-white">No posts yet</h2>
              <p className="mt-2 text-sm text-slate-300">
                Check back soon for NJK Music updates, releases, and announcements.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
} 
