import './src/env.js'; // validate environment variables on build time

/** @type {import('next').NextConfig} */
const NEXT_CONFIG = {
  experimental: {
    typedRoutes: true,
  },
  // disable eslint & typescript during build
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default NEXT_CONFIG;
