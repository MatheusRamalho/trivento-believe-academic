import Link from 'next/link'

interface DropdownItemProps {
    name: string
    link ?: string
}

export const DropdownItem = ({ name, link }: DropdownItemProps) => {
    return (
        <li className="w-full dropdown-item">
            <Link
                className="relative inline-block w-full py-2 px-4 after:content-[''] after:absolute after:top-[90%] after:left-0 after:transition after:w-0 after:h-[2px] after:bg-secondary-500 hover:after:w-full"
                href={link ? link : '#'}
            >
                {name}
            </Link>
        </li>
    )
}
