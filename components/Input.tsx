import { HTMLInputTypeAttribute } from "react"

type Props = {
    type: HTMLInputTypeAttribute | undefined,
    name: string
    id?: string
    className?: string
    placeholder?: string
}

export default function Input({ type, name, id, className, placeholder }: Props) {
    return <input type={type} name={name} id={id} className={`input w-full mb-5 ${className}`} placeholder={placeholder} />
}