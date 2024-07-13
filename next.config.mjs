/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api-ninjas.com',
        port: '',
        pathname: '/images/airline_logos/**',
        // https://api-ninjas.com/images/airline_logos/emirates.jpg
      },
    ],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}

export default nextConfig