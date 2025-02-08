// components/Support.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { FaHeadset, FaBook, FaEnvelope, FaDiscord } from 'react-icons/fa';

const supportOptions = [
  {
    title: 'Help Center',
    description: 'Browse through our comprehensive guides and documentation',
    icon: <FaBook className="w-6 h-6" />,
    href: '/help',
    color: 'from-blue-600 to-blue-400',
    buttonText: 'View Guides'
  },
  {
    title: 'Contact Support',
    description: 'Get in touch with our dedicated support team',
    icon: <FaHeadset className="w-6 h-6" />,
    href: '/contact',
    color: 'from-purple-600 to-purple-400',
    buttonText: 'Contact Us'
  }
];

const quickLinks = [
  {
    title: 'Email Support',
    description: 'support@nocopyrightgamingmusic.com',
    icon: <FaEnvelope />,
    href: 'mailto:support@nocopyrightgamingmusic.com'
  },
  {
    title: 'Discord Community',
    description: 'Join our Discord server',
    icon: <FaDiscord />,
    href: 'https://discord.gg/nocopyrightgamingmusic'
  }
];

const Support: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Need Assistance?
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We&apos;re here to help! Choose the support option that works best for you.
          </p>
        </div>

        {/* Main Support Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {supportOptions.map((option) => (
            <Link
              key={option.title}
              href={option.href}
              className="group relative overflow-hidden rounded-2xl bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r opacity-75 group-hover:opacity-100 transition-opacity"
                   style={{ backgroundImage: `linear-gradient(to right, ${option.color})` }} />
              
              <div className="p-8">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${option.color}`}>
                    {option.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {option.title}
                    </h3>
                    <p className="text-gray-400 mb-6">
                      {option.description}
                    </p>
                    <span className="inline-flex items-center text-white font-medium group-hover:translate-x-1 transition-transform">
                      {option.buttonText}
                      <svg
                        className="ml-2 w-4 h-4"
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
              className="flex items-center space-x-4 p-6 rounded-xl bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300"
            >
              <div className="text-2xl text-gray-400">
                {link.icon}
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">
                  {link.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {link.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm">
            Our support team typically responds within 24 hours during business days.
            For immediate assistance, check our{' '}
            <Link href="/help" className="text-blue-400 hover:text-blue-300 transition-colors">
              help documentation
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Support;
