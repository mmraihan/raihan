import type { NextConfig } from "next";

// GitHub Pages serves the site from https://mmraihan.github.io/raihan/
const basePath = process.env.NODE_ENV === 'production' ? '/raihan' : '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
