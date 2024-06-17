# Next.js v14 报 document is not defined 这种错怎么办？


## 总结
之所以会出现 window is not defined、document is not defined 这类错误，本质原因是在服务端调用了客户端 API 导致报错。但使用 'use client' 指令并不一定能够解决问题，'use client'指令只能说明组件可以运行在客户端，但并不说明组件只运行在客户端。客户端组件会在服务端进行预渲染，如果要取消掉这个预渲染，可以使用 dynamic 这个函数动态加载客户端组件。

同时，在自己的项目中使用客户端 API 如 window、document 的时候，也要注意避免出现这类错误。可以使用 useEffect、typeof window、dynamic、useMounted 等方式进行妥善处理。
