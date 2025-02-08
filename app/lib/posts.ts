import { cache } from 'react';

export interface Post {
  id: number;
  title: string;
  description: string;
  content: string;
  slug: string;
  category: string;
  image: {
    formats: {
      large: {
        url: string;
      };
    };
  };
  publishedAt: string;
  updatedAt: string;
}

export const getPosts = cache(async () => {
  try {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    
    console.log('Fetching from:', `${apiUrl}/api/posts?populate=*`); // Debug log
    
    const response = await fetch(
      `${apiUrl}/api/posts?populate=*`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error Status:', response.status);
      console.error('API Error Text:', errorText);
      throw new Error(`Failed to fetch posts: ${response.status} ${errorText}`);
    }

    const data = await response.json();
    console.log('API Response:', data); // Debug log
    
    if (!data.data) {
      console.error('Unexpected API response structure:', data);
      return [];
    }

    return data.data as Post[];
  } catch (error) {
    console.error('Error fetching posts:', error);
    return []; // Return empty array instead of throwing
  }
});

export const getPostBySlug = cache(async (slug: string) => {
  try {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    
    console.log('Fetching post by slug:', slug);
    
    const response = await fetch(
      `${apiUrl}/api/posts?filters[slug][$eq]=${slug}&populate=*`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error Status:', response.status);
      console.error('API Error Text:', errorText);
      return null;
    }

    const data = await response.json();
    console.log('API Response:', data);
    
    if (!data.data || !data.data[0]) {
      console.log('Post not found');
      return null;
    }

    return data.data[0] as Post;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}); 