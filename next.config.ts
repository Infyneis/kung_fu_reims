import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  // Transpile Three.js packages for proper SSR handling
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],

  // Image optimization domains (add your image CDN here)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  // Enable experimental features for performance
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

export default withNextIntl(nextConfig);
