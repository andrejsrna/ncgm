'use client';

import { Button } from "./ui/button";
import Link from 'next/link';
import { FaPlay, FaMusic, FaArrowRight } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
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
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/70 to-gray-900/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="relative w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-1">
            <div className="absolute inset-0 bg-gray-900 rounded-full m-0.5" />
            <div className="relative w-full h-full flex items-center justify-center">
              <FaMusic className="w-12 h-12 text-blue-400" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            Free High-Quality Music for Your{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Gaming Content
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-100">
            No Copyright. Free to Use. Just Download & Create.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12 animate-fade-in-up delay-200">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
              <FaPlay className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Ready to Use</h3>
              <p className="text-gray-400 text-sm">No complicated licenses or attributions needed</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
              <FaMusic className="w-8 h-8 text-purple-400 mb-4 mx-auto" />
              <h3 className="text-white font-semibold mb-2">High Quality</h3>
              <p className="text-gray-400 text-sm">Professional grade music for your content</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
              <FaArrowRight className="w-8 h-8 text-green-400 mb-4 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Instant Access</h3>
              <p className="text-gray-400 text-sm">Download and start using immediately</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 animate-fade-in-up delay-300">
            <Link href="/music" className="inline-block">
              <Button 
                variant="default" 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-lg px-8 py-6 rounded-xl transform hover:scale-105 transition-all duration-300"
              >
                Browse Music
              </Button>
            </Link>
            <Link href="/about" className="inline-block">
              <Button 
                variant="outline" 
                size="lg"
                className="bg-gray-800/50 text-white backdrop-blur-sm border-gray-700 text-lg px-8 py-6 rounded-xl hover:bg-gray-700/50 transform hover:scale-105 hover:text-white transition-all duration-300"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-12 rounded-full bg-gradient-to-b from-blue-500 to-purple-500" />
        </div>
      </div>
    </section>
  );
}
