import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/app/lib/posts';
import ShareButtons from '@/app/components/sharebuttons';
import { Remarkable } from 'remarkable';
type Params = Promise<{
  slug: string;
  searchParams: { [key: string]: string | string[] | undefined };
}>;

interface Props {
  params: Params;
}

// Generate metadata for each post
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found | No Copyright Gaming Music',
    };
  }
 
  return {
    title: `${post.title} | No Copyright Gaming Music`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.image ? [`${process.env.NEXT_PUBLIC_API_URL}${post.image.formats.large.url}`] : [],
    },
  };
}

export default async function NewsDetailPage({ params }: Props): Promise<React.ReactNode> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const modContent = new Remarkable().render(post?.content || '');

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      <article className="relative py-16 lg:py-24">
        {/* Hero Section with Cover Image */}
        {post.image && (
          <div className="absolute top-0 left-0 w-full h-96 overflow-hidden">
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}${post.image.formats.large.url}`}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900" />
          </div>
        )}

        {/* Content */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-40">
          {/* Meta info */}
          <div className="flex items-center gap-4 mb-6 text-sm">
            <time 
              dateTime={post.publishedAt}
              className="text-gray-400"
            >
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            {post.category && (
              <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400">
                {post.category}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8 animate-fade-in">
            {post.title}
          </h1>
 
          {/* Main content */}
          <div 
            className="prose prose-invert max-w-none animate-fade-in-up delay-200"
          >
            <div dangerouslySetInnerHTML={{ __html: modContent }} />
          </div>

          {/* Share buttons */}
          <ShareButtons post={post} />
        </div>
      </article>
    </div>
  );
} 