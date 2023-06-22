'use client'

import { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Icon } from './Icon'
import { Dropdown } from './Dropdown'

import FaculdadeAlisImg from '@/assets/imgs/faculdade-alis.png'
import FaculdadeAltamiraImg from '@/assets/imgs/faculdade-altamira.png'
import FaculdadeLorenaImg from '@/assets/imgs/faculdade-lorena.png'

interface NavbarItemProps {
    name?: string
    children?: ReactNode
}

export const Navbar = () => {
    const handleMenuMobileOpen = () => {
        const menu = document.querySelector('.menu-mobile')
        menu && menu.classList.add('!block', 'z-[100]', 'absolute', 'top-0', 'left-0', 'bottom-0', 'w-full', 'h-screen', 'bg-white', 'py-20', 'px-10')
    }

    const handleMenuMobileClose = () => {
        const menu = document.querySelector('.menu-mobile')
        menu && menu.classList.remove('!block', 'z-[100]', 'absolute', 'top-0', 'left-0', 'bottom-0', 'w-full', 'h-screen', 'bg-white', 'py-20', 'px-10')
    }

    return (
        <header className="z-50 fixed top-0 left-0 right-0 w-full h-24 bg-gray-100 px-10 mb-8 flex items-center justify-between shadow-xl">
            <button
                type="button"
                className="w-14 h-10 bg-gray-200 rounded-md flex items-center justify-center sm:hidden"
                onClick={handleMenuMobileOpen}
            >
                <Icon name="AlignJustify" />
            </button>

            <div className="menu-mobile hidden sm:h-full sm:flex-1 sm:flex sm:items-center">
                <button
                    type="button"
                    className="absolute top-6 right-6 w-14 h-10 bg-gray-200 rounded-md flex items-center justify-center sm:hidden"
                    onClick={handleMenuMobileClose}
                >
                    <Icon name="X" />
                </button>

                <div className="w-full h-auto flex items-center justify-center flex-wrap gap-2 py-10 sm:w-72 sm:h-full sm:py-0 sm:px-4 sm:flex-initial sm:flex-nowrap sm:hidden lg:flex">
                    <Link
                        className="w-20 h-auto"
                        href="https://alisitabirito.com.br/"
                        target="_blank"
                        title="Faculdade Alis"
                    >
                        <Image
                            className="w-20 h-auto invert-[50%]"
                            src={FaculdadeAlisImg}
                            alt="Logo marca da faculdade Alis"
                        />
                    </Link>

                    <Link
                        className="w-20 h-auto"
                        href="https://serradouradaaltamira.com.br/"
                        target="_blank"
                        title="Faculdade Altamira"
                    >
                        <Image
                            className="w-20 h-auto invert-[50%]"
                            src={FaculdadeAltamiraImg}
                            alt="Logo marca da faculdade Altamira"
                        />
                    </Link>

                    <Link
                        className="w-20 h-auto"
                        href="https://serradouradalorena.com.br/"
                        target="_blank"
                        title="Faculdade Lorena"
                    >
                        <Image
                            className="w-20 h-auto invert-[50%]"
                            src={FaculdadeLorenaImg}
                            alt="Logo marca da faculdade Lorena"
                        />
                    </Link>
                </div>

                <nav className="h-full p-4 sm:flex-1 sm:flex sm:items-center sm:justify-center sm:py-0 sm:px-8">
                    <ul className="w-full sm:gap-6 sm:flex sm:items-center sm:h-full sm:w-fit">
                        <li className="group h-14 border-b-4 border-transparent hover:border-primary-500 sm:h-[inherit] sm:flex sm:items-center sm:justify-center sm:mb-0">
                            <Link className="w-full h-full flex items-center group-hover:text-primary-500" href="/"> Home </Link>
                        </li>

                        <div className="hidden sm:block sm:h-[inherit]">
                            <NavbarItem name="Acreditar Acadêmico">
                                <Dropdown.Root>
                                    <Dropdown.Item name="Sobre o programa" link="/program/about" />
                                    <Dropdown.Item name="Como funciona" link="/program/operation" />
                                    <Dropdown.Item name="Qual o investimento" link="/program/investment" />
                                    <Dropdown.Item name="Disciplinas" link="/program/subjects" />
                                    <Dropdown.Item name="Dúvidas Frequentes" link="/program/questions" />
                                </Dropdown.Root>
                            </NavbarItem>
                        </div>

                        <div className="sm:hidden">
                            <li className="group h-14 border-b-4 border-transparent hover:border-primary-500 sm:h-[inherit] sm:flex sm:items-center sm:justify-center sm:mb-0">
                                <Link className="w-full h-full flex items-center group-hover:text-primary-500" href="/program/about"> Sobre o programa </Link>
                            </li>

                            <li className="group h-14 border-b-4 border-transparent hover:border-primary-500 sm:h-[inherit] sm:flex sm:items-center sm:justify-center sm:mb-0">
                                <Link className="w-full h-full flex items-center group-hover:text-primary-500" href="/program/operation"> Como funciona </Link>
                            </li>

                            <li className="group h-14 border-b-4 border-transparent hover:border-primary-500 sm:h-[inherit] sm:flex sm:items-center sm:justify-center sm:mb-0">
                                <Link className="w-full h-full flex items-center group-hover:text-primary-500" href="/program/investment"> Qual o investimento </Link>
                            </li>

                            <li className="group h-14 border-b-4 border-transparent hover:border-primary-500 sm:h-[inherit] sm:flex sm:items-center sm:justify-center sm:mb-0">
                                <Link className="w-full h-full flex items-center group-hover:text-primary-500" href="/program/subjects"> Disciplinas </Link>
                            </li>

                            <li className="group h-14 border-b-4 border-transparent hover:border-primary-500 sm:h-[inherit] sm:flex sm:items-center sm:justify-center sm:mb-0">
                                <Link className="w-full h-full flex items-center group-hover:text-primary-500" href="/program/questions"> Dúvidas Frequentes </Link>
                            </li>
                        </div>

                        <li className="group h-14 border-b-4 border-transparent hover:border-primary-500 sm:h-[inherit] sm:flex sm:items-center sm:justify-center sm:mb-0">
                            <Link className="w-full h-full flex items-center group-hover:text-primary-500" href="/program/about"> Trivento </Link>
                        </li>

                        <li className="group h-14 border-b-4 border-transparent hover:border-primary-500 sm:h-[inherit] sm:flex sm:items-center sm:justify-center sm:mb-0">
                            <Link className="w-full h-full flex items-center group-hover:text-primary-500" href="/contact"> Contato </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <nav className="sm:w-72 h-full px-8">
                <ul className="flex items-center gap-5 justify-end h-full">
                    <li className="">
                        <Link className="group" href="/shoppingCart" title="Carrinho">
                            <Icon
                                name="ShoppingCart"
                                customClass="w-8 h-8 stroke-gray-500 group-hover:stroke-primary-500"
                            />
                        </Link>
                    </li>

                    <li className="">
                        <Link className="group" href="/login" title="Login">
                            <Icon
                                name="User2"
                                customClass="w-8 h-8 stroke-gray-500 group-hover:stroke-primary-500"
                            />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
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
