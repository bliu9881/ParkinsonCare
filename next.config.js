/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize build performance and memory usage
  experimental: {
    // Reduce memory usage during build
    optimizePackageImports: ["@aws-amplify/ui-react", "aws-amplify"],
  },
  // Reduce bundle size
  swcMinify: true,
  // Optimize images
  images: {
    unoptimized: true, // For static export compatibility
  },
  // Reduce memory usage during build
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Optimize for production builds
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: "all",
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: "vendors",
              chunks: "all",
            },
          },
        },
      };
    }
    return config;
  },
};

module.exports = nextConfig;
