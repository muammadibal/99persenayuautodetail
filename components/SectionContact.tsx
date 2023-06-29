// 'use client'
import { BiAlarm, BiLogoGmail, BiMap, BiPhone } from "react-icons/bi"
import CardContactDetail from "./CardContactDetail"
import SectionTitle from "./SectionTitle"
import Button from "./Button"
import { ChangeEvent, ChangeEventHandler, SyntheticEvent, useState } from "react"

export default function SectionContact() {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [message, setMessage] = useState<string>("")
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const DETAIL_LOCATION = process.env.NEXT_PUBLIC_DETAIL_LOCATION as string
    const DETAIL_LOCATION_URL = process.env.NEXT_PUBLIC_DETAIL_LOCATION_URL
    const DETAIL_PHONE = process.env.NEXT_PUBLIC_DETAIL_PHONE as string
    const TIME_OPERATION = process.env.NEXT_PUBLIC_DETAIL_TIME as string
    const DETAIL_EMAIL = process.env.NEXT_PUBLIC_DETAIL_EMAIL as string

    const handleClick = (e: SyntheticEvent) => setIsOpen(prev => !prev)

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => e.target.value

    const handleSubmit = (phone:string) => {
        const url = `https://api.whatsapp.com/send?phone=${phone}&text=${name},%20${email},%20${encodeURIComponent(message)}`
        if (name.length === 0 || email.length === 0 || message.length === 0) {
            return alert("Tidak boleh ada yang kosong")
        }

        return window.location.href = url
    }

    return <div>
        <SectionTitle id='contact-us' title='Contact Us' />

        <div className="container w-[90%] lg:w-[80%] mx-auto mt-[60px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-start gap-4">
            <CardContactDetail icon={<BiMap size={50} />} title='Alamat' text={String(DETAIL_LOCATION) || ""} />
            <CardContactDetail icon={<BiPhone size={50} />} title='Telpon' text={DETAIL_PHONE.replace(",", "\n") || ""} />
            <CardContactDetail icon={<BiLogoGmail size={50} />} title='Email' text={String(DETAIL_EMAIL) || ""} />
            <CardContactDetail icon={<BiAlarm size={50} />} title='Jam Kerja' text={String(TIME_OPERATION) || ""} />
        </div>

        <div className="container w-[90%] lg:w-full mx-auto mt-[60px] grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2">
            <iframe src={DETAIL_LOCATION_URL} width="600" height="450" className='border-none rounded-3xl w-full lg:w-[600px]' allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div className='flex flex-col items-start mt-5 lg:mt-0 relative'>
                <input onChange={(e) => setName(handleChange(e))} type="text" name="name" id="name" className='input w-full mb-5' placeholder='Name' />
                <input onChange={(e) => setEmail(handleChange(e))} type="email" name="email" id="email" className='input w-full mb-5' placeholder='Email Address' />
                <textarea onChange={(e) => setMessage(handleChange(e))} className='textarea w-full mb-5' cols={30} rows={5} placeholder="Message"></textarea>
                <Button isButton onClick={handleClick} title="Submit" />

                <div onMouseLeave={e => setIsOpen(false)} className={`${isOpen ? "block animate-fadeIn" : "hidden fadeOut"} absolute left-[17%] bottom-[2%] lg:bottom-[5%] max-h-[50%] w-[40%] bg-light-grey rounded-3xl overflow-hidden transition-all ease-in-out shadow-lg`}>
                    <ul className="menu p-4 h-full bg-light-grey">
                        {DETAIL_PHONE.split(",").map(phone => {
                            return <li key={phone} className="border-b">
                                <button onClick={e => handleSubmit(phone)}>{phone}</button>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    </div>
}