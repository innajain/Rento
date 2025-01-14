/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
        },
      ],
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.svgr$/,
        use: ['@svgr/webpack'], // Add support for importing SVGs as React components
      });
      return config;
    },
  };
  
  export default nextConfig;
  