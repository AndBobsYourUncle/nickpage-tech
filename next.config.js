/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'CDN-Cache-Control',
            value: 'public, max-age=31536000',
          },
          {
            key: 'Cloudflare-CDN-Cache-Control',
            value: 'public, max-age=31536000',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig