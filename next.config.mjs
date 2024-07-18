/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "fsboafrica.com",
      },
    ],
  },
};

export default nextConfig;
