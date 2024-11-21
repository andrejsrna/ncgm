// components/FeaturedTrack.jsx
'use client';

import React from 'react';

export default function FeaturedTrack() {
  return (
    <section className="py-12 bg-destructive text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 font-gaming">Featured Track</h2>
        <div className="flex justify-center">
          <div className="w-full max-w-sm">
            <iframe
              src="https://open.spotify.com/embed/track/3GxDjf1oRkj7VE0w1Rkqnn" // Replace with your track's embed URL
              width="100%"
              height="352"
              frameBorder="0"
              allow="encrypted-media"
              title="Featured Track on Spotify"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}