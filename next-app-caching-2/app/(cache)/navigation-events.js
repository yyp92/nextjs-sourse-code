// 第四种方式跟第三种方式都是用 router.refresh，不过实现方式不同。

'use client'
 
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

export function NavigationEvents() {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const router = useRouter()
    
    useEffect(() => {
        router.refresh()
    }, [pathname, searchParams])
    
    return null
}
