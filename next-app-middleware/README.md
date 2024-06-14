# 路由篇 | 中间件


## 执行顺序
在 Next.js 中，有很多地方都可以设置路由的响应，比如 next.config.js 中可以设置，中间件中可以设置，具体的路由中可以设置，所以要注意它们的执行顺序：
- headers（next.config.js）
- redirects（next.config.js）
- 中间件 (rewrites, redirects 等)
- beforeFiles (next.config.js中的rewrites)
- 基于文件系统的路由 (public/, _next/static/, pages/, app/ 等)
- afterFiles (next.config.js中的rewrites)
- 动态路由 (/blog/[slug])
- fallback中的 (next.config.js中的rewrites)

> 注： beforeFiles 顾名思义，在基于文件系统的路由之前，afterFiles顾名思义，在基于文件系统的路由之后，fallback顾名思义，垫底执行。


