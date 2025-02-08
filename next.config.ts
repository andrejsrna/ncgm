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
    domains: ['admin.nocopyrightgamingmusic.com'], // Simpler approach
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.nocopyrightgamingmusic.com',
        pathname: '/uploads/**',
      },
      {
        protocol: 'http',
        hostname: 'admin.nocopyrightgamingmusic.com',
        pathname: '/uploads/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      }
    ],
  },
  //output: "export",

};


export default nextConfig;
