/** @type {import('next').NextConfig} */

const destination = process.env.GRAPHQL_HOST || 'http://localhost:5001/graphql'

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/reviews',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/graphql',
        destination,
      },
    ];
  },
  reactStrictMode: true,
};
