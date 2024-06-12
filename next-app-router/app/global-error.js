/**
 * 用来处理根布局和根模板中的错误
 */
'use client'

export default function GlobalError({ error, reset }) {
    return (
        <html>
            <body>
                <h2>Something went wrong!</h2>
                
                <button onClick={() => reset()}>Try again</button>
            </body>
        </html>
    )
}
