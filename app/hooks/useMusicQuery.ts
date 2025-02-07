import { useState, useEffect } from 'react';

// Define the type for your music data
interface MusicData {
  id: string;
  attributes: {
    title: string;
    spotify: string;
    appleMusic: string;
    iTunes: string;
    youtubeMusic: string;
    amazon: string;
    pandora: string;
    deezer: string;
    tidal: string;
    iHeartRadio: string;
    boomplay: string;
    beatport: string;
    cover: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    description: string;
    genre: string;
  };
}

export const useMusicQuery = () => {
  const [music, setMusic] = useState<MusicData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchMusic = async () => {
      try {
        const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/musicm?populate=*`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch music data');
        }

        const data = await response.json();
        console.log('Fetched data:', data);
        setMusic(data.data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'));
        console.error('Fetch error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMusic();
  }, []);

  return { music, isLoading, error };
};