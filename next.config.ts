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
      {
        protocol: 'https',
        hostname: 'admin.nocopyrightgamingmusic.com',
        port: '1337',
        pathname: '**',
      },
      {
        protocol: 'http',
        hostname: 'admin.nocopyrightgamingmusic.com',
        port: '1337',
        pathname: '**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '**',
      }
    ],
    domains: ['admin.nocopyrightgamingmusic.com'],
    unoptimized: true,
  },
  //output: "export",

};


export default nextConfig;
