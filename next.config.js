/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    env: {
        MONGODB_URI: process.env.MONGODB_URI,
    },
}