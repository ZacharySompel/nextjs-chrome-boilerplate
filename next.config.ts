import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export", // Forces full static export
  basePath: "", // Avoids URL conflicts
  distDir: "out", // Ensures the build output goes to "out/"
  images: {
    unoptimized: true, // Prevents Next.js from using automatic image optimization (needed for static export)
  },
  trailingSlash: true, // Ensures compatibility with Chrome extensions
  webpack: (config) => {
    config.resolve.fallback = { fs: false }; // Prevents Webpack from bundling Node.js modules
    return config;
  },
};

export default nextConfig;
