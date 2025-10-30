import { NextResponse } from 'next/server';
import { getMusicData, type MusicData } from '@/app/hooks/useMusicQuery';
import { resolveStrapiImageUrl } from '@/lib/utils';

interface TrackData {
  title: string;
  genre?: string;
  label?: string;
  trackUrl?: string | null;
  embedUrl?: string | null;
  imageUrl: string;
}

const transformMusicData = (musicData: MusicData): TrackData => {
  const spotifyId = musicData.Spotify
    ? musicData.Spotify.split("/").pop()?.split("?")[0]
    : undefined;

  return {
    title: musicData.Title,
    genre: musicData.genre?.Genres || undefined,
    label: musicData.label?.name || undefined,
    trackUrl: musicData.Spotify,
    embedUrl:
      musicData.spotify_embed ||
      (spotifyId
        ? `https://open.spotify.com/embed/track/${spotifyId}`
        : undefined),
    imageUrl:
      resolveStrapiImageUrl(musicData.Cover) || "/images/default-track.jpg",
  };
};

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const count = parseInt(searchParams.get('count') || '3', 10);
    
    const musicData = await getMusicData();
    const transformedTracks = musicData.map(transformMusicData);
    
    const shuffledTracks = transformedTracks
      .sort(() => Math.random() - 0.5)
      .slice(0, Math.min(count, transformedTracks.length));

    return NextResponse.json(shuffledTracks);
  } catch (error) {
    console.error('Error in random-tracks API:', error);
    return NextResponse.json(
      { error: 'Failed to fetch random tracks' },
      { status: 500 }
    );
  }
}
