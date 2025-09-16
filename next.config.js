/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async headers() {
    return [
      {
        // Static assets - long cache with immutable
        source: '/_next/static/:path*',
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
      {
        // Images - moderate cache
        source: '/:path*\\.(png|jpg|jpeg|gif|svg|webp|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400',
          },
          {
            key: 'CDN-Cache-Control',
            value: 'public, max-age=86400',
          },
          {
            key: 'Cloudflare-CDN-Cache-Control',
            value: 'public, max-age=86400',
          },
        ],
      },
      {
        // Fonts - moderate cache
        source: '/:path*\\.(woff|woff2|ttf|otf)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400',
          },
          {
            key: 'CDN-Cache-Control',
            value: 'public, max-age=86400',
          },
          {
            key: 'Cloudflare-CDN-Cache-Control',
            value: 'public, max-age=86400',
          },
        ],
      },
      {
        // HTML pages - short cache for coming soon page
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=300, s-maxage=3600',
          },
          {
            key: 'CDN-Cache-Control',
            value: 'public, max-age=3600',
          },
          {
            key: 'Cloudflare-CDN-Cache-Control',
            value: 'public, max-age=3600',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig