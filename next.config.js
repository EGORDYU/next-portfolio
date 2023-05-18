/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    // do not use https://
    //array of whitelisted domains
    domains: ["placekitten.com"]
  }
}

module.exports = nextConfig
