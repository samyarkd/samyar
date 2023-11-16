/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'images.ctfassets.net',
        protocol: "https"
      },
      {
        hostname: 'via.placeholder.com',
        protocol: "https"
      },
    ]
  }
}

module.exports = nextConfig
