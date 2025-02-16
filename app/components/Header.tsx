'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Music', href: '/music' },
  { name: 'News', href: '/news' },
  { name: 'Help', href: '/help' },
  { name: 'Contact', href: '/contact' },
];

const musicProfiles = [
  {
    name: 'Spotify',
    href: 'https://open.spotify.com/artist/702mas8Kyj9BGvD6dZGML8?si=uZ9C0L8pQC2sxBD90DhA0Q',
    icon: '🎵',
    color: 'bg-green-500'
  },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className=" w-full z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                NCGM
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors relative ${
                  pathname === item.href ? 'text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <div className="absolute left-0 right-0 h-0.5 bg-blue-500 bottom-[-8px]" />
                )}
              </Link>
            ))}
          </div>

          {/* Music Profile Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {musicProfiles.map((profile) => (
              <a
                key={profile.name}
                href={profile.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium text-white ${profile.color} hover:opacity-90 transition-opacity`}
              >
                <span className="mr-2">{profile.icon}</span>
                {profile.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    pathname === item.href
                      ? 'text-white bg-gray-800'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {/* Mobile music profile buttons */}
              <div className="pt-4 space-y-2">
                {musicProfiles.map((profile) => (
                  <a
                    key={profile.name}
                    href={profile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block px-3 py-2 rounded-md text-base font-medium text-white ${profile.color} hover:opacity-90 transition-opacity`}
                  >
                    <span className="mr-2">{profile.icon}</span>
                    {profile.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
} 