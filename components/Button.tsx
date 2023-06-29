import Link from "next/link";
import { HTMLInputTypeAttribute, MouseEventHandler } from "react";

type Props = {
    type?: HTMLInputTypeAttribute | undefined,
    isButton?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined,
    link?: string,
    title: string,
    classNames?: string,
}

const STYLES = "btn rounded-[20px] bg-light-orange text-white font-semibold border-none hover:bg-light-orange"

export default function Button({ isButton = false, type, onClick, link = "", title = "", classNames = "" }: Props) {

    if (type === 'submit') {
        return <button className={`${STYLES} ${classNames}`}>{title}</button>
    }

    if (isButton) {
        return <button onClick={onClick} className={`${STYLES} ${classNames}`}>{title}</button>
    }

    return <Link href={link} className={`${STYLES} ${classNames}`}>{title}</Link>
}