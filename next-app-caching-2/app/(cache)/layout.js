// import Link from 'next/link'

// export const dynamic = 'force-dynamic'

// export default function CacheLayout({
//     children,
// }) {
//     return (
//         <section className="p-5">
//             <nav className="flex items-center justify-center gap-10 text-blue-600 mb-6">
//                 {/* 第一种方式是等。客户端缓存是有自动失效期的，动态渲染 30s，静态渲染 5 分钟。现在是动态渲染，等待 30s 后再点击 About、Settings 就会重新发送请求，显示正确的时间。 */}
//                 {/* <Link href="/about">About</Link>
//                 <Link href="/settings">Settings</Link> */}

//                 {/* 第二种失效方式： 不用 Link 标签，改用原生的 <a> 标签。不过这种方式会导致页面刷新。 */}
//                 <a href="/about">About</a>
//                 <a href="/settings">Settings</a>
//             </nav>

//             {children}
//         </section>
//     )
// }






/**
 * 第三种方式是参照让路由缓存失效的方式：
 * 一种是使用 Server Actions，不过这里我们用不到 Server Actions。
 * 一种是调用 router.refresh，但是使用 router 需要声明为客户端组件，这就需要将布局改为客户端组件，虽然有点糟糕，但是也能用。
 */
// 'use client'

// import { useRouter } from 'next/navigation'

// export default function CacheLayout({
//     children,
// }) {
//     const router = useRouter()

//     return (
//         <section className="p-5">
//             <nav className="flex items-center justify-center gap-10 text-blue-600 mb-6">
//                 <button
//                     onClick={() => {
//                         router.push('/about')
//                         router.refresh()
//                     }}
//                 >About</button>

//                 <button
//                     onClick={() => {
//                         router.push('/settings')
//                         router.refresh()
//                     }}
//                 >Settings</button>
//             </nav>

//             {children}
//         </section>
//     )
// }





/**
 * 第四种方式跟第三种方式都是用 router.refresh，不过实现方式不同。
 */
import Link from 'next/link'
import { Suspense } from 'react'
import { NavigationEvents } from './navigation-events'

export const dynamic = 'force-dynamic'

export default function CacheLayout({
    children,
}) {
    return (
        <section className="p-5">
            <nav className="flex items-center justify-center gap-10 text-blue-600 mb-6">
                <Link href={`/about`}>About</Link>
                <Link href={`/settings`}>Settings</Link>
            </nav>

            {children}

            <Suspense fallback={null}>
                <NavigationEvents />
            </Suspense>
        </section>
    )
}

