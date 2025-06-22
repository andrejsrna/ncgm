import { NextResponse } from 'next/server';
import axios from 'axios';

interface FeaturedTrackData {
  trackUrl: string;
  embedUrl: string;
}

interface SpotifyTrack {
  id: string;
  name: string;
  external_urls: {
    spotify: string;
  };
}

interface SpotifyResponse {
  tracks: SpotifyTrack[];
}

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const artistId = process.env.SPOTIFY_ARTIST_ID;

let cachedTracks: SpotifyTrack[] | null = null;
let cacheTimestamp: number | null = null;
const CACHE_DURATION = 60 * 60 * 1000;

if (!clientId || !clientSecret || !artistId) {
  throw new Error('Missing Spotify configuration in environment variables.');
}

const getSpotifyAccessToken = async (): Promise<string> => {
  const tokenUrl = 'https://accounts.spotify.com/api/token';
  const data = new URLSearchParams();
  data.append('grant_type', 'client_credentials');

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64'),
  };

  try {
    const response = await axios.post(tokenUrl, data.toString(), { headers });
    return response.data.access_token;
  } catch (error) {
    console.error('Error fetching Spotify access token:', error);
    throw new Error('Failed to obtain Spotify access token.');
  }
};

const createFeaturedTrack = (track: SpotifyTrack): FeaturedTrackData => ({
  trackUrl: track.external_urls.spotify,
  embedUrl: `https://open.spotify.com/embed/track/${track.id}`,
});

const getRandomTrack = (tracks: SpotifyTrack[]): SpotifyTrack => {
  const randomIndex = Math.floor(Math.random() * tracks.length);
  return tracks[randomIndex];
};

const fetchAndCacheTracks = async (): Promise<SpotifyTrack[]> => {
  const accessToken = await getSpotifyAccessToken();
  const apiUrl = `https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=US`;

  const response = await axios.get<SpotifyResponse>(apiUrl, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const tracks = response.data.tracks;
  if (!tracks || tracks.length === 0) {
    throw new Error('No tracks found for this artist.');
  }

  cachedTracks = tracks;
  cacheTimestamp = Date.now();
  return tracks;
};

export const dynamic = 'force-dynamic';

export async function GET() {
  const currentTime = Date.now();

  if (cachedTracks && cacheTimestamp && currentTime - cacheTimestamp < CACHE_DURATION) {
    const randomTrack = getRandomTrack(cachedTracks);
    return NextResponse.json(createFeaturedTrack(randomTrack));
  }

  try {
    const tracks = await fetchAndCacheTracks();
    const randomTrack = getRandomTrack(tracks);
    return NextResponse.json(createFeaturedTrack(randomTrack));
  } catch (error) {
    console.error('Error fetching tracks from Spotify:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to fetch tracks from Spotify.';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
