"use client"

import { Post } from "@/app/lib/posts";

export default function ShareButtons({ post }: { post: Post }) {
  return (
    <div className="mt-12 pt-8 border-t border-gray-800">
      <h2 className="text-lg font-semibold text-white mb-4">Share this article</h2>
      <div className="flex gap-4">
  <button 
    onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
    className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors"
  >
    Twitter
  </button>
  <button 
    onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
    className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors"
  >
    Facebook
        </button>
      </div>
    </div>
  );
}
