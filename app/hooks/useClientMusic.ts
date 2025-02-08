'use client';

import { useState, useEffect, useCallback } from 'react';

interface Track {
  id: number;
    Title: string;
    Genre: string;
    spotify: string;
    spotify_embed: string;
    Cover: {
        name: string;
        url: string;
        formats: {
            large: {
                url: string;
            }
        }
    }
    createdAt: string;
    updatedAt: string;
    slug: string;
    beatport: string;
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
      
      // Náhodne premiešať a vybrať požadovaný počet skladieb
      const shuffledTracks = [...data.data]
        .sort(() => Math.random() - 0.5)
        .slice(0, count);

      setTracks(shuffledTracks);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching tracks:', err);
      setError('Failed to load tracks');
      setLoading(false);
    }
  }, [count]);

  useEffect(() => {
    fetchTracks();
  }, [fetchTracks]);
  console.log(tracks);
  // Transformujeme Strapi dáta do formátu, ktorý očakáva FeaturedTrack komponent
  const formattedTracks = tracks.map(track => ({
    title: track.Title,
    genre: track.Genre,
    trackUrl: track.spotify,
    embedUrl: track.spotify_embed,
    imageUrl: track.Cover.formats.large.url,
    slug: track.slug,
    beatportUrl: track.beatport
  }));

  return { 
    tracks: formattedTracks, 
    loading, 
    error,
    refetch: fetchTracks // Pridané pre prípad, že by sme chceli manuálne obnoviť dáta
  };
} 