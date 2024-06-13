/**
 * * 缓存行为
 */
// export async function GET() {
//     // console.log('GET /api/time')
//     // return Response.json({ data: new Date().toLocaleTimeString() })


//     const searchParams = request.nextUrl.searchParams
//     return Response.json({ data: new Date().toLocaleTimeString(), params: searchParams.toString() })
// }



// 添加其他 HTTP 方法，比如 POST
// export async function GET() {
//     console.log('GET /api/time')
//     return Response.json({ data: new Date().toLocaleTimeString() })
// }

// export async function POST() {
//     console.log('POST /api/time')
//     return Response.json({ data: new Date().toLocaleTimeString() })
// }



// 使用像 cookies、headers 这样的动态函数
// export async function GET(request) {
//     const token = request.cookies.get('token')
//     return Response.json({ data: new Date().toLocaleTimeString() })
// }
  



// 手动设置为了动态渲染模式
// export const dynamic = 'force-dynamic'

// export async function GET() {
//     return Response.json({ data: new Date().toLocaleTimeString() })
// }




/**
 * 重新验证
 */
// 表示设置重新验证频率为 10s
export const revalidate = 10

export async function GET() {
    return Response.json({ data: new Date().toLocaleTimeString() })
}

  
