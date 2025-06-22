"use client"

import { Post } from "@/app/lib/posts";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaLink } from 'react-icons/fa';

export default function ShareButtons({ post }: { post: Post }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <div>
      <h2 className="relative inline-block mb-8">
        <span className="absolute -inset-2 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-50 blur"></span>
        <span className="relative text-2xl font-mono font-bold text-red-500 tracking-wider">
          Broadcast Protocol
        </span>
      </h2>

      <div className="flex flex-wrap gap-4">
        <button 
          onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
          className="group relative"
        >
          <div className="absolute -inset-0.5 bg-[#1DA1F2]/20 opacity-75 group-hover:opacity-100 blur transition duration-300" />
          <div className="relative flex items-center gap-2 px-4 py-2 bg-black border border-[#1DA1F2]/30">
            <FaTwitter className="w-5 h-5 text-[#1DA1F2]" />
            <span className="font-mono text-[#1DA1F2]">Neural Link</span>
          </div>
        </button>

        <button 
          onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
          className="group relative"
        >
          <div className="absolute -inset-0.5 bg-[#4267B2]/20 opacity-75 group-hover:opacity-100 blur transition duration-300" />
          <div className="relative flex items-center gap-2 px-4 py-2 bg-black border border-[#4267B2]/30">
            <FaFacebookF className="w-5 h-5 text-[#4267B2]" />
            <span className="font-mono text-[#4267B2]">Social Net</span>
          </div>
        </button>

        <button 
          onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`, '_blank')}
          className="group relative"
        >
          <div className="absolute -inset-0.5 bg-[#0A66C2]/20 opacity-75 group-hover:opacity-100 blur transition duration-300" />
          <div className="relative flex items-center gap-2 px-4 py-2 bg-black border border-[#0A66C2]/30">
            <FaLinkedinIn className="w-5 h-5 text-[#0A66C2]" />
            <span className="font-mono text-[#0A66C2]">Pro Net</span>
          </div>
        </button>

        <button 
          onClick={copyToClipboard}
          className="group relative"
        >
          <div className="absolute -inset-0.5 bg-red-500/20 opacity-75 group-hover:opacity-100 blur transition duration-300" />
          <div className="relative flex items-center gap-2 px-4 py-2 bg-black border border-red-500/30">
            <FaLink className="w-5 h-5 text-red-500" />
            <span className="font-mono text-red-500">Copy Link</span>
          </div>
        </button>
      </div>
    </div>
  );
}
