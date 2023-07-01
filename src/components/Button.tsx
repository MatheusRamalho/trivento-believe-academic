import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isFull?: boolean
}

export const Button = ({ isFull = false, ...props }: ButtonProps) => {
    return (
        <button
            className={`cursor-pointer h-14 py-0 px-6 border-none rounded-lg bg-primary-500 shadow-white-500 font-bold text-base text-gray-100 flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed hover:bg-primary-600 ${isFull && 'w-full'}`}
            {...props}
        ></button>
    )
}
