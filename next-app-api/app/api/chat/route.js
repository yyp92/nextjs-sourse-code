/**
 * * Streaming
 * 
 * openai 的打字效果背后用的就是流
 */

// import OpenAI from 'openai'
// import { OpenAIStream, StreamingTextResponse } from 'ai'
 
// const openai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY,
// })
 
// export const runtime = 'edge'
 
// export async function POST(req) {
//     const { messages } = await req.json()
//     const response = await openai.chat.completions.create({
//         model: 'gpt-3.5-turbo',
//         stream: true,
//         messages,
//     })
    
//     const stream = OpenAIStream(response)
    
//     return new StreamingTextResponse(stream)
// }




/**
 * *当然也可以直接使用底层的 Web API 实现 Streaming：
 */
function iteratorToStream(iterator) {
    return new ReadableStream({
        async pull(controller) {
            const { value, done } = await iterator.next()
    
            if (done) {
                controller.close()
            }
            else {
                controller.enqueue(value)
            }
        },
    })
}
   
function sleep(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time)
    })
}

const encoder = new TextEncoder()

async function* makeIterator() {
    yield encoder.encode('<p>One</p>')
    await sleep(200)
    yield encoder.encode('<p>Two</p>')
    await sleep(200)
    yield encoder.encode('<p>Three</p>')
}

export async function GET() {
    const iterator = makeIterator()
    const stream = iteratorToStream(iterator)

    return new Response(stream)
}
