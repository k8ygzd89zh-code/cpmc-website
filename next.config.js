/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/cpmc-website' : '',
  assetPrefix: isProd ? '/cpmc-website' : '',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/cpmc-website' : '',
  },
};

module.exports = nextConfig;
