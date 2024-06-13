/**
 * * 如何获取请求体内容？
 */

// app/items/route.js 
// import { NextResponse } from 'next/server'
 
// export async function POST(request) {
//     const res = await request.json()
//     return NextResponse.json({ res })
// }




// * 如果请求正文是 FormData 类型：
import { NextResponse } from 'next/server'
 
export async function POST(request) {
    const formData = await request.formData()
    const name = formData.get('name')
    const email = formData.get('email')
    
    return NextResponse.json({ name, email })
}
