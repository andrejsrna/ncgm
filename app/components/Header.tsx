'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { musicServices } from './MusicProfile';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Music', href: '/music' },
  { name: 'News', href: '/news' },
  { name: 'Help', href: '/help' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMusicModalOpen, setIsMusicModalOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
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

            {/* Music Profile Button (Desktop) */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => setIsMusicModalOpen(true)}
                className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Listen Now
              </button>
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
                {/* Mobile Listen Now Button */}
                <div className="pt-4">
                   <button
                    onClick={() => {
                      setIsMusicModalOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full block px-3 py-2 rounded-md text-base font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-md text-center"
                  >
                    Listen Now
                  </button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Music Services Modal */}
      {isMusicModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center z-[100] p-4 transition-opacity duration-300"
             onClick={() => setIsMusicModalOpen(false)}
        >
          <div className="bg-gray-900 rounded-xl shadow-2xl w-full max-w-md max-h-[80vh] overflow-y-auto p-6 border border-gray-700 relative"
               onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsMusicModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
              aria-label="Close modal"
            >
              <FaTimes size={20} />
            </button>
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Listen Everywhere</h2>
            <div className="space-y-4">
              {musicServices.map((service) => (
                <a
                  key={service.name}
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center p-4 rounded-lg bg-gray-800/60 hover:bg-gray-700/80 transition-all duration-200 border-l-4"
                  style={{ borderColor: service.color }}
                >
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full mr-4"
                       style={{ backgroundColor: `${service.color}20` }}
                  >
                    {service.isCustomIcon ? (
                      <Image
                        src={service.icon}
                        alt={`${service.name} Logo`}
                        width={20}
                        height={20}
                        className="opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    ) : (
                      <span className="text-xl opacity-90 group-hover:opacity-100 transition-opacity"
                            style={{ color: service.color }}>
                        {service.icon}
                      </span>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-white/90">
                      {service.name}
                    </h3>
                    {service.listeners && (
                       <p className="text-xs font-medium opacity-80" style={{ color: service.color }}>
                         {service.listeners}
                       </p>
                    )}
                  </div>
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors ml-2 opacity-70 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                   </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
