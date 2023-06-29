// "use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isHome, setIsHome] = useState<boolean>(false)
    const handleMenu = () => {
        setIsOpen(prev => !prev)
    }

    useEffect(() => {
        const checkUrl = window.location.pathname.split("/").length === 1
        setIsHome(checkUrl)
    }, [])

    return (
        <div>
            <div id="home" className="h-[80px]">
                <div className="navbar fixed top-0 z-10 bg-light-grey md:px-16">
                    <div className="flex-1">
                        <div className="block mr-4 md:mr-0 md:hidden">
                            <BiMenu onClick={handleMenu} size={30} className="cursor-pointer" />
                        </div>
                        <Link href="/">
                            <Image src="/logo.webp" alt="99persenautodetail" width={150} height={50} className='w-36 h-12' />
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link href={`${isHome ? "#home" : "/#home"}`} scroll={false}>Home</Link></li>
                            <li><Link href={`${isHome ? "#services" : "/#services"}`} scroll={false}>Services</Link></li>
                            {/* <li><Link href={`${isHome ? "#testimonials" : "/#testimonials"}`}>Testimonials</Link></li> */}
                            <li><Link href='/gallery'>Galleries</Link></li>
                            <li><Link href={`${isHome ? "#contact-us" : "/#contact-us"}`} scroll={false}>Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={`${isOpen ? "block" : "hidden"} fixed left-0 right-0 bottom-0 top-0 transition-all bg-black bg-opacity-60 ease-in-out duration-500 z-10`} onClick={handleMenu} />

            <div className={`w-[70%] fixed ${isOpen ? "left-0" : "-left-[100%]"} top-0 bottom-0 z-10 transition-all duration-500 ease-in-out`}>
                <ul className="menu p-4 h-full bg-light-grey  text-base-content">
                    <li><a href={`${isHome ? "#home" : "/#home"}`} onClick={handleMenu}>Home</a></li>
                    <li><a href={`${isHome ? "#services" : "/#services"}`} onClick={handleMenu}>Services</a></li>
                    {/* <li><a href='#testimonials' onClick={handleMenu}>Testimonials</a></li> */}
                    <li><Link href='/gallery'>Galleries</Link></li>
                    <li><a href={`${isHome ? "#contact-us" : "/#contact-us"}`} onClick={handleMenu}>Contact Us</a></li>
                </ul>
            </div>
        </div>
    )
}