'use client';

import Link from 'next/link';
import { FaMusic } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-gray-950">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0 opacity-80">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
          poster="/images/hero-fallback.jpeg"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          {/* Fallback image is shown if video fails to load */}
        </video>
        {/* Overlay gradient - Darker and slightly different angle */}
        <div className="absolute inset-0 bg-gradient-to-tl from-gray-950 via-gray-900/80 to-black/60" />
        {/* Optional: Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 md:pb-32 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8 animate-fade-in">
          {/* Sharper logo container - Hexagon-like shape (approximated with clip-path) */}
          <div className="relative w-24 h-[8.6rem] bg-gradient-to-br from-blue-600 to-purple-600 p-1"
               style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
            <div className="absolute inset-0.5 bg-gray-900"
                 style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
            <div className="relative w-full h-full flex items-center justify-center">
              <FaMusic className="w-12 h-12 text-blue-400 group-hover:text-blue-300 transition-colors" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6 md:space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 animate-fade-in-up tracking-tight">
            Free High-Quality Music
            <br className="hidden md:block" /> for Your{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Gaming Content
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in-up delay-100">
            No Copyright. Free to Use. Just Download & Create.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 animate-fade-in-up delay-300">
            <Link href="/music" className="inline-block">
              <Button
                variant="default"
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-base md:text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-300 font-semibold"
              >
                Browse Music
              </Button>
            </Link>
            <Link href="/about" className="inline-block">
              <Button
                variant="outline"
                size="lg"
                className="bg-gray-800/60 text-gray-300 backdrop-blur-sm border-gray-600 hover:border-blue-500 text-base md:text-lg px-8 py-4 rounded-lg hover:bg-gray-700/70 transform hover:scale-105 hover:text-white transition-all duration-300 font-semibold"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator - Chevron */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
           <FiChevronDown className="w-8 h-8 text-gray-500" />
        </div>
      </div>
    </section>
  );
}
