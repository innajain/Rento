/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
            },
            {
            protocol: 'https',
            hostname:'rorimages.220c10dcefc010788cf016f5e8c6ec0c.r2.cloudflarestorage.com'
            }
        ]
    }
};

export default nextConfig;
