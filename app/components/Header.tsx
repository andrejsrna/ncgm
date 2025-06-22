'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { musicServices } from './MusicProfile';
import { FiHeadphones } from 'react-icons/fi';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Music', href: '/music' },
  { name: 'News', href: '/news' },
  { name: 'Mixes', href: '/mixes' },
  { name: 'Help', href: '/help' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMusicModalOpen, setIsMusicModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90' : 'bg-transparent'
      }`}>
        {/* Animated border effect */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-red-800/50 to-transparent animate-pulse-slow"></div>
        
        {/* Noise texture overlay */}
        <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none"></div>

        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="w-full py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="group flex items-center">
                <div className="relative">
                  <span className="absolute -inset-1 bg-gradient-to-r from-red-800/50 to-red-600/50 blur group-hover:blur-md transition-all duration-300"></span>
                  <span className="relative text-2xl font-bold bg-gradient-to-r from-red-400 to-red-600 text-transparent bg-clip-text group-hover:from-red-300 group-hover:to-red-500 transition-all duration-300">
                    NCGM
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-all duration-300 relative group ${
                    pathname === item.href ? 'text-red-400' : 'text-gray-400 hover:text-red-400'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {pathname === item.href ? (
                    <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-red-800 via-red-600 to-red-800 bottom-[-4px] animate-pulse"></div>
                  ) : (
                    <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-800/50 to-transparent bottom-[-4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                </Link>
              ))}
            </div>

            {/* Music Profile Button (Desktop) */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => setIsMusicModalOpen(true)}
                className="group relative px-6 py-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-900/50 to-red-700/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border border-red-800/50 group-hover:border-red-600/50 transition-colors duration-300"></div>
                <div className="relative flex items-center space-x-2">
                  <FiHeadphones className="w-4 h-4 text-red-500 group-hover:text-red-400 transition-colors duration-300" />
                  <span className="text-sm font-medium text-red-400 group-hover:text-red-300 transition-colors duration-300">
                    Listen Now
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative group p-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 to-red-700/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></div>
                <div className={`w-6 h-px bg-red-500 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[5px]' : ''}`}></div>
                <div className={`w-6 h-px bg-red-500 mt-1 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 h-px bg-red-500 mt-1 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}></div>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 relative group ${
                    pathname === item.href
                      ? 'text-red-400 bg-red-900/20'
                      : 'text-gray-400 hover:text-red-400 hover:bg-red-900/10'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              ))}
              {/* Mobile Listen Now Button */}
              <div className="pt-4">
                <button
                  onClick={() => {
                    setIsMusicModalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full relative group px-3 py-2 rounded-md"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 to-red-700/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 border border-red-800/30 rounded-md"></div>
                  <div className="relative flex items-center justify-center space-x-2">
                    <FiHeadphones className="w-4 h-4 text-red-500" />
                    <span className="text-red-400">Listen Now</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Music Services Modal */}
      {isMusicModalOpen && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-lg flex items-center justify-center z-[100] p-4 transition-opacity duration-300"
          onClick={() => setIsMusicModalOpen(false)}
        >
          {/* Neural Grid Background */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 50% 50%, rgba(185, 28, 28, 0.15) 1px, transparent 1px),
                radial-gradient(circle at 0% 0%, rgba(185, 28, 28, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '24px 24px, 24px 24px',
              backgroundPosition: '0 0, 12px 12px'
            }}
          />

          {/* Modal Container with Glitch Effect */}
          <div className="relative group w-full max-w-md">
            {/* Glitch Effect Layers */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/50 via-red-800/30 to-red-900/50 opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-red-900/30 via-transparent to-red-900/30 animate-pulse"></div>
            
            {/* Main Modal Content */}
            <div className="relative bg-black/90 shadow-[0_0_25px_rgba(185,28,28,0.2)] w-full max-h-[80vh] overflow-y-auto border border-red-800/30">
              {/* Modal noise texture */}
              <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none mix-blend-soft-light"></div>
              
              {/* Content Container */}
              <div className="relative p-8" onClick={(e) => e.stopPropagation()}>
                {/* Close Button */}
                <button
                  onClick={() => setIsMusicModalOpen(false)}
                  className="absolute top-4 right-4 group"
                  aria-label="Close modal"
                >
                  <div className="absolute inset-0 bg-red-900/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <FaTimes className="relative w-5 h-5 text-red-500 group-hover:text-red-400 transition-colors duration-300" />
                </button>

                {/* Title with Glitch Effect */}
                <div className="text-center mb-8">
                  <h2 className="relative text-2xl font-bold glitch-text">
                    <span className="block absolute -left-0.5 -top-0.5 text-red-600 opacity-80 blur-[1px]">
                      Neural Audio Interface
                    </span>
                    <span className="relative text-red-500">
                      Neural Audio Interface
                    </span>
                  </h2>
                  <p className="text-red-300/70 text-sm mt-2 font-mono">
                    Select your preferred sonic transmission protocol
                  </p>
                </div>

                {/* Services Grid */}
                <div className="space-y-3">
                  {musicServices.map((service) => (
                    <a
                      key={service.name}
                      href={service.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative block"
                    >
                      {/* Hover Glow Effect */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-900 to-red-600 opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
                      
                      {/* Service Container */}
                      <div className="relative flex items-center p-4 bg-black/60 border border-red-800/30 group-hover:border-red-600/50 transition-all duration-300">
                        {/* Service Icon */}
                        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-sm mr-4 bg-red-900/20 border border-red-800/30 group-hover:border-red-600/50 transition-all duration-300">
                          {service.isCustomIcon ? (
                            <Image
                              src={service.icon}
                              alt={`${service.name} Logo`}
                              width={20}
                              height={20}
                              className="opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                          ) : (
                            <span className="text-xl text-red-500 group-hover:text-red-400 transition-colors">
                              {service.icon}
                            </span>
                          )}
                        </div>

                        {/* Service Info */}
                        <div className="flex-1">
                          <h3 className="text-red-400 group-hover:text-red-300 font-medium transition-colors">
                            {service.name}
                          </h3>
                        </div>

                        {/* Arrow Icon */}
                        <div className="ml-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                          <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>

                        {/* Scanline Effect */}
                        <div className="absolute inset-0 bg-scanline opacity-[0.03] pointer-events-none"></div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Bottom Text */}
                <p className="mt-6 text-center text-xs font-mono text-red-400/60">
                  SYSTEM.NOTE: Additional protocols available in{' '}
                  <Link href="/help" className="text-red-400 hover:text-red-300 transition-colors">
                    neural support matrix
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
