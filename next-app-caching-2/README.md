# 缓存篇 | Caching（下）


## 总结
路由缓存和完整路由缓存的区别：
- 路由缓存发生在用户访问期间，将 RSC Payload 暂时存储在浏览器，导航期间都会持续存在，页面刷新的时候会被清除。而完整路由缓存则会持久的将 RSC Payload 和 HTML 缓存在服务器上
- 完整路由缓存仅缓存静态渲染的路由，路由缓存可以应用于静态和动态渲染的路由

在实际项目开发中，路由缓存可能是一个让人头疼的问题。因为它经常使用，但又无法退出，为此有的时候需要特殊处理，所以关于路由缓存可以多关注一下。我们在实战篇的第一个项目《实战篇 | React Notes | 笔记预览界面》还会遇到路由缓存。


### Next.js 会自动根据你使用的 API 做好缓存管理，具体 API 跟四种缓存的关系表为：
| API | 	路由缓存 | 	完整路由缓存 | 	数据缓存 | 	请求记忆 | 
| :---        |    :---    |        :---  |         :---  |         :---  |
| <Link prefetch> | Cache	|  |  |  | 		
| router.prefetch | Cache	|  |  |  | 			
| router.refresh | 	Revalidate	|  |  |  | 			
| fetch	 |  |  | Cache	| Cache |
| fetch options.cache |  |  | Cache or Opt out	|  | 
| fetch options.next.revalidate	  |  | 	Revalidate | Revalidate	 |  | 
| fetch options.next.tags |  | 	Cache | Cache |  | 	
| revalidateTag | 	Revalidate (Server Action) | 	Revalidate | 	Revalidate |  | 	
| revalidatePath | 	Revalidate (Server Action) | 	Revalidate | 	Revalidate |  | 	
| const revalidate |  | Revalidate or Opt out | Revalidate or Opt out |  | 
| const dynamic	 |  | 	Cache or Opt out | 	Cache or Opt out |  | 	
| cookies | 	Revalidate (Server Action) | 	Opt out	 |  |  | 	
| headers, searchParams |  | Opt out |  |  | 		
| generateStaticParams |  | Cache |  |  | 		
| React.cache |  |  |  | Cache | 

> 注：Cache 表示触发缓存，Revalidate 表示触发重新验证，Opt out 表示触发退出缓存

在开发项目中遇到缓存问题的时候，可以先根据使用的 API 判断涉及的缓存类型，然后再选择合适的方式重新验证或者退出缓存。
