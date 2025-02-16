'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaSpotify } from 'react-icons/fa';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [acceptPolicy, setAcceptPolicy] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setMessage('Please enter your email');
      setStatus('error');
      return;
    }

    if (!acceptPolicy) {
      setMessage('Please accept the privacy policy');
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
        throw new Error('Failed to subscribe');
      }

      setStatus('success');
      setMessage('Successfully subscribed to newsletter!');
      setEmail('');
      setAcceptPolicy(false);
    } catch {
      setStatus('error');
      setMessage('Failed to subscribe. Please try again.');
    }
  };

    return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-400">
      {/* Newsletter section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-white text-xl font-bold mb-2">Stay in the loop</h3>
              <p className="text-sm text-gray-400">Get the latest music updates and exclusive offers.</p>
            </div>
            <div className="w-full md:w-auto">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow md:w-64"
                    disabled={status === 'loading'}
                  />
                  <button 
                    type="submit"
                    disabled={status === 'loading' || !acceptPolicy}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </div>

                {/* Privacy Policy Checkbox */}
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="privacy-policy"
                    checked={acceptPolicy}
                    onChange={(e) => setAcceptPolicy(e.target.checked)}
                    className="mt-1"
                  />
                  <label htmlFor="privacy-policy" className="text-sm text-gray-400">
                    I agree to the{' '}
                    <Link 
                      href="/privacy" 
                      className="text-blue-400 hover:text-blue-300 underline"
                    >
                      privacy policy
                    </Link>
                    {' '}and consent to receiving newsletter emails.
                  </label>
                </div>

                {message && (
                  <p className={`text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                    {message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.png"
                alt="NCGM Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm mb-6">
              No Copyright Gaming Music provides high-quality, royalty-free music for content creators and gamers.
              Our mission is to empower creators with the best music for their content.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://music.youtube.com/channel/UC6FzeY54doTLkzPJYaapmnQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://open.spotify.com/artist/702mas8Kyj9BGvD6dZGML8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full"
              >
                <FaSpotify className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/music" className="text-sm hover:text-white transition-colors">
                  Music Library
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Licensing Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/license" className="text-sm hover:text-white transition-colors">
                  License Terms
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/dmca" className="text-sm hover:text-white transition-colors">
                  DMCA Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/faq" className="text-sm hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-sm hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-sm hover:text-white transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <a href="mailto:support@ncgm.com" className="text-sm hover:text-white transition-colors">
                  support@ncgm.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-center md:text-left mb-4 md:mb-0">
          © {new Date().getFullYear()} No Copyright Gaming Music. All rights reserved.
        </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="/cookies" className="text-sm hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
      </footer>
    );
  }
  