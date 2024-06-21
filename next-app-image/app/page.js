'use client'

import Image from "next/image";

const imageLoader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

  
export default function Home() {
    return (
        <div
            style={{
                width: '200px',
                height: '200px',
                backgroundColor: "#ccc",
                position: 'relative'
            }}
        >
            <Image
                src="/1.jpg"
                // src="https://s3.amazonaws.com/my-bucket/profile.png"

                // width 属性表示图片渲染的宽度，它以像素为单位，影响图片的显示大小。
                // width={500}
                // height 属性表示图片渲染的高度，它以像素为单位，影响图片的显示大小。
                // height={500}

                // alt 属性用于描述图片，提供给屏幕阅读器和搜索引擎使用。
                alt="Picture of the author"

                // loader 表示解析图片地址的自定义函数。
                // loader={imageLoader}

                // fill表示是否将图片填充父元素。默认值为 false。当图片的 width 和 height 未知的时候很有用。
                // 图片会被拉伸以适应容器
                fill={true}
                // 图片在保持其宽高比的同时填充元素的整个内容框
                // style={{objectFit: "contain"}}
                // 图片在保持其宽高比的同时填充元素的整个内容框。如果对象的宽高比与内容框不相匹配，该对象将被剪裁以适应内容框
                // style={{objectFit: "cover"}}


                // 当图片加载完毕的时候，会执行该回调函数，同时占位符图片会被删除。回调函数调用的时候会传入一个参数，该参数是对底层  元素的引用。
                onLoadingComplete={(img) => console.log(img.naturalWidth)} 

                // 同样是图片加载完的时候执行，该回调函数可能会在占位符被删除以及图片被完全解码前执行。所以如果你想等到图片完全加载完毕，使用 onLoadingComplete。
                onLoad={(e) => console.log(e.target.naturalWidth)}

                // 图片加载失败时执行的回调函数。
                onError={(e) => console.error(e.target.id)}
            />
        </div>
    )
}
