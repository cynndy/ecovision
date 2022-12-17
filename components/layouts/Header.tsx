import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const navs = [
    { title: 'Home', path: '/'},
    { title: 'Prescription Glasses', path: '/prescription-glasses'},
    { title: 'Sunglasses', path: '/sunglasses'},
    { title: 'List an Eyewear', path: '/list-an-eyewear'},
]

const Header = () => {
    const router = useRouter()

    return (
        <header className="container mx-auto flex items-center border-b border-gray-100 px-6 py-2 h-24">
            <div className="w-full">
                <nav className="flex items-center justify-between">
                    <div className="flex items-center">
                        <h1>
                            <Image src="/ecovision.svg" 
                                alt="branding logo" 
                                width={188} 
                                height={72} />
                        </h1>
                        <div className="grow">
                            <div className="flex items-center justify-start gap-2 md:gap-8">
                                {navs.map((item, index) => {
                                    return (
                                        <Link href={item.path} 
                                            key={index} 
                                            className="font-semibold text-gray-500">{item.title}</Link>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Link href="/login" 
                            className="px-5 py-2.5 font-semibold text-gray-500">Login</Link>
                        <Link href="/signup" 
                            className="bg-primary text-white font-semibold px-5 py-2.5 rounded-lg hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Sign up</Link>
                    </div>
                </nav>    
            </div>
        </header>
    )
}

export default Header;