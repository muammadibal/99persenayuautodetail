type PropsItem = {
    title: string,
    link: string,
}

type Props = {
    menus: PropsItem[],
    containerClassName?: string,
    className?: string,
}

export default function Breadcrumbs({ menus, containerClassName, className }: Props) {
    return <div className={`container mx-auto pl-4 lg:pl-0 ${containerClassName}`}>
        <div className={`text-sm breadcrumbs ${className}`}>
            <ul>
                {menus.map((menu, index) => {
                    return <li key={index}>
                        {(menus.length - 1) === index ? menu.title : <a href={menu.link}>{menu.title}</a>}
                    </li>
                })}
            </ul>
        </div>
    </div>
}