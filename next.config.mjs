/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable service worker in development
  experimental: {
    webpackBuildWorker: false,
  },
  // Headers to prevent service worker caching issues
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
    ]
  },
};

export default nextConfig;
