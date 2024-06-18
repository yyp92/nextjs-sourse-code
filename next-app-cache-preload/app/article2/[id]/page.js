import Article, { preloadArticle, checkIsAvailable } from './utils'
 
export default async function Page({ params: { id } }) {
    preloadArticle(id)
    
    const isAvailable = await checkIsAvailable()
    
    return isAvailable ? <Article id={id} /> : null
}
