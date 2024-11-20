/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      crypto: false,
    };

    // Add exclusion for @mapbox/node-pre-gyp
    config.module.rules.push({
      test: /node_modules\/@mapbox\/node-pre-gyp/,
      loader: 'ignore-loader'
    });

    return config;
  },
}

module.exports = nextConfig;