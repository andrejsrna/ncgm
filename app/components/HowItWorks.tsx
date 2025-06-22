'use client';

import { FaSearch, FaDownload, FaHeart } from 'react-icons/fa';
import { FiCpu } from 'react-icons/fi';
import Link from 'next/link';

const steps = [
  {
    icon: <FaSearch className="w-8 h-8" />,
    title: "Scan the Grid",
    description: "Navigate our neural network of curated tracks to find your sonic signature.",
    color: "from-red-800 to-red-600"
  },
  {
    icon: <FaDownload className="w-8 h-8" />,
    title: "Extract Data",
    description: "Download high-fidelity audio files directly to your local matrix.",
    color: "from-red-800 to-red-600"
  },
  {
    icon: <FaHeart className="w-8 h-8" />,
    title: "Amplify the Signal",
    description: "Boost the collective by linking back to the source (Optional).",
    color: "from-red-800 to-red-600"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-noise opacity-[0.15]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent"></div>
      
      {/* Halftone Pattern */}
      <div 
        className="absolute inset-0 mix-blend-soft-light opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(185, 28, 28, 0.9) 2px, transparent 2px),
            radial-gradient(circle at 0% 0%, rgba(185, 28, 28, 0.9) 2px, transparent 2px)
          `,
          backgroundSize: '24px 24px, 24px 24px',
          backgroundPosition: '0 0, 12px 12px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block p-3 rounded-full bg-red-900/20 mb-4">
            <FiCpu className="w-6 h-6 text-red-500" />
          </div>
          <h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
            style={{ 
              textShadow: '2px 2px 0px rgba(185, 28, 28, 0.3)'
            }}
          >
            System Protocols
          </h2>
          <p className="text-lg text-red-200/70 max-w-2xl mx-auto font-light tracking-wide">
            Initialize your connection to the network in three encrypted steps
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="group relative"
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-900 to-red-800 opacity-75 blur transition duration-500"></div>
              
              {/* Card Content */}
              <div className="relative bg-black border border-red-900/30 p-8 h-full">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-red-800 to-red-600 opacity-75 blur"></div>
                    <div className="relative w-8 h-8 rounded-full bg-black border border-red-800/50 flex items-center justify-center">
                      <span className="text-red-500 font-bold text-sm">{index + 1}</span>
                    </div>
                  </div>
                </div>

                {/* Icon */}
                <div className="relative group/icon mb-6">
                  <div className="absolute -inset-2 bg-gradient-to-r from-red-800 to-red-600 opacity-0 group-hover/icon:opacity-75 blur transition duration-300"></div>
                  <div className="relative w-16 h-16 rounded bg-black border border-red-800/50 p-4 group-hover/icon:border-red-600/50 transition-colors duration-300">
                    <div className="text-red-500 group-hover/icon:text-red-400 transition-colors duration-300">
                      {step.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-medium text-red-300 group-hover:text-red-200 transition-colors duration-300 mb-4">
                  {step.title}
                </h3>
                <p className="text-red-200/70 font-light">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            href="/music"
            className="group relative inline-block"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-red-800 to-red-600 opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
            <div className="relative flex items-center gap-2 px-8 py-4 bg-black border border-red-800/50 group-hover:border-red-600/50 transition-colors duration-500">
              <span className="text-red-400 font-medium tracking-wide">Initialize Connection</span>
              <svg
                className="w-5 h-5 text-red-500 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>
          </Link>
          <p className="mt-6 text-red-300/60 text-sm font-light tracking-wider">
            No authentication required. Direct neural interface available.
          </p>
        </div>
      </div>
    </section>
  );
}
