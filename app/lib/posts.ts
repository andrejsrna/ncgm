export interface Post {
  pubDate: string;
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

interface ApiResponse {
  data: Post[];
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

const createApiRequest = (endpoint: string) => {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  
  return fetch(`${apiUrl}/api/posts${endpoint}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    next: { revalidate: 3600 },
  });
};

const handleApiError = async (response: Response, context: string) => {
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`${context}: ${response.status} ${errorText}`);
  }
};

export const getPosts = async (): Promise<Post[]> => {
  try {
    const response = await createApiRequest('?populate=*');
    await handleApiError(response, 'Failed to fetch posts');
    
    const data: ApiResponse = await response.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  try {
    const response = await createApiRequest(`?filters[slug][$eq]=${slug}&populate=*`);
    await handleApiError(response, 'Failed to fetch post');
    
    const data: ApiResponse = await response.json();
    return data.data?.[0] || null;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
};