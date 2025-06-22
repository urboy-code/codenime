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
      {
        hostname: 'lh3.googleusercontent.com',
      },
      {
        hostname: 'awtpg6qnzjnyg0he.public.blob.vercel-storage.com',
      },
    ],
  },
};

export default nextConfig;
