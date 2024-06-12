// async function getData() {
//     await new Promise((resolve) => setTimeout(resolve, 3000))

//     return {
//         message: 'Hello, Dashboard!',
//     }
// }
// export default async function DashboardPage(props) {
//     const { message } = await getData()

//     return <h1>{message}</h1>
// }





/**
 * 为触发 Error 错误
 */
"use client";
import React from "react";

export default function Page() {
    const [error, setError] = React.useState(false);

    const handleGetError = () => {
        setError(true);
    };

    return (
        <>
            {
                error
                    ? Error()
                    : <button onClick={handleGetError}>Get Error</button>
            }
        </>
    );
}

  