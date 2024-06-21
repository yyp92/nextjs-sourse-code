/** @type {import('next').NextConfig} */
const nextConfig = {
    // Next.js 要求在 next.config.js文件中定义支持的远程图片地址，这是为了防止一些恶意使用。
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 's3.amazonaws.com',
                port: '',
                pathname: '/my-bucket/**',
            },
        ],
    },
};

export default nextConfig;
