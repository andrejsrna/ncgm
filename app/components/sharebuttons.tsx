"use client";

import { Post } from "@/app/lib/posts";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaLink } from "react-icons/fa";

export default function ShareButtons({ post }: { post: Post }) {
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const handleShare = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const copyToClipboard = () => {
    if (!shareUrl) return;
    navigator.clipboard.writeText(shareUrl);
  };

  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
      <h2 className="text-base font-semibold text-slate-900">Share this article</h2>
      <p className="mt-1 text-sm text-slate-600">
        Spread the word across your channels.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() =>
            handleShare(
              `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                post.title
              )}&url=${encodeURIComponent(shareUrl)}`
            )
          }
          className="inline-flex items-center gap-2 rounded-full border border-border bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-primary hover:text-primary"
        >
          <FaTwitter className="h-4 w-4 text-[#1DA1F2]" />
          Twitter
        </button>
        <button
          type="button"
          onClick={() =>
            handleShare(
              `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
            )
          }
          className="inline-flex items-center gap-2 rounded-full border border-border bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-primary hover:text-primary"
        >
          <FaFacebookF className="h-4 w-4 text-[#4267B2]" />
          Facebook
        </button>
        <button
          type="button"
          onClick={() =>
            handleShare(
              `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                shareUrl
              )}&title=${encodeURIComponent(post.title)}`
            )
          }
          className="inline-flex items-center gap-2 rounded-full border border-border bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-primary hover:text-primary"
        >
          <FaLinkedinIn className="h-4 w-4 text-[#0A66C2]" />
          LinkedIn
        </button>
        <button
          type="button"
          onClick={copyToClipboard}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-primary hover:text-primary"
        >
          <FaLink className="h-4 w-4" />
          Copy link
        </button>
      </div>
    </div>
  );
}
