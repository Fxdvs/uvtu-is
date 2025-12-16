import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Pre statický export
  trailingSlash: true, // ⬅️ ZMENIŤ na true pre Netlify
};

export default nextConfig;
