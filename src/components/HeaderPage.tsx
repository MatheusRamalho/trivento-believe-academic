import { ReactNode } from 'react'

interface HeaderPageProps {
    title: string
    children?: ReactNode
}

export const HeaderPage = ({ title, children }: HeaderPageProps) => {
    return (
        <header className="py-32 px-10 bg-gradient-to-r from-pink-700 via-pink-600 to-pink-900">
            <div className="container mx-auto text-center">
                <h1 className="text-white font-black text-5xl sm:text-7xl"> {title} </h1>
                {children}
            </div>
        </header>
    )
}
