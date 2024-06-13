/**
 * * 如何响应无 UI 内容？
 * 
 * 注：sitemap.xml、robots.txt、app icons 和 open graph images 这些特殊的文件，Next.js 都已经提供了内置支持，这些内容我们会在《Metadata 篇 | 基于文件》详细讲到。
 */

// app/rss.xml/route.js
export async function GET() {
    return new Response(`
        <?xml version="1.0" encoding="UTF-8" ?>
        <rss version="2.0">
        
            <channel>
                <title>Next.js Documentation</title>
                <link>https://nextjs.org/docs</link>
                <description>The React Framework for the Web</description>
            </channel>
        
        </rss>
    `)
}
  