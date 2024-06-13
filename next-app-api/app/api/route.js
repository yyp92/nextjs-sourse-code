/**
 * 如何处理 Cookie？
 * 如何处理 Headers ？
 * 如何设置 CORS ？
 */

// 第一种方法是通过 NextRequest对象：
// app/api/route.js
// export async function GET(request) {
//     const token = request.cookies.get('token')
//     request.cookies.set(`token2`, 123)

//     const headersList = new Headers(request.headers)
//     const referer = headersList.get('referer')
// }



// 第二种方法是通过next/headers包提供的 cookies方法。
// 因为 cookies 实例只读，如果你要设置 Cookie，你需要返回一个使用 Set-Cookie header 的 Response 实例。
// 因为 headers 实例只读，如果你要设置 headers，你需要返回一个使用了新 header 的 Response 实例。
// app/api/route.js
import { cookies, headers } from 'next/headers'
 
export async function GET(request) {
    const cookieStore = cookies()
    const token = cookieStore.get('token')
    const headersList = headers()
    const referer = headersList.get('referer')

    
    return new Response('Hello, Next.js!', {
        status: 200,
        headers: { 
            'Set-Cookie': `token=${token}`,
            referer: referer ,

            // 跨域
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
    })
}






/**
 *  如何重定向？
 */
// import { redirect } from 'next/navigation'
 
// export async function GET(request) {
//     redirect('https://nextjs.org/')
// }

  