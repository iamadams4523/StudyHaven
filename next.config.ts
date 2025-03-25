import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ Skips ESLint errors on build
  },
  /* Add other config options here */
};

export default nextConfig;
