/**
 * * 中间件相关配置
 */
const legacyPrefixes = ['/docs', '/blog']
 
// skipTrailingSlashRedirect
// 这里我们实现了除 /docs 和 /blog 作为前缀的路由之外，其他路由都自动添加上尾部斜杠
// export default async function middleware(req) {
//     const { pathname } = req.nextUrl
    
//     if (legacyPrefixes.some((prefix) => pathname.startsWith(prefix))) {
//         return NextResponse.next()
//     }
    
//     // 应用尾部斜杠
//     if (
//         !pathname.endsWith('/') &&
//         !pathname.match(/((?!\.well-known(?:\/.*)?)(?:[^/]+\/)*[^/]+\.\w+)/)
//     ) {
//         req.nextUrl.pathname += '/'
//         return NextResponse.redirect(req.nextUrl)
//     }
// }



// skipMiddlewareUrlNormalize
export default async function middleware(req) {
    const { pathname } = req.nextUrl
   
    // GET /_next/data/build-id/hello.json
   
    console.log(pathname)
    // 如果设置为 true，值为：/_next/data/build-id/hello.json
    // 如果没有配置，值为： /hello
}
  
