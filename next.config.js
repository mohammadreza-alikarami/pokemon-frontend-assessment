/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/PokeAPI/sprites/**',
      },
    ],
    minimumCacheTTL: 60 * 60 * 24, // Cache images for 24 hours
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push('@libsql/client');
    }
    return config;
  },
};

module.exports = nextConfig;
