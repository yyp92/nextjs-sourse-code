/**
 * * 设置匹配路径
 */

// middleware.js
import { NextResponse } from 'next/server'
 
// 中间件可以是 async 函数，如果使用了 await
export function middleware(request) {
    return NextResponse.redirect(new URL('/home', request.url))
}

// 设置匹配路径
export const config = {
    // matcher: '/about/:path*',

    // matcher 不仅支持字符串形式，也支持数组形式，用于匹配多个路径
    // matcher: ['/about/:path*', '/dashboard/:path*'],

    // matcher: [
    //     /*
    //      * 匹配所有的路径除了以这些作为开头的：
    //      * - api (API routes)
    //      * - _next/static (static files)
    //      * - _next/image (image optimization files)
    //      * - favicon.ico (favicon file)
    //      */
    //     '/((?!api|_next/static|_next/image|favicon.ico).*)',
    // ],

    // matcher 的强大可远不止正则表达式，matcher 还可以判断查询参数、cookies、headers
    // 在这个例子中，不仅匹配了路由地址，还要求 header 的 Authorization 必须是 Bearer Token，查询参数的 userId 为 123，且 cookie 里的 session 值不是 active
    matcher: [
        {
            source: '/api/*',
            has: [
                { type: 'header', key: 'Authorization', value: 'Bearer Token' },
                { type: 'query', key: 'userId', value: '123' },
            ],
            missing: [{ type: 'cookie', key: 'session', value: 'active' }],
        },
    ],
}
