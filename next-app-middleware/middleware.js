/**
 * * 中间件的代码维护
 */
import { NextResponse } from 'next/server'


// 一种简单的方式是:
// async function middleware1(request) {
//     console.log('middleware1: ', request.url)
//     return NextResponse.next()
// }

// async function middleware2(request) {
//     console.log('middleware2: ', request.url)
//     return NextResponse.next()
// }

// export async function middleware(request) {
//     await middleware1(request)
//     await middleware2(request)
// }

// export const config = {
//     matcher: '/api/:path*',
// }





// 一种更为优雅的方式是借助高阶函数：
// function withMiddleware1(middleware) {
//     return async (request) => {
//         console.log('middleware1 ' + request.url)
//         return middleware(request)
//     }
// }
  
// function withMiddleware2(middleware) {
//     return async (request) => {
//         console.log('middleware2 ' + request.url)
//         return middleware(request)
//     }
// }

// async function middleware(request) {
//     console.log('middleware ' + request.url)
//     return NextResponse.next()
// }

// export default withMiddleware2(withMiddleware1(middleware))

// export const config = {
//     matcher: '/api/:path*',
// }





// 但这样写起来还是有点麻烦，让我们写一个工具函数帮助我们
function chain(functions, index = 0) {
    const current = functions[index];

    if (current) {
        const next = chain(functions, index + 1);
        return current(next);
    }

    return () => NextResponse.next();
}

function withMiddleware1(middleware) {
    return async (request) => {
        console.log('middleware1 ' + request.url)
        return middleware(request)
    }
}

function withMiddleware2(middleware) {
    return async (request) => {
        console.log('middleware2 ' + request.url)
        return middleware(request)
    }
}

// 答案是按数组的顺序，middleware1、middleware2
export default chain([withMiddleware1, withMiddleware2])

export const config = {
    matcher: '/api/:path*',
}
