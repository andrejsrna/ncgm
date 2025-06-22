'use client';

import Link from 'next/link';
import { FiChevronDown } from 'react-icons/fi';
import Image from 'next/image';
import { FaLongArrowAltRight } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex pt-32 items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Rain Effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-fallback.jpeg"
          alt="Cyberpunk city"
          fill
          className="object-cover opacity-40 saturate-50 contrast-125 brightness-75"
          priority
        />
        {/* Noir Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-900/40 to-black opacity-95" />
        
        {/* Comic-style Halftone Pattern */}
        <div 
          className="absolute inset-0 mix-blend-color-burn opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 50%, rgba(185, 28, 28, 0.9) 2px, transparent 2px),
              radial-gradient(circle at 0% 0%, rgba(185, 28, 28, 0.9) 2px, transparent 2px)
            `,
            backgroundSize: '8px 8px, 8px 8px',
            backgroundPosition: '0 0, 4px 4px'
          }}
        />

        {/* Rain Effect */}
        <div className="absolute inset-0 rain-animation opacity-15" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 md:pb-32 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-12 animate-float">
          <div className="relative w-48 h-48 drop-shadow-[0_0_25px_rgba(185,28,28,0.3)]">
            <Image
              src="/logo.png"
              alt="NCGM Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8 md:space-y-10">
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 animate-fade-in-up glitch-text"
            style={{ 
              textShadow: `
                2px 2px 0px rgba(185, 28, 28, 0.6),
                -2px -2px 0px rgba(153, 27, 27, 0.6),
                0 0 25px rgba(220, 38, 38, 0.4)
              `
            }}
          >
            Echoes in the
            <br className="hidden md:block" />{' '}
            <span className="bg-gradient-to-r from-red-800 via-red-600 to-red-800 bg-clip-text text-transparent">
              Digital Rain
            </span>
          </h1>

          <p className="text-base md:text-lg text-red-200/70 max-w-2xl mx-auto animate-fade-in-up delay-100 tracking-wider font-light">
            Where Neon Dreams Meet Sonic Reality —<br className="hidden sm:block" />
            Your Soundtrack to the Urban Shadows
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center pt-12 animate-fade-in-up delay-300">
            <Link href="/music" className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-800 to-red-600 opacity-75 group-hover:opacity-100 blur-sm transition duration-500"></div>
              <div className="relative flex items-center gap-2 px-8 py-4 bg-black border border-red-800/50 hover:border-red-600/50 transition-colors duration-500">
                <span className="relative">
                  <span className="block absolute -left-0.5 -top-0.5 text-red-600 opacity-80 transform scale-110 blur-[1px]">
                    Enter the Void
                  </span>
                  <span className="relative text-red-500 font-mono tracking-wider text-lg">
                    Enter the Void
                  </span>
                </span>
                <FaLongArrowAltRight className="w-6 h-6 text-red-500 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 border border-red-800/50 group-hover:border-red-600/50 transition-colors duration-500"></div>
              </div>
            </Link>

            <Link href="/about" className="group relative perspective-1000">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-900 to-red-700 opacity-50 group-hover:opacity-75 blur transition duration-500"></div>
              <div className="relative flex items-center gap-2 px-8 py-4 bg-black border border-red-900/30 hover:border-red-700/30 transition-colors duration-500 transform-gpu group-hover:translate-z-10">
                <span className="relative">
                  <span className="block absolute -left-0.5 -top-0.5 text-red-800 opacity-80 transform scale-110 blur-[1px]">
                    Decode the Signal
                  </span>
                  <span className="relative text-red-200 font-mono tracking-wider text-lg">
                    Decode the Signal
                  </span>
                </span>
                <FaLongArrowAltRight className="w-6 h-6 text-red-300 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 border border-red-900/30 group-hover:border-red-700/30 transition-colors duration-500"></div>
              </div>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
           <FiChevronDown className="w-8 h-8 text-red-600/70 animate-bounce-slow" />
        </div>
      </div>
    </section>
  );
}
