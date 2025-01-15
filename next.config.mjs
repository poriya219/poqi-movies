/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'moviesapi.ir'
            },
        ]
    }
};

export default nextConfig;
