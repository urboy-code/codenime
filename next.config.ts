import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'img.youtube.com',
      },
      {
        hostname: 'cdn.myanimelist.net',
      },
      {
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
};

export default nextConfig;
