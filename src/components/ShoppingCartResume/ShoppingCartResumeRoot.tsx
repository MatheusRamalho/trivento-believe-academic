import { ReactNode } from 'react'

interface ShoppingCartResumeRootProps {
    title: string
    children: ReactNode
}

export const ShoppingCartResumeRoot = ({ title, children }: ShoppingCartResumeRootProps) => {
    return (
        <div className="shadow-sm rounded-lg p-4 pt-0">
            <h2 className="font-bold text-3xl text-gray-700 mb-4 pb-2 border-b border-gray-100"> {title} </h2>

            {children}
        </div>
    )
}
