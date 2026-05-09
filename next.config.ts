import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/finwise",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
