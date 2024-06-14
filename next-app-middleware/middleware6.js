/**
 * * 运行时
 * 
 * 这就是初学者写中间件常犯的一个错误。之所以出错，是因为 limiter 其实是一个用在 node.js 环境的库，然而目前 Middleware 只支持 Edge runtime，并不支持 Node.js runtime，所以才会报错。
 */
import { NextResponse } from 'next/server'
import { RateLimiter } from "limiter";

const limiter = new RateLimiter({
    tokensPerInterval: 3,
    interval: "min",
    fireImmediately: true
});

export async function middleware(request) {
    const remainingRequests = await limiter.removeTokens(1);

    if (remainingRequests < 0) {
        return new NextResponse(
            JSON.stringify({
                success: false,
                message: 'Too Many Requests'
            }),
            {
                status: 429,
                headers: {
                    'content-type': 'application/json'
                }
            }
        )
    }

    return NextResponse.next()
}

// 设置匹配路径
export const config = {
  matcher: '/api/chat',
}
