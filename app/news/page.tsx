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
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mb-14">
          <div className="rounded-3xl border border-border bg-white p-10 shadow-sm">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-600">
              NJK Music Updates
            </span>
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Neural Feed
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Stay in sync with label launches, catalogue news, and creator-ready resources from across the NJK Music network. New dispatches drop weekly with tips, behind-the-scenes spotlights, and release strategies.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-dashed border-border/80 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                <span className="block text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Creator Insights
                </span>
                Weekly tips, platform updates, and monetisation guidance.
              </div>
              <div className="rounded-2xl border border-dashed border-border/80 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                <span className="block text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Label Dispatches
                </span>
                Get a first look at upcoming drops across NJK Music labels.
              </div>
              <div className="rounded-2xl border border-dashed border-border/80 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                <span className="block text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Licensing Alerts
                </span>
                Stay informed about rights-managed releases and new clearances.
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
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition hover:shadow-md"
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
                          <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
                            {displayDate}
                          </span>
                        )}
                        {post.category && (
                          <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
                            {post.category}
                          </span>
                        )}
                      </div>

                      <div className="space-y-3">
                        <Link href={`/news/${post.slug}`} className="block">
                          <h2 className="text-xl font-semibold tracking-tight text-slate-900 transition group-hover:text-primary">
                            {post.title}
                          </h2>
                        </Link>
                        {post.description && (
                          <p className="text-sm leading-relaxed text-slate-600 line-clamp-3">
                            {post.description}
                          </p>
                        )}
                      </div>

                      <div className="mt-auto">
                        <Link
                          href={`/news/${post.slug}`}
                          className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-primary transition hover:text-primary/80"
                        >
                          Read Update
                          <span aria-hidden className="transition group-hover:translate-x-0.5">→</span>
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-border/80 bg-white p-12 text-center">
              <h2 className="text-lg font-semibold text-slate-900">No posts yet</h2>
              <p className="mt-2 text-sm text-slate-500">
                Publishing tools are deploying. Check back soon for label news, creator case studies, and release notes.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
} 
