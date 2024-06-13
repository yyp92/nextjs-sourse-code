/**
 * * 传入参数
 */
import { NextResponse } from 'next/server'

// request 对象是一个 NextRequest 对象，它是基于 Web Request API 的扩展。使用 request ，你可以快捷读取 cookies 和处理 URL
// context 只有一个值就是 params，它是一个包含当前动态路由参数的对象
export async function GET(request, { params }) {
    const field = request.nextUrl.searchParams.get("dataField")
    const data = await ((await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)).json())

    const result = field    
        ? {[field]: data[field]}
        : data

    return NextResponse.json(result)
}
