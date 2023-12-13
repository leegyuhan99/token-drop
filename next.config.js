/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['gateway.ipfscdn.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname:
          'bafybeicx4dg33sf73a3r3bi7b72vnui5nazes5xwbbtwtu2j2kny4jggb4.ipfs.thirdwebstorage.com',
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  },
}

module.exports = nextConfig
