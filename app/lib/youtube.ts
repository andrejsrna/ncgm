export interface YouTubeVideo {
  id: string;
  title: string;
  thumbnailUrl: string;
  publishedAt: string;
  url: string;
}

interface YouTubePlaylistItem {
  id: string;
  snippet: {
    title: string;
    publishedAt: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
    resourceId: {
      videoId: string;
    };
  };
}

export async function getLatestVideos(channelId: string, maxResults: number = 12): Promise<YouTubeVideo[]> {
  const apiKey = process.env.YOUTUBE_API_KEY;

  if (!apiKey) {
    console.warn('YouTube API key is missing. Returning placeholder data.');
    return [];
  }

  const playlistId = channelId.replace(/^UC/, 'UU');
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=${maxResults}&key=${apiKey}`;

  try {
    const response = await fetch(url, { next: { revalidate: 3600 } }); // Revalidate every hour

    if (!response.ok) {
      const error = await response.json();
      console.error('YouTube API Error:', error.error.message);
      throw new Error(`Failed to fetch videos: ${response.statusText}`);
    }
    
    const data = await response.json();

    return data.items.map((item: YouTubePlaylistItem): YouTubeVideo => ({
      id: item.id,
      title: item.snippet.title,
      thumbnailUrl: item.snippet.thumbnails.high.url,
      publishedAt: item.snippet.publishedAt,
      url: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
    }));
  } catch (error) {
    console.error('Error fetching latest videos:', error);
    return [];
  }
} 