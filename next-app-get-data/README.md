# 数据获取篇 | 数据获取、缓存与重新验证


## 退出数据缓存
当 `fetch` 请求满足这些条件时都会退出数据缓存：
- fetch 请求添加了 cache: 'no-store' 选项
- fetch 请求添加了 revalidate: 0 选项
- fetch 请求在路由处理程序中并使用了 POST 方法
- 使用headers 或 cookies 的方法之后使用 fetch请求
- 配置了路由段选项 const dynamic = 'force-dynamic'
- 配置了路由段选项 fetchCache ，默认会跳过缓存
- fetch 请求使用了 Authorization或者 Cookie请求头，并且在组件树中其上方还有一个未缓存的请求

