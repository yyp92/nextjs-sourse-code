/**
 * * 动态路由
 * 
 * 在命名文件夹的时候，如果你在双方括号内添加省略号，比如 [[...folderName]]，这表示可选的捕获所有后面所有的路由片段。
 * 也就是说，app/shop/[[...slug]]/page.js会匹配 /shop，也会匹配 /shop/clothes、 /shop/clothes/tops、/shop/clothes/tops/t-shirts等等。
 * 它与上一种的区别就在于，不带参数的路由也会被匹配（就比如 /shop）
 */
export default function Page({ params }) {
    return <div>My Shop: {JSON.stringify(params)}</div>
}
