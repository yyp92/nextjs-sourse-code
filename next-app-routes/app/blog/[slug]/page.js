/**
 * * 动态路由
 * 
 * 当你访问 /blog/a的时候，params 的值为 { slug: 'a' }。
 * 当你访问 /blog/yayu的时候，params 的值为 { slug: 'yayu' }。
 */

export default function Page({ params }) {
    return <div>My Post: {params.slug}</div>
}
  