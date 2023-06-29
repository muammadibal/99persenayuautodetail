// 'use client'
import { SyntheticEvent, useState } from "react";
import { BiLogoWhatsapp } from "react-icons/bi";

const url = (phone: string) => `https://api.whatsapp.com/send?phone=${phone}&text=Hi%20kak,%20aku%20mau%20booking%20jadwal%20salon`

export default function ModalContact() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const DETAIL_PHONE = process.env.NEXT_PUBLIC_DETAIL_PHONE as string

    const handleClick = (e: SyntheticEvent) => setIsOpen(prev => !prev)

    return <div>
        <div className={`fixed ${isOpen ? "bottom-[70px]" : "-bottom-[100%]"} right-[10%] max-h-[50%] w-[50%] lg:w-[25%] bg-light-grey rounded-3xl overflow-hidden transition-all ease-in-out shadow-lg`}>
            <ul onMouseLeave={handleClick} className="menu p-4 h-full bg-light-grey">
                {DETAIL_PHONE.split(",").map(phone => {
                    return <li key={phone} className="border-b"><a href={url(phone)}>{phone}</a></li>
                })}
            </ul>
        </div>

        <div className='fixed bottom-0 right-[10%]'>
            <button onClick={handleClick} className='flex flex-row items-center justify-center bg-green-500 px-4 pt-4 pb-2 hover:pb-4 transition-all ease-in-out rounded-tl-3xl rounded-tr-3xl text-white cursor-pointer'>
                <BiLogoWhatsapp size={30} />
                <span>Hubungi Cs Kami</span>
            </button>
        </div>
    </div>
}