type Props = {
    icon: string | React.ReactNode,
    title: string,
    text: string,
}

export default function CardWhyUs({ icon, title, text }: Props) {
    return <div className='flex flex-col justify-center items-center'>
        {typeof icon === 'string' ? "" : icon}
        <h4 className='font-bold text-[30px] mt-5'>{title}</h4>
        <p>{text}</p>
    </div>
}