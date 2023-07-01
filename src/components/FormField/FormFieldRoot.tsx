import { ReactNode } from 'react'

interface FormFieldRootProps {
    children: ReactNode
}

export const FormFieldRoot = ({ children }: FormFieldRootProps) => {
    return (
        <div className="flex-1 mb-4">
            {children}
        </div>
    )
}
