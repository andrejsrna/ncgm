import { NextResponse } from 'next/server';

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const createNewsletterSubscription = async (email: string) => {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  
  const response = await fetch(`${apiUrl}/api/newsletters`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      data: { email },
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Newsletter subscription failed: ${response.status} ${errorText}`);
  }

  return response;
};

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !validateEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    await createNewsletterSubscription(email);

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to process subscription' },
      { status: 500 }
    );
  }
}