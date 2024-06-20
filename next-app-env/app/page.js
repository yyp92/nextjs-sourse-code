'use client';

// import Button from '/components/button'
import Button from '@/components/button'


export default function Home() {
    // console.log(process.env.DB_HOST, '-----')
    // return <h1>Hello World!</h1>



    return (
        <>
            <h1
                onClick={() => {
                    console.log(process.env.NEXT_PUBLIC_ANALYTICS_ID)
                }}
            >Hello World!</h1>

            <Button />
        </>
    )
}
