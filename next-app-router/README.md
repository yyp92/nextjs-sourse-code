# app router


## 小结
这一节我们重点讲解了 Next.js 基于文件系统的路由解决方案 App Router，介绍了用于定义页面的page.js、定义布局的layout.js、定义模板的template.js、定义加载界面的loading.js、定义错误处理的error.js、定义 404 页面的not-found.js。现在你再看 App Router 的这个目录结构：

```bash
src/
└── app
    ├── page.js 
    ├── layout.js
    ├── template.js
    ├── loading.js
    ├── error.js
    └── not-found.js
    ├── about
    │   └── page.js
    └── more
        └── page.js
```

> 简单的来说，App Router 制定了更加完善的规范，使代码更好被组织和管理。

