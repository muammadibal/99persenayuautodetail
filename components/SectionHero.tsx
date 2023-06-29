// "use client"
import Image from "next/image";
import Link from "next/link";
import { LegacyRef, MutableRefObject, RefObject, SyntheticEvent, useEffect, useRef, useState } from "react";
import { BiChevronRight, BiPlayCircle } from "react-icons/bi";

const url = (phone: string) => `https://api.whatsapp.com/send?phone=${phone}&text=Hi%20kak,%20aku%20mau%20booking%20jadwal%20salon`

export default function SectionHero() {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isShown, setIsShown] = useState<boolean>(false)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const DETAIL_PHONE = process.env.NEXT_PUBLIC_DETAIL_PHONE as string

    useEffect(() => {
        if (isShown) videoRef.current?.play()
        if (!isShown && videoRef) {
            videoRef.current!.pause()
            videoRef.current!.currentTime = 0
        }
    }, [isShown])

    const handleClick = (e: SyntheticEvent) => setIsOpen(prev => !prev)

    return <div>
        <div className={`modal ${isShown ? "modal-open" : ""}`} onClick={() => setIsShown(false)}>
            <video ref={videoRef} controls src={"/portfolio.mp4"} />
        </div>

        <div className="container grid grid-cols-1 lg:grid-cols-2 mt-[60px] mx-auto">
            <div className='w-[90%] mx-auto lg:w-[80%] relative'>
                <h1 className='text-[50px] leading-tight font-extrabold'>Salon Mobil yang membuat pede dijalan.</h1>
                <p className='text-[20px] font-normal mt-5'>Penawaran terbaik nano ceramic dan salon mobil degan harga terjangkau untuk Anda.</p>
                <button onClick={handleClick} className='btn rounded-[20px] bg-light-orange text-white font-semibold border-none hover:bg-light-orange mt-5 group'>Lihat Paket <span className='transition-all -translate-x-1 group-hover:translate-x-0'><BiChevronRight size={25} /></span></button>

                <div onMouseLeave={e => setIsOpen(false)} className={`${isOpen ? "block animate-fadeIn" : "hidden fadeOut"} absolute left-[37%] md:left-[27%] lg:left-[32%] -bottom-[4%] lg:bottom-[2%] max-h-[50%] w-[40%] bg-light-grey rounded-3xl overflow-hidden transition-all ease-in-out shadow-lg`}>
                    <ul className="menu p-4 h-full bg-light-grey">
                        {DETAIL_PHONE.split(",").map(phone => {
                            return <li key={phone} className="border-b"><a href={url(phone)}>{phone}</a></li>
                        })}
                    </ul>
                </div>
            </div>
            <div className='hidden lg:grid place-content-center place-items-center'>
                <div className="relative w-[410px] lg:w-[510px] h-[250px] lg:h-[360px] group"
                    onClick={(e) => {
                        setIsShown(true)
                    }}
                >
                    <Image src="/car-detailing.webp" alt='Car Detailing' width={510} height={360} className='rounded-[40px] cursor-pointer' />
                    <BiPlayCircle size={60} className='transition-all absolute -bottom-10 left-[45%] group-hover:bottom-[45%] cursor-pointer text-transparent group-hover:text-white' />
                    <div className='w-[410px] h-[250px] top-10 lg:top-[20px] absolute -right-4 -z-10 lg:w-[510px] lg:h-[350px] bg-gray-200 rounded-[40px]' />
                </div>
            </div>
        </div>
    </div>
}