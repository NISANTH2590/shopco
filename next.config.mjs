/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
    async headers() {
        return [
            {
                source: '/(.*)',  // This applies to all routes
                headers: [
                    {
                        key: "Access-Control-Allow-Origin",
                        value: "*",  // Allow all origins
                    },
                ],
            }
        ];
    },
};

export default nextConfig;
