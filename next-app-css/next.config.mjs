/** @type {import('next').NextConfig} */
import sass from 'sass';


const nextConfig = {
    sassOptions: {
        // Prefer `dart-sass`
        implementation: sass,
    },
};

export default nextConfig;
