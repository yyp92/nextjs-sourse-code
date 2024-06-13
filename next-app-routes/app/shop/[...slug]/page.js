/**
 * * 动态路由
 * 
 * 在命名文件夹的时候，如果你在方括号内添加省略号，比如 [...folderName]，这表示捕获所有后面所有的路由片段。
 * 也就是说，app/shop/[...slug]/page.js会匹配 /shop/clothes，也会匹配 /shop/clothes/tops、/shop/clothes/tops/t-shirts等等。
 * 
 * 当你访问 /shop/a的时候，params 的值为 { slug: ['a'] }。
 * 当你访问 /shop/a/b的时候，params 的值为 { slug: ['a', 'b'] }。
 * 当你访问 /shop/a/b/c的时候，params 的值为 { slug: ['a', 'b', 'c'] }。
 */

export default function Page({ params }) {
    return <div>My Shop: {JSON.stringify(params)}</div>
}
  