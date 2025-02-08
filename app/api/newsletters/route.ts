import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Validácia emailu
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Tu by ste pridali logiku pre uloženie emailu do databázy
    // Napríklad použitím Strapi API alebo inej databázy
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/newsletters`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          data: {
            email: email,
          },
        }),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to save newsletter subscription');
    }

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