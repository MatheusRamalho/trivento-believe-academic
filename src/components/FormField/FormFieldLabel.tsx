import { ReactNode } from 'react'

interface FormFieldLabelProps {
    name: string
    inputName: string
    children?: ReactNode
}

export const FormFieldLabel = ({ name, inputName, children }: FormFieldLabelProps) => {
    return (
        <label
            className="min-h-[1.688rem] text-sm font-medium text-gray-700 flex items-center mb-2"
            htmlFor={inputName}
        >
            {name}
            {children}
        </label>
    )
}
