// app/components/FeaturedTrack.tsx
'use client';

import React, { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';

interface FeaturedTrackData {
  trackUrl: string;
  embedUrl: string;
}

const FeaturedTrack: React.FC = () => {
  const [featuredTrack, setFeaturedTrack] = useState<FeaturedTrackData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeaturedTrack = async () => {
      try {
        const response = await axios.get<FeaturedTrackData>('/api/random-track');
        setFeaturedTrack(response.data);
        setLoading(false);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          const axiosError = err as AxiosError;
          console.error('Error fetching featured track:', axiosError.response?.data || axiosError.message);
        } else {
          console.error('Unexpected error:', err);
        }
        setError('Failed to load featured track.');
        setLoading(false);
      }
    };

    fetchFeaturedTrack();
  }, []);

  if (loading) {
    return (
      <section className="py-12 bg-destructive text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-gaming">Featured Track</h2>
          <p>Loading...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 bg-destructive text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-gaming">Featured Track</h2>
          <p>{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-destructive text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 font-gaming">Featured Track</h2>
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <iframe
              src={featuredTrack?.embedUrl}
              width="100%"
              height="80"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              title="Featured Track on Spotify"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
        <p className="mt-4">
          <a
            href={featuredTrack?.trackUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:underline"
          >
            Listen on Spotify
          </a>
        </p>
      </div>
    </section>
  );
};

export default FeaturedTrack;