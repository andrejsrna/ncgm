'use client';

import { useState, useEffect, useCallback } from 'react';
import { resolveStrapiImageUrl } from '@/lib/utils';

interface Track {
  id: number;
  Title: string;
  Genre: string;
  Spotify: string;
  spotify_embed: string;
  Cover: {
    name: string;
    url: string;
    formats: {
      large: {
        url: string;
      };
    };
  };
  createdAt: string;
  updatedAt: string;
  slug: string;
  Beatport: string;
}

interface StrapiResponse {
  data: Track[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// removed unused post fetching code

export function useClientMusic(count: number = 3) {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTracks = useCallback(async () => {
    try {
      const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/musicm?pagination[pageSize]=${count}&pagination[page]=1&populate=*`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch music data');
      }

      const data: StrapiResponse = await response.json();
      const shuffledTracks = [...data.data]
        .sort(() => Math.random() - 0.5)
        .slice(0, count);

      setTracks(shuffledTracks);
      setLoading(false);
    } catch (err) {
      setError(`Failed to load tracks: ${err}`);
      setLoading(false);
    }
  }, [count]);

  useEffect(() => {
    fetchTracks();
  }, [fetchTracks]);

  const formattedTracks = tracks.map(track => ({
    title: track.Title,
    genre: track.Genre,
    trackUrl: track.Spotify,
    embedUrl: track.spotify_embed,
    imageUrl: resolveStrapiImageUrl(track.Cover),
    slug: track.slug,
    beatportUrl: track.Beatport
  }));

  return {
    tracks: formattedTracks,
    loading,
    error,
    refetch: fetchTracks
  };
}