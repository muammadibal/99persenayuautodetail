type Props = {
    icon: string | React.ReactNode,
    title: string,
    text: string,
}

export default function CardContactDetail({ icon, title, text, }: Props) {
    return <div className='flex justify-start items-start'>
        {typeof icon === 'string' ? "" : icon}
        <div className='ml-4 flex flex-col justify-start items-start flex-wrap  w-[70%]'>
            <h4 className='font-bold text-[20px]'>{title}</h4>
            <p className="break-words">{text}</p>
        </div>
    </div>
}