/**
 * * 重新验证
 */
export async function GET() {
    const res = await fetch(
        'https://api.thecatapi.com/v1/images/search',
        {
            //  每 5 秒重新验证
            next: { revalidate: 5 }, 
        }
    )
    const data = await res.json()
    console.log(data)

    return Response.json(data)
}
  