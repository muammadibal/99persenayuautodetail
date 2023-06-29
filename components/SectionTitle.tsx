import Image from "next/image";

type Props = {
    id?: string,
    title: string
}

export default function SectionTitle({ id, title }: Props) {
    return <div id={id} className='flex flex-col items-center pt-[80px] mx-auto'>
        <h4 className='text-[20px] font-semibold'>{title}</h4>
        <Image src="/divider-title.webp" alt='Car Detailing' width={60} height={17} />
    </div>
}