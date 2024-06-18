import { cache } from 'react'
import 'server-only'
 
const sleep = ms => new Promise(r => setTimeout(r, ms));

export const preloadArticle = (id) => {
    void getArticle(id)
}
 
export const getArticle = cache(async (id) => {
    await sleep(5000)

    return {
        id,
        title: Math.random().toString(36).slice(-6)
    }
})

export const checkIsAvailable = async () => {
    await sleep(5000)

    return true
}

export default async function Article({ id }) {
    const { title } = await getArticle(id)

    return (
        <div className="space-y-3 text-center">
            <h1 className="text-3xl text-gray-800 font-semibold mt-5">
                文章标题：{title}
            </h1>

            <p className="text-gray-600 max-w-lg mx-auto text-lg">
                Assume this is the text of the article
            </p>
        </div>
    )
}
