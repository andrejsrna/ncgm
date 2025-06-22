// components/CallToAction.jsx
'use client';

import React from 'react';
import Link from 'next/link';
import { FaLongArrowAltRight } from 'react-icons/fa';

export default function CallToAction() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/10 via-black to-black" />
        
        {/* Noir Grid Pattern */}
        <div 
          className="absolute inset-0 mix-blend-color-burn opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 50%, rgba(185, 28, 28, 0.7) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px'
          }}
        />

        {/* Animated Scan Line */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent opacity-50"
          style={{
            animation: 'scanline 4s linear infinite',
            backgroundSize: '100% 8px'
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        {/* Main Content */}
        <div className="space-y-8">
          {/* Glitch Text Effect */}
          <h2 className="relative text-4xl md:text-5xl font-bold font-mono mb-6 inline-block">
            <span className="absolute -left-0.5 -top-0.5 text-red-600 opacity-80 blur-[1px]">
              Initialize Neural Link
            </span>
            <span className="relative text-white">
              Initialize Neural Link
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-red-200/70 font-mono max-w-2xl mx-auto">
            Access the mainframe. Upload your consciousness.
            <br />
            Your sonic arsenal awaits in the digital void.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
            {/* Primary Action */}
            <Link
              href="https://open.spotify.com/artist/702mas8Kyj9BGvD6dZGML8"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center"
            >
              {/* Button Glow Effect */}
              <div className="absolute -inset-px bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-70 group-hover:opacity-100 blur transition-opacity duration-500" />
              
              {/* Button Content */}
              <div className="relative flex items-center bg-black px-8 py-4 font-mono">
                <div className="flex flex-col items-start">
                  <span className="text-xs text-red-500 mb-1">[EXECUTE]</span>
                  <span className="text-red-400 group-hover:text-red-300 transition-colors">
                    Access Mainframe
                  </span>
                </div>
                <FaLongArrowAltRight className="ml-3 w-5 h-5 text-red-500 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>

            {/* Secondary Action */}
            <Link
              href="/music"
              className="group relative inline-flex items-center"
            >
              {/* Button Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-900/50 to-red-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Button Content */}
              <div className="relative flex items-center px-8 py-4 bg-black border border-red-900/30 group-hover:border-red-700/50 transition-colors font-mono">
                <div className="flex flex-col items-start">
                  <span className="text-xs text-red-800 mb-1">[SCAN]</span>
                  <span className="text-red-200/70 group-hover:text-red-200 transition-colors">
                    Browse Archives
                  </span>
                </div>
                <FaLongArrowAltRight className="ml-3 w-5 h-5 text-red-800 group-hover:text-red-500 group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Add the scanline animation */}
      <style jsx global>{`
        @keyframes scanline {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
      `}</style>
    </section>
  );
}