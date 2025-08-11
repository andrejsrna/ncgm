import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Authorization',
            value: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'admin.nocopyrightgamingmusic.com', pathname: '**' },
      { protocol: 'http', hostname: 'admin.nocopyrightgamingmusic.com', pathname: '**' },
      { protocol: 'http', hostname: 'localhost', port: '1337', pathname: '**' },
      { protocol: 'https', hostname: 'localhost', port: '1337', pathname: '**' },
    ],
    domains: ['admin.nocopyrightgamingmusic.com', 'localhost'],
    unoptimized: false,
  },
  //output: "export",

};


export default nextConfig;
