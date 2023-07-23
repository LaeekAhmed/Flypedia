/** @type {import('next').NextConfig} */
const nextConfig = {
}

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'api-ninjas.com',
          port: '',
          pathname: '/images/airline_logos/**',
        },
      ],
    },
  }
// http://localhost:3000/(https://api-ninjas.com/images/airline_logos/emirates.jpg)y