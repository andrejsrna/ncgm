import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'admin.nocopyrightgamingmusic.com', pathname: '**' },
      { protocol: 'http', hostname: 'admin.nocopyrightgamingmusic.com', pathname: '**' },
      { protocol: 'http', hostname: 'localhost', port: '1337', pathname: '**' },
      { protocol: 'https', hostname: 'localhost', port: '1337', pathname: '**' },
      { protocol: 'https', hostname: 'cdn.nocopyrightgamingmusic.com', pathname: '**' },
      { protocol: 'https', hostname: 'i.ytimg.com', pathname: '**' },
      { protocol: 'https', hostname: 'img.youtube.com', pathname: '**' },
      { protocol: 'https', hostname: 's3.amazonaws.com', pathname: '**' },
    ],
    domains: ['admin.nocopyrightgamingmusic.com', 'localhost', 'cdn.nocopyrightgamingmusic.com', 'i.ytimg.com', 'img.youtube.com'],
    unoptimized: false,
  },
  //output: "export",

};


export default nextConfig;
