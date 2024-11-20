// components/CallToAction.jsx
'use client';

import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="py-12 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Elevate Your Gaming Content?
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Start streaming our high-quality, copyright-free music today and enhance your gaming experience!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* Start Streaming on Spotify */}
          <a
            href="https://open.spotify.com/artist/702mas8Kyj9BGvD6dZGML8?si=uZ9C0L8pQC2sxBD90DhA0Q" // Replace with your Spotify artist link
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <Button
              variant="spotify"
              className="px-6 py-3 text-lg font-semibold"
            >
              Start Streaming on Spotify
            </Button>
          </a>

          {/* Where to Stream */}
          <Link href="#services" className="no-underline">
            <Button
              variant="secondary"
              className="px-6 py-3 text-lg font-semibold"
            >
              Where to Stream
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}