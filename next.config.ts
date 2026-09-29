import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep dev output separate; Vercel and production use Next's default `.next` directory.
  distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next',
};

export default nextConfig;
