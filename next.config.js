/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['uploads-ssl.webflow.com', 'localhost'],
    unoptimized: true
  }
}

module.exports = nextConfig