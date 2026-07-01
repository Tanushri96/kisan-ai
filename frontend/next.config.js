/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "openweathermap.org",
      "images.unsplash.com",
    ],
    remotePatterns: [
      { protocol: "https", hostname: "*.onrender.com" },
      { protocol: "https", hostname: "*.vercel.app" },
    ],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000",
  },
  // Disable strict mode for framer-motion compatibility
  reactStrictMode: false,
};

module.exports = nextConfig;
