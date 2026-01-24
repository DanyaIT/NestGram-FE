import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: "standalone",
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.yandexcloud.net",
        pathname: "/images-bucket-for-nest/**",
      },
      {
        protocol: "https",
        hostname: "www.svgrepo.com",
      },
    ],
    dangerouslyAllowSVG: true,
  },
  experimental: {
    optimizePackageImports: ["tailwindcss"],
  },
};

export default nextConfig;
