/**
 * * 404
 * 
 * 只能由两种情况触发: 
 * 1.当组件抛出了 notFound 函数的时候
 * 2.当路由地址不匹配的时候
 */
import Link from 'next/link'
 
export default function NotFound() {
    return (
        <div>
            <h2>Not Found</h2>

            <p>Could not find requested resource</p>

            <Link href="/">Return Home</Link>
        </div>
    )
}
