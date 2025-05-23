/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Add experimental features
  experimental: {
    // Add any valid experimental features here
  },
  // Configuration for GitHub Pages
  output: 'export',
  // Important: Only set basePath when not on a custom domain
  // Remove or comment these out if using a custom domain
  basePath: process.env.GITHUB_ACTIONS ? '/workforce-spotlight' : '',
  assetPrefix: process.env.GITHUB_ACTIONS ? '/workforce-spotlight/' : '',
  trailingSlash: true,
}

export default nextConfig
