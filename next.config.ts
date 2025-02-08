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
        protocol: 'http',
        hostname: 'x4wk4848sckkks44cs0w4sgw.188.245.226.152.sslip.io',
        port: '',
        pathname: '/**',
      },
      // If you also have HTTPS version, add it too
      {
        protocol: 'https',
        hostname: 'x4wk4848sckkks44cs0w4sgw.188.245.226.152.sslip.io',
        port: '',
        pathname: '/**',
      },
      // For local development
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/**',
      }
    ],
  },
  //output: "export",

};


export default nextConfig;
