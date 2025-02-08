'use client';

import { FaSearch, FaDownload, FaHeart } from 'react-icons/fa';
import Link from 'next/link';

const steps = [
  {
    icon: <FaSearch className="w-8 h-8" />,
    title: "Browse Music",
    description: "Find the perfect track for your content from our curated collection.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: <FaDownload className="w-8 h-8" />,
    title: "Download & Use",
    description: "Get instant access to high-quality tracks ready for your projects.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: <FaHeart className="w-8 h-8" />,
    title: "Credit the Artist",
    description: "Support the community by adding a simple credit (Optional).",
    color: "from-pink-500 to-pink-600"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20" />
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How It Works
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Get started with No Copyright Gaming Music in three simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`relative group animate-fade-in-up delay-${index + 1}00`}
            >
              {/* Step Card */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 h-full transform hover:scale-105 transition-all duration-300">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${step.color} p-4 mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-400">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in-up delay-400">
          <Link 
            href="/music"
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Browse Tracks
          </Link>
          <p className="mt-4 text-gray-400 text-sm">
            No registration required. Start downloading instantly.
          </p>
        </div>
      </div>
    </section>
  );
}
