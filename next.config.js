/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:["lh3.googleusercontent.com","www.kindpng.com","cdn.pixabay.com"]
  }
}

module.exports = nextConfig
