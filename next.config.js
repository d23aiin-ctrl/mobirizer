const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // No external images used
  // Preserve trailing slashes for URL compatibility
  trailingSlash: false,
  // Enable React strict mode for better development
  reactStrictMode: true,
  // Compiler options
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

module.exports = withNextIntl(nextConfig);
