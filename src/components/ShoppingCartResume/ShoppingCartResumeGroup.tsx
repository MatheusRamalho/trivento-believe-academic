import { ReactNode } from 'react'

interface ShoppingCartResumeGroupProps {
    children: ReactNode
}

export const ShoppingCartResumeGroup = ({ children }: ShoppingCartResumeGroupProps) => {
    return (
        <dl className="border-b border-gray-100 p-3">
            {children}
        </dl>
    )
}
