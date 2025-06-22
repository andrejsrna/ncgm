export interface MusicData {
  pubDate: string | number | Date;
  id: number;
  documentId: string;
  Title: string;
  Spotify: string | null;
  AppleMusic: string | null;
  iTunes: string | null;
  YouTubeMusic: string | null;
  Amazon: string | null;
  Pandora: string | null;
  slug: string;
  Deezer: string | null;
  Tidal: string | null;
  iHeartRadio: string | null;
  Boomplay: string | null;
  Beatport: string | null;
  Description: string | null;
  Cover: {
    name: string;
    url: string;
    formats: {
      large: {
        url: string;
      };
    };
  };
  genre: {
    Genres: string;
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ApiResponse {
  data: MusicData[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export const getMusicData = async () => {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/musicm?populate=*`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch music data');
  }

  const responseData: ApiResponse = await response.json();
  
  return responseData.data || [];
};

export const getMusicBySlug = async (slug: string) => {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/musicm?filters[slug][$eq]=${slug}&populate=*`, 
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    console.error('API Error:', await response.text());
    throw new Error('Failed to fetch music data', { cause: response.status });
  }

  const responseData = await response.json();
  return responseData.data[0]; // Return first matching item since slug should be unique
};