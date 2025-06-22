'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaSpotify, FaTerminal, FaLongArrowAltRight } from 'react-icons/fa';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [acceptPolicy, setAcceptPolicy] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setMessage('ERROR: Email parameter required');
      setStatus('error');
      return;
    }

    if (!acceptPolicy) {
      setMessage('ERROR: Protocol acceptance required');
      setStatus('error');
      return;
    }

    try {
      setStatus('loading');
      const response = await fetch('/api/newsletters', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Neural link failed');
      }

      setStatus('success');
      setMessage('Neural link established successfully');
      setEmail('');
      setAcceptPolicy(false);
    } catch {
      setStatus('error');
      setMessage('Connection failed. Retry neural sync.');
    }
  };

  return (
    <footer className="relative bg-black text-gray-400 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/5 to-black" />
        
        {/* Noir Grid Pattern */}
        <div 
          className="absolute inset-0 mix-blend-color-burn opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 50%, rgba(185, 28, 28, 0.7) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      {/* Newsletter section */}
      <div className="relative border-b border-red-900/20">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-red-500 font-mono text-xl font-bold mb-2">
                <span className="text-xs text-red-800 block">[SYS.COMM]</span>
                Neural Network Sync
              </h3>
              <p className="text-sm font-mono text-red-200/70">
                Initialize connection for priority data transmission.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-grow md:w-64">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter neural key (email)"
                      className="w-full px-4 py-2 bg-black border border-red-900/30 font-mono text-red-200 
                        placeholder:text-red-900/50 rounded-none focus:outline-none focus:border-red-500/50 
                        focus:ring-1 focus:ring-red-500/50 disabled:opacity-50"
                      disabled={status === 'loading'}
                    />
                    <div className="absolute inset-px pointer-events-none">
                      <div className="absolute -left-px top-0 w-[2px] h-full bg-gradient-to-b from-red-800/0 via-red-600/50 to-red-800/0" />
                    </div>
                  </div>
                  <button 
                    type="submit"
                    disabled={status === 'loading' || !acceptPolicy}
                    className="group relative px-6 py-2 font-mono disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="absolute -inset-px bg-gradient-to-r from-red-800 via-red-600 to-red-800 
                      opacity-70 group-hover:opacity-100 group-disabled:opacity-30 blur transition-opacity duration-500" />
                    <div className="relative flex items-center justify-center bg-black px-4 py-2">
                      <span className="text-red-500 group-hover:text-red-400 transition-colors">
                        {status === 'loading' ? 'Syncing...' : 'Sync'}
                      </span>
                    </div>
                  </button>
                </div>

                {/* Privacy Policy Checkbox */}
                <div className="flex items-start gap-2">
                  <div className="relative w-4 h-4 mt-1">
                    <input
                      type="checkbox"
                      id="privacy-policy"
                      checked={acceptPolicy}
                      onChange={(e) => setAcceptPolicy(e.target.checked)}
                      className="appearance-none w-4 h-4 border border-red-900/30 bg-black 
                        checked:bg-red-500/20 checked:border-red-500/50 focus:outline-none 
                        focus:ring-1 focus:ring-red-500/50"
                    />
                    {acceptPolicy && (
                      <FaTerminal className="absolute inset-0 m-auto w-3 h-3 text-red-500" />
                    )}
                  </div>
                  <label htmlFor="privacy-policy" className="text-sm font-mono text-red-200/70">
                    I accept the{' '}
                    <Link 
                      href="/privacy" 
                      className="text-red-500 hover:text-red-400 transition-colors"
                    >
                      data protocols
                    </Link>
                    {' '}and consent to neural network integration.
                  </label>
                </div>

                {message && (
                  <p className={`text-sm font-mono ${status === 'success' ? 'text-red-500' : 'text-red-800'}`}>
                    {message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6 relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-red-800/50 via-red-600/50 to-red-800/50 
                opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="NCGM Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </div>
            </Link>
            <p className="text-sm font-mono text-red-200/70 mb-6">
              Neural Audio Matrix: Premium-grade sonic algorithms for content enhancement.
              Our directive: Empower digital architects with superior audio protocols.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://music.youtube.com/channel/UC6FzeY54doTLkzPJYaapmnQ"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 to-red-800/30 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative text-red-800 group-hover:text-red-500 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </div>
              </a>
              <a
                href="https://open.spotify.com/artist/702mas8Kyj9BGvD6dZGML8"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 to-red-800/30 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative text-red-800 group-hover:text-red-500 transition-colors">
                  <FaSpotify className="h-5 w-5" />
                </div>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-red-500 font-mono text-lg font-medium mb-4">
              <span className="text-xs text-red-800 block">[NAV]</span>
              System Access
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/music" className="group inline-flex items-center text-sm font-mono text-red-200/70 hover:text-red-400 transition-colors">
                  <FaLongArrowAltRight className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Audio Matrix
                </Link>
              </li>
              <li>
                <Link href="/about" className="group inline-flex items-center text-sm font-mono text-red-200/70 hover:text-red-400 transition-colors">
                  <FaLongArrowAltRight className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Core Protocol
                </Link>
              </li>
              <li>
                <Link href="/contact" className="group inline-flex items-center text-sm font-mono text-red-200/70 hover:text-red-400 transition-colors">
                  <FaLongArrowAltRight className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Neural Link
                </Link>
              </li>
            </ul>
          </div>

          {/* Licensing Info */}
          <div>
            <h3 className="text-red-500 font-mono text-lg font-medium mb-4">
              <span className="text-xs text-red-800 block">[SYS]</span>
              Protocol Index
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/license" className="group inline-flex items-center text-sm font-mono text-red-200/70 hover:text-red-400 transition-colors">
                  <FaLongArrowAltRight className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  License Matrix
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="group inline-flex items-center text-sm font-mono text-red-200/70 hover:text-red-400 transition-colors">
                  <FaLongArrowAltRight className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Data Protocol
                </Link>
              </li>
              <li>
                <Link href="/terms" className="group inline-flex items-center text-sm font-mono text-red-200/70 hover:text-red-400 transition-colors">
                  <FaLongArrowAltRight className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Terms Protocol
                </Link>
              </li>
              <li>
                <Link href="/dmca" className="group inline-flex items-center text-sm font-mono text-red-200/70 hover:text-red-400 transition-colors">
                  <FaLongArrowAltRight className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  DMCA Protocol
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-red-500 font-mono text-lg font-medium mb-4">
              <span className="text-xs text-red-800 block">[HELP]</span>
              Support Matrix
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/faq" className="group inline-flex items-center text-sm font-mono text-red-200/70 hover:text-red-400 transition-colors">
                  <FaLongArrowAltRight className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  System FAQ
                </Link>
              </li>
              <li>
                <Link href="/help" className="group inline-flex items-center text-sm font-mono text-red-200/70 hover:text-red-400 transition-colors">
                  <FaLongArrowAltRight className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Help Node
                </Link>
              </li>
              <li>
                <a href="mailto:support@ncgm.com" className="group inline-flex items-center text-sm font-mono text-red-200/70 hover:text-red-400 transition-colors">
                  <FaLongArrowAltRight className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Direct Link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="relative border-t border-red-900/20">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm font-mono text-red-200/50 text-center md:text-left mb-4 md:mb-0">
              © {new Date().getFullYear()} Neural Copyright Gaming Matrix. All rights secured.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm font-mono text-red-200/50 hover:text-red-400 transition-colors">
                Data
              </Link>
              <Link href="/terms" className="text-sm font-mono text-red-200/50 hover:text-red-400 transition-colors">
                Terms
              </Link>
              <Link href="/cookies" className="text-sm font-mono text-red-200/50 hover:text-red-400 transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
  