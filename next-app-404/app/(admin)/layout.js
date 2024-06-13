import "../globals.css";

const navigation = [{ title: "Features", path: "#" }, { title: "Integrations", path: "#" }, { title: "Customers", path: "#" }, { title: "Pricing", path: "#" }];

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head></head>
            <body>
                <nav className="bg-white pb-5 text-sm shadow-lg rounded-xl border mx-2 mt-2 border-none my-2">
                    <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 flex">
                        <div className="flex-1 items-center mt-8 flex">
                            <ul className="justify-center items-center flex space-x-6">
                                {
                                    navigation.map((item, idx) => {
                                        return (
                                            <li key={idx} className="text-gray-700 hover:text-gray-900"><a href={item.path} className="block">{item.title}</a></li>
                                        );
                                    })
                                }
                            </ul>

                            <div className="flex-1 gap-x-6 items-center justify-end flex">
                                <a href="#" className="block text-gray-700 hover:text-gray-900"> Log in </a>
                                <a href="#" className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full"
                                > Sign in </a>
                            </div>
                        </div>
                    </div>
                </nav>

                {children}
            </body>
        </html>
    );
}
