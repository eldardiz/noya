import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["lenis", "gsap"],
  turbopack: { root: __dirname },
};

export default nextConfig;
