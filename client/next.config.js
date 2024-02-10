/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                pathname: '**',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                pathname: '**',
            },
        ]
    },
    output: "standalone",
    async redirects() {
        return [
            {
                source: '/products',
                destination: '/',
                permanent: true,
            },
        ]
    }
}

module.exports = nextConfig
