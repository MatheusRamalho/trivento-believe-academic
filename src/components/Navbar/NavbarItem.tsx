import { ReactNode } from 'react'

interface NavbarItemProps {
    name?: string
    children?: ReactNode
}

export const NavbarItem = ({ name, children }: NavbarItemProps) => {
    const handleDropdownToggle = (event: any) => {
        event.preventDefault()

        let link = event.currentTarget
        let item = link ? link.closest('li.nav-item') : null
        let dropdown = item ? item.querySelector('ul.dropdown-menu') : null
        let dropdowns = document.querySelectorAll('ul.dropdown-menu')

        dropdowns.forEach(element => {
            if (dropdown) {
                if (element === dropdown) {
                    dropdown.classList.toggle('opacity-100')
                    dropdown.classList.toggle('pointer-events-auto')
                } else {
                    element.classList.remove('opacity-100')
                    element.classList.remove('pointer-events-auto')
                }
            }
        })
    }

    return (
        <li className="nav-item relative h-[inherit] flex items-center justify-center group border-b-4 border-transparent hover:border-primary-500">
            <a
                className="relative after:content-[''] after:absolute after:top-[30%] after:right-[-15px] after:w-2 after:h-2 after:border-r after:border-b after:border-primary-500 after:rotate-45 after:transition group-hover:after:top-[35%] group-hover:text-primary-500"
                href="#"
                onClick={(event) => handleDropdownToggle(event)}
            >
                {name}
            </a>

            {children}
        </li>
    )
}
