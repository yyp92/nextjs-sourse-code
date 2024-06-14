/**
 * * 中间件逻辑
 */
import { NextResponse } from 'next/server'
import { isAuthenticated } from '@lib/auth'
 
// 如何读取和设置 cookies？
// export function middleware(request) {
//     // 假设传入的请求 header 里 "Cookie:nextjs=fast"
//     let cookie = request.cookies.get('nextjs')
//     // => { name: 'nextjs', value: 'fast', Path: '/' }
//     console.log(cookie) 

//     const allCookies = request.cookies.getAll()
//     // => [{ name: 'nextjs', value: 'fast' }]
//     console.log(allCookies)
    
//     request.cookies.has('nextjs') // => true
//     request.cookies.delete('nextjs')
//     request.cookies.has('nextjs') // => false
    
//     // 设置 cookies
//     const response = NextResponse.next()
//     response.cookies.set('vercel', 'fast')
//     response.cookies.set({
//         name: 'vercel',
//         value: 'fast',
//         path: '/',
//     })
//     cookie = response.cookies.get('vercel')
//     console.log(cookie) // => { name: 'vercel', value: 'fast', Path: '/' }
    
//     // 响应 header 为 `Set-Cookie:vercel=fast;path=/test`
//     return response
// }




// 如何读取和设置 headers？
// export function middleware(request) {
//     //  clone 请求标头
//     const requestHeaders = new Headers(request.headers)
//     requestHeaders.set('x-hello-from-middleware1', 'hello')
    
//     // 你也可以在 NextResponse.rewrite 中设置请求标头
//     const response = NextResponse.next({
//         request: {
//             // 设置新请求标头
//             headers: requestHeaders,
//         },
//     })
    
//     // 设置新响应标头 `x-hello-from-middleware2`
//     response.headers.set('x-hello-from-middleware2', 'hello')
//     return response
// }





// CORS
// const allowedOrigins = ['https://acme.com', 'https://my-app.org']
 
// const corsOptions = {
//     'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//     'Access-Control-Allow-Headers': 'Content-Type, Authorization',
// }
 
// export function middleware(request) {
//     // Check the origin from the request
//     const origin = request.headers.get('origin') ?? ''
//     const isAllowedOrigin = allowedOrigins.includes(origin)
    
//     // Handle preflighted requests
//     const isPreflight = request.method === 'OPTIONS'
    
//     if (isPreflight) {
//         const preflightHeaders = {
//             ...(isAllowedOrigin && { 'Access-Control-Allow-Origin': origin }),
//             ...corsOptions,
//         }

//         return NextResponse.json({}, { headers: preflightHeaders })
//     }
    
//     // Handle simple requests
//     const response = NextResponse.next()
    
//     if (isAllowedOrigin) {
//         response.headers.set('Access-Control-Allow-Origin', origin)
//     }
    
//     Object.entries(corsOptions).forEach(([key, value]) => {
//         response.headers.set(key, value)
//     })
    
//     return response
// }
 
// export const config = {
//     matcher: '/api/:path*',
// }






// 如何直接响应?
export const config = {
    matcher: '/api/:function*',
}
 
export function middleware(request) {
    // 鉴权判断
    if (!isAuthenticated(request)) {
        // 返回错误信息
        return new NextResponse(
            JSON.stringify({
                success: false,
                message: 'authentication failed'
            }),
            {
                status: 401,
                headers: {
                    'content-type': 'application/json'
                }
            }
        )
    }
}

