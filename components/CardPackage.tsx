// 'use client'
import Image from "next/image";
import Button from "./Button";
import { SyntheticEvent, useState } from "react";

type Props = {
    title: string,
    image: string,
    link?: string,
    message?: string,
}

const url = (phone: string, message: string) => `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`

export default function CardPackage({ title, image, message = "", link }: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const DETAIL_PHONE = process.env.NEXT_PUBLIC_DETAIL_PHONE as string

    const handleClick = (e: SyntheticEvent) => setIsOpen(prev => !prev)

    return <div className='w-[16rem] lg:w-[17rem] h-[350px] rounded-[40px] relative overflow-hidden hover:cursor-pointer group'>
        <Image src={image} alt={image.replace("/", "").split(".")[0]} width={280} height={350} className='w-[16rem] lg:w-[17rem] h-[350px] rounded-[40px] transition-all duration-300 group-hover:scale-125' />
        <div className='absolute top-0 left-0 w-[16rem] lg:w-[17rem] h-[350px] rounded-[40px] bg-gradient-to-tr from-black to-transparent p-7 flex justify-end items-start flex-col re'>
            <p className='text-lg font-semibold text-white w-[80%] mb-5'>{title}</p>
            <Button isButton onClick={handleClick} title='Lihat Paket' />

        </div>

        <div onMouseLeave={e => setIsOpen(false)} className={`${isOpen ? "block animate-fadeIn" : "hidden fadeOut"} absolute left-[10%] bottom-[25%] max-h-[50%] w-[80%] bg-light-grey rounded-3xl overflow-hidden transition-all ease-in-out shadow-lg`}>
            <ul className="menu p-4 h-full bg-light-grey">
                {DETAIL_PHONE.split(",").map(phone => {
                    return <li key={phone} className="border-b">
                        <a href={url(phone, message)} target="_blank">{phone}</a>
                    </li>
                })}
            </ul>
        </div>
    </div>
}