// app/api/random-track/route.ts
import { NextResponse } from 'next/server';
import axios from 'axios';

// Define the interface for the track data
interface FeaturedTrackData {
  trackUrl: string;
  embedUrl: string;
}

// Environment Variables
const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const artistId = process.env.SPOTIFY_ARTIST_ID;

// Simple in-memory cache
let cachedTracks: any[] | null = null;
let cacheTimestamp: number | null = null;
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

if (!clientId || !clientSecret || !artistId) {
  throw new Error('Missing Spotify configuration in environment variables.');
}

// Function to get Spotify access token
const getSpotifyAccessToken = async (): Promise<string> => {
  const tokenUrl = 'https://accounts.spotify.com/api/token';
  const data = new URLSearchParams();
  data.append('grant_type', 'client_credentials');

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization:
      'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64'),
  };

  try {
    const response = await axios.post(tokenUrl, data.toString(), { headers });
    return response.data.access_token;
  } catch (error) {
    console.error('Error fetching Spotify access token:', error);
    throw new Error('Failed to obtain Spotify access token.');
  }
};

// **Force Dynamic Rendering**
export const dynamic = 'force-dynamic';

// Handler for GET requests
export async function GET() {
  const currentTime = Date.now();

  // Use cached tracks if available and not expired
  if (cachedTracks && cacheTimestamp && currentTime - cacheTimestamp < CACHE_DURATION) {
    const randomTrack = cachedTracks[Math.floor(Math.random() * cachedTracks.length)];
    const featuredTrack: FeaturedTrackData = {
      trackUrl: randomTrack.external_urls.spotify,
      embedUrl: `https://open.spotify.com/embed/track/${randomTrack.id}`,
    };
    return NextResponse.json(featuredTrack);
  }

  try {
    const accessToken = await getSpotifyAccessToken();

    const apiUrl = `https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=US`;

    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const tracks = response.data.tracks;

    if (!tracks || tracks.length === 0) {
      return NextResponse.json({ error: 'No tracks found for this artist.' }, { status: 404 });
    }

    // Cache the tracks
    cachedTracks = tracks;
    cacheTimestamp = currentTime;

    // Select a random track
    const randomIndex = Math.floor(Math.random() * tracks.length);
    const randomTrack = tracks[randomIndex];

    const featuredTrack: FeaturedTrackData = {
      trackUrl: randomTrack.external_urls.spotify,
      embedUrl: `https://open.spotify.com/embed/track/${randomTrack.id}`,
    };

    return NextResponse.json(featuredTrack);
  } catch (error) {
    console.error('Error fetching tracks from Spotify:', error);
    return NextResponse.json({ error: 'Failed to fetch tracks from Spotify.' }, { status: 500 });
  }
}
