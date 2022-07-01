/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_KUNA_URL: process.env.API_KUNA_URL
  }
}

module.exports = nextConfig
