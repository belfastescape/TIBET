/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      },
    ],
    localPatterns: [
      {
        pathname: '/placeholder.svg',
        search: '**',
      },
      {
        pathname: '/images/**',
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    qualities: [75, 80],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // IMPROVEMENT: Add AVIF format for better compression
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  headers: async () => [
    {
      source: '/placeholder.svg',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
    {
      source: '/images/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
    // IMPROVEMENT: Add font caching
    {
      source: '/fonts/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
    // IMPROVEMENT: Add CSS/JS caching
    {
      source: '/_next/static/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
    // Add booking system preconnect here when you choose a provider
    // { source: '/booking', headers: [{ key: 'Link', value: '<YOUR_BOOKING_SYSTEM_URL>; rel=preconnect; crossorigin' }] },
  ],
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons', 'date-fns', 'framer-motion'],
    // Inline CSS to remove render-blocking stylesheet requests (improves LCP/FCP; Tailwind stays small)
    inlineCss: true,
  },
  // Required: Next.js 16 uses Turbopack by default
  turbopack: {},
  // IMPROVEMENT: Compress output
  compress: true,
}

module.exports = nextConfig