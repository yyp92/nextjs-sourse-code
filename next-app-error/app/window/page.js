/**
 * * 使用 window、document 等客户端 API 时
 * 
 * 命令行中依然还有 window is not defined错误提示
 */
'use client'

import { useState, useEffect } from "react";
import dynamic from 'next/dynamic'



// 1. useEffect
// export default function Page() {
//     const [width, setWidth] = useState(0)

//     useEffect(() => {
//         setWidth(window.innerWidth)
//     }, [])

//     return (
//         <div className="p-5">
//             innerWidth: {width}
//         </div>
//     )
// }



// 2. typeof window
// export default function Page() {
//     if (typeof window !== 'undefined') {
//         window.addEventListener("resize", () => {
//             console.log(window.innerWidth)
//         })
//     }
  
//     return (
//         <div className="p-5">
//             addEventListener resize
//         </div>
//     )
// }




// 3. dynamic
// const Width = dynamic(() => import('./width'), { ssr: false })
  
// export default function Page() {
//     return <Width />;
// };




// 4. useMounted hook
import { useMounted } from './useMounted'

export default function Page() {
    const mounted = useMounted()

    if (!mounted) return null
        
    return (
        <div className="p-5">
            innerWidth: {window.innerWidth}
        </div>
    )
}
  
  