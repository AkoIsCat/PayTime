/** @type {import('next').NextConfig} */

const { webpack } = require('next/dist/compiled/webpack/webpack');

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development', // 개발 환경에서는 PWA 비활성화
  register: true,
  skipWaiting: true,
});

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/splash',
        permanent: false,
      },
    ];
  },

  // webpack: (config) => {
  //   config.module.rules.push({
  //     test: /\.css$/i,
  //     use: ['css-loader', 'postcss-loader'],
  //   });
  //   return config;
  // },
};

module.exports = withPWA(nextConfig);
