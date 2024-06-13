import Link from "next/link";
import { photos } from "./data";



// export default function Page() {
//     return (
//         <div className="p-10 mt-6 bg-sky-600 text-white rounded-xl">
//             Hello, App!
//         </div>
//     );
// }





// * 拦截路由
export default function Home() {
    return (
        <main className="container">
            {
                photos.map(({ id, src }) => (
                    <Link key={id} href={`/photo/${id}`} passHref>
                        <img
                            width="200"
                            src={src}
                        />
                    </Link>
                ))
            }
        </main>
    );
}
