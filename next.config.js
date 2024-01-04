/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: 'images.ctfassets.net',
        protocol: 'https'
      },
      {
        hostname: 'assets.tina.io',
        protocol: 'https'
      }
    ]
  }
}

module.exports = nextConfig
