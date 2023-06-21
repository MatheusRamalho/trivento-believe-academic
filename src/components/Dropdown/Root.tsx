import { MouseEvent, ReactNode } from 'react'

interface DropdownRootProps {
    children?: ReactNode
    isActive?: boolean
}

export const DropdownRoot = ({ children }: DropdownRootProps) => {
    const dropdownClosedForMouse = (event: MouseEvent) => {
        let item = event.currentTarget

        item.classList.remove('opacity-100')
        item.classList.remove('pointer-events-auto')
    }

    return (
        <ul
            className="dropdown-menu absolute top-20 left-0 min-w-[250px] flex items-center justify-start flex-col py-4 px-6 bg-white rounded-xl shadow-lg opacity-0 pointer-events-none transition"
            onMouseLeave={(event) => dropdownClosedForMouse(event)}
        >
            {children}
        </ul>
    )
}
