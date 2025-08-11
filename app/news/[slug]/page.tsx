import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/app/lib/posts';
import ShareButtons from '@/app/components/sharebuttons';
import { Remarkable } from 'remarkable';
import { FaArrowLeft } from 'react-icons/fa';
import { resolveStrapiImageUrl } from '@/lib/utils';

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
      title: 'Data Not Found | No Copyright Gaming Music',
    };
  }
 
  return {
    title: `${post.title} | Neural Feed`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.image ? [resolveStrapiImageUrl(post.image)] : [],
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

      <article className="relative py-32">
        {/* Hero Section with Cover Image */}
        {post.image && (
          <div className="absolute top-0 left-0 w-full h-[500px] overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-75 blur" />
            <div className="relative h-full">
              <Image
                src={resolveStrapiImageUrl(post.image)}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
              {/* Scanline effect */}
              <div className="absolute inset-0 bg-scanline opacity-10 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
            </div>
          </div>
        )}

        {/* Content */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link 
            href="/news"
            className="inline-flex items-center text-red-500 hover:text-red-400 mb-16 group transition-all duration-300 font-mono"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-red-500/20 blur group-hover:bg-red-500/30 transition-all duration-300" />
              <div className="relative flex items-center">
                <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                <span>Return to Neural Feed</span>
              </div>
            </div>
          </Link>

          {/* Meta info */}
          <div className="flex items-center gap-4 mb-6">
            <time 
              dateTime={post.pubDate}
              className="px-3 py-1 text-red-400 text-sm font-mono tracking-wider border border-red-800/50 bg-red-950/30"
            >
              {post.pubDate}
            </time>
            {post.category && (
              <span className="px-3 py-1 text-red-400 text-sm font-mono tracking-wider border border-red-800/50 bg-red-950/30">
                {post.category}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="relative inline-block mb-12">
            <span className="absolute -inset-2 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-50 blur"></span>
            <span className="relative text-5xl font-extrabold text-red-500 font-mono tracking-wider">
              {post.title}
            </span>
          </h1>
 
          {/* Main content */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-900 to-red-800 opacity-5 blur" />
            <div 
              className="relative prose prose-invert max-w-none animate-fade-in-up delay-200
                prose-headings:font-mono prose-headings:text-red-500 prose-headings:tracking-wider
                prose-p:text-red-200/70 prose-p:tracking-wide prose-p:leading-relaxed
                prose-a:text-red-500 prose-a:no-underline hover:prose-a:text-red-400
                prose-strong:text-red-400 prose-strong:font-normal
                prose-code:text-red-300 prose-code:bg-red-900/20 prose-code:px-1 prose-code:rounded
                prose-blockquote:border-red-800 prose-blockquote:bg-red-950/30 prose-blockquote:px-6 prose-blockquote:py-4
                prose-li:text-red-200/70"
            >
              <div dangerouslySetInnerHTML={{ __html: modContent }} />
            </div>
          </div>

          {/* Share buttons */}
          <div className="mt-16 pt-8 border-t border-red-900/30">
            <ShareButtons post={post} />
          </div>
        </div>
      </article>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-40" />
      </div>
    </div>
  );
}