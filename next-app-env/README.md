# 配置篇 | 环境变量、路径别名与 src 目录


## 变量
### 默认环境变量
通常一个 `.env.local` 文件就够用了，但有的时候，你也许会希望在 `development（next dev）` 或 `production（next start）` 环境中添加一些默认值。

Next.js 支持在 `.env`（所有环境）、`.env.development`（开发环境）、`.env.production`（生产环境）中设置默认的值。

`.env.local` 会覆盖这些默认值。

注意：`.env、.env.development、.env.production` 用来设置默认的值，所有这些文件可以放到仓库中，但 `.env*.local` 应该添加到 `.gitignore`，因为可能涉及到一些机密的信息。

此外，如果环境变量 `NODE_ENV` 未设置，当执行 `next dev`的时候，Next.js 会自动给 `NODE_DEV`赋值 `development`，其他命令则会赋值 `production`。也就是说，当执行 next dev或者其他命令的时候，获取 `process.env.NODE_ENV` 是有值的，这是 Next.js 自动赋值的，为了帮助开发者区分开发环境。


### 测试环境变量
除了 `development`环境和 `production`环境，还有第三个选项，那就是 `test` 环境。这是当使用测试工具如 jest或 cypress时，出于测试目的而设置特定的环境变量。

用法跟开发环境、生产环境类似，建立一个 `.env.test` 文件用于测试环境，但是跟开发环境、生产环境不同的是，测试环境不会加载 `.env.local` 中的值，这是为了让每个人都产生相同的测试结果。这些默认值会在 NODE_DEV设置成 test的时候用到。


### 环境变量加载顺序
环境变量的查找也是有顺序的，一旦找到，就会终止查找，不会再往下查找，这个顺序是：
- `process.env`
- `.env.$(NODE_ENV).local`
- `.env.local` (当 NODE_ENV 是 test 的时候不会查找)
- `.env.$(NODE_ENV)`
- `.env`

举个例子，如果你在 `.env.development.local` 和 `.env` 中设置了 `NODE_ENV` 为 `development`，按照这个顺序，最终会使用 `.env.development.local` 中的值。




## src 目录
至今我们都是把代码放在根目录下的app 或 pages 目录下，但 Next.js 也支持 src 目录，将代码放在 src 目录下有助于实现应用程序代码和项目配置文件（多在项目根目录）分离。

使用 src 目录，将 app 下或者 pages 下的文件移动到 src/app 或 src/pages 即可

调整的时候注意：
- `/public`m目录继续放在项目根目录
- `package.json、next.config.js、tsconfig.json` 等配置文件继续放在项目根目录
- `.env.*` 文件继续放在项目根目录
- 如果 `app` 或者 `pages` 在根目录下存在，`src/app` 或 `src/pages` 会被忽略。
- 如果你正在使用 `src`，你可能还需要移动其他应用文件夹，如 `/components` 或 `/lib`
- 如果你正在使用中间件，确保它放在 `src` 目录下
- 如果你正在使用 `Tailwind CSS`，别忘了修改 `tailwind.config.js` 中的 `content` 配置项：
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{html,js}',
    ],
    // ...
}
```
