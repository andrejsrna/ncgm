// components/Support.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { FaTerminal, FaNetworkWired, FaEnvelope } from 'react-icons/fa';

const supportOptions = [
  {
    title: 'Neural Database',
    description: 'Access the mainframe knowledge core for instant protocol guidance',
    icon: <FaTerminal className="w-6 h-6" />,
    href: '/help',
    buttonText: 'Initialize Connection'
  },
  {
    title: 'Direct Neural Link',
    description: 'Establish real-time synaptic connection with our support matrix',
    icon: <FaNetworkWired className="w-6 h-6" />,
    href: '/contact',
    buttonText: 'Open Channel'
  }
];

const quickLinks = [
  {
    title: 'Quantum Transmission',
    description: 'support@nocopyrightgamingmusic.com',
    icon: <FaEnvelope />,
    href: 'mailto:support@nocopyrightgamingmusic.com'
  },
];

const Support: React.FC = () => {
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
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="relative text-4xl font-bold font-mono text-white mb-6 inline-block">
            <span className="absolute -left-0.5 -top-0.5 text-red-600 opacity-80 blur-[1px]">
              System Assistance Protocol
            </span>
            <span className="relative">
              System Assistance Protocol
            </span>
          </h2>
          <p className="text-lg text-red-200/70 font-mono max-w-2xl mx-auto">
            Neural support matrix online. Select your preferred connection interface.
          </p>
        </div>

        {/* Main Support Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {supportOptions.map((option) => (
            <Link
              key={option.title}
              href={option.href}
              className="group relative"
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-px bg-gradient-to-r from-red-800/50 via-red-600/50 to-red-800/50 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
              
              {/* Card Content */}
              <div className="relative p-8 bg-black border border-red-900/30 backdrop-blur-sm">
                <div className="flex items-start space-x-6">
                  {/* Icon Container */}
                  <div className="relative">
                    <div className="absolute -inset-px bg-gradient-to-r from-red-800 to-red-600 blur-sm opacity-75" />
                    <div className="relative p-3 bg-black border border-red-800/50">
                      <div className="text-red-500">
                        {option.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-mono font-medium text-red-400 mb-2">
                      {option.title}
                    </h3>
                    <p className="text-gray-400 font-mono text-sm mb-6">
                      {option.description}
                    </p>
                    <span className="inline-flex items-center font-mono text-red-200/70 group-hover:text-red-200 transition-colors">
                      <span className="text-xs text-red-800 mr-2">[SYS]</span>
                      {option.buttonText}
                      <svg
                        className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
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
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-2 gap-6">
          {quickLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group relative flex items-center"
            >
              {/* Link Glow Effect */}
              <div className="absolute -inset-px bg-gradient-to-r from-red-900/30 to-red-800/30 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
              
              {/* Link Content */}
              <div className="relative flex items-center space-x-4 p-6 bg-black border border-red-900/20 w-full">
                <div className="text-2xl text-red-800 group-hover:text-red-500 transition-colors">
                  {link.icon}
                </div>
                <div>
                  <h3 className="text-lg font-mono font-medium text-red-400">
                    {link.title}
                  </h3>
                  <p className="text-sm font-mono text-gray-500">
                    {link.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center font-mono">
          <p className="text-gray-500 text-sm">
            Neural response time: ~24 cycles (business days).
            For instant protocol access, connect to our{' '}
            <Link href="/help" className="text-red-500 hover:text-red-400 transition-colors">
              knowledge matrix
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Support;
