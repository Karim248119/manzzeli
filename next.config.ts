import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "images.unsplash.com",
      "plus.unsplash.com",
      "unsplash.com",
      "images.pexels.com",
      "cdn.prod.website-files.com",
      "cdn.shopify.com",
      "www.duchateau.com",
    ],
  },
};

export default nextConfig;
