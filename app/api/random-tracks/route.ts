import { NextResponse } from 'next/server';

// Simulované dáta - neskôr nahradiť reálnou DB
const tracks = [
  {
    title: "Neon Nights",
    genre: "Synthwave",
    trackUrl: "https://open.spotify.com/track/...",
    embedUrl: "https://open.spotify.com/embed/track/...",
    imageUrl: "/images/tracks/neon-nights.jpg"
  },
  {
    title: "Cyber Rush",
    genre: "DnB",
    trackUrl: "https://open.spotify.com/track/...",
    embedUrl: "https://open.spotify.com/embed/track/...",
    imageUrl: "/images/tracks/cyber-rush.jpg"
  },
  {
    title: "Digital Dreams",
    genre: "Ambient",
    trackUrl: "https://open.spotify.com/track/...",
    embedUrl: "https://open.spotify.com/embed/track/...",
    imageUrl: "/images/tracks/digital-dreams.jpg"
  },
  {
    title: "Future Beats",
    genre: "Electronic",
    trackUrl: "https://open.spotify.com/track/...",
    embedUrl: "https://open.spotify.com/embed/track/...",
    imageUrl: "/images/tracks/future-beats.jpg"
  },
  {
    title: "Night Drive",
    genre: "Chillwave",
    trackUrl: "https://open.spotify.com/track/...",
    embedUrl: "https://open.spotify.com/embed/track/...",
    imageUrl: "/images/tracks/night-drive.jpg"
  }
];

export async function GET(request: Request) {
  try {
    // Získať count parameter z URL
    const { searchParams } = new URL(request.url);
    const count = parseInt(searchParams.get('count') || '3', 10);

    // Náhodne premiešať pole a vziať prvých N skladieb
    const shuffledTracks = [...tracks]
      .sort(() => Math.random() - 0.5)
      .slice(0, Math.min(count, tracks.length));

    return NextResponse.json(shuffledTracks);
  } catch (error) {
    console.error('Error in random-tracks API:', error);
    return NextResponse.json(
      { error: 'Failed to fetch random tracks' },
      { status: 500 }
    );
  }
} 