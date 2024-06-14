/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/blog/yayu',
                destination: '/blog/yayu_redirects',
                permanent: true,
            },
        ]
    },
    async rewrites() {
        return {
            beforeFiles: [
                {
                    source: '/blog/yayu',
                    destination: '/blog/yayu_beforeFiles',
                },
            ],
            afterFiles: [
                {
                    source: '/blog/yayu',
                    destination: '/blog/yayu_afterFiles',
                },
            ],
            fallback: [
                {
                    source: '/blog/yayu',
                    destination: `/blog/yayu_fallback`,
                },
            ],
        }
    },

    // 跳过尾部斜杠重定向
    skipTrailingSlashRedirect: true,
    // 以获取路由原始的地址，常用于国际化场景中
    skipMiddlewareUrlNormalize: true,
};

export default nextConfig;
