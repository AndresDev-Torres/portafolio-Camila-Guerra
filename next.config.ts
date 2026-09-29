import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep development output separate from the repository's tracked .next files.
  distDir: '.next-dev',
};

export default nextConfig;
