// 强制 fetch 不缓存
// * 关掉数据缓存
export const fetchCache = 'force-no-store'

// async function getData() {
//     // 接口每次调用都会返回一个随机的猫猫图片数据
//     const res = await fetch('https://api.thecatapi.com/v1/images/search') 
//     return res.json()
// }

// * 再关闭请求记忆
async function getData() {
    const { signal } = new AbortController()
    const res = await fetch('https://api.thecatapi.com/v1/images/search', { signal }) 
    return res.json()
}
  

// export async function generateMetadata() {
//     const data = await getData()

//     return {
//         title: data[0].id
//     }
// }

async function CatDetail() {
    const data = await getData()

    return (
        <>
            <h1>图片 ID：{data[0].id}</h1>
            <img src={data[0].url} width="300" />
        </>
    )
}

export default async function Page() {
    const data = await getData()

    return (
        <>
            <h1>图片 ID：{data[0].id}</h1>
            <img src={data[0].url} width="300" />
            
            <CatDetail />
        </>
    )
}
