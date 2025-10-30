'use client';

import { useState, useEffect, useCallback } from 'react';
import { resolveStrapiImageUrl } from '@/lib/utils';
import type { MusicData } from '@/app/hooks/useMusicQuery';

export function useClientMusic(count: number = 3) {
  const [tracks, setTracks] = useState<MusicData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTracks = useCallback(async () => {
    try {
      const response = await fetch(`/api/music?count=${count}`, {
        cache: 'no-store',
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch music data: ${response.status}`);
      }

      const data: { tracks: MusicData[] } = await response.json();
      const selected = Array.isArray(data.tracks) ? data.tracks : [];

      setTracks(selected);
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
    label: track.label
      ? {
          name: track.label.name,
          short: track.label.short,
          slug: track.label.slug,
        }
      : undefined,
    genre: track.genre?.Genres,
    trackUrl: track.Spotify,
    embedUrl: track.spotify_embed,
    imageUrl: resolveStrapiImageUrl(track.Cover),
    slug: track.slug,
    beatportUrl: track.Beatport ?? undefined,
  }));

  return {
    tracks: formattedTracks,
    loading,
    error,
    refetch: fetchTracks
  };
}
