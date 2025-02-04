/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development', // 개발 환경에서는 PWA 비활성화
  register: true,
  skipWaiting: true,
});

const nextConfig = {};

module.exports = withPWA(nextConfig);
