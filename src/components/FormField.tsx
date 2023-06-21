import { ReactNode } from 'react'

interface FormFieldProps {
    labelName: string
    labelRequired?: boolean
    inputName: string
    inputErrorMessage?: string
    children: ReactNode
}

export const FormField = ({ labelName, labelRequired = false, inputName, inputErrorMessage, children }: FormFieldProps) => {
    return (
        <div className="flex-1 mb-4">
            <label
                className="min-h-[1.688rem] text-sm font-medium text-gray-700 flex items-center mb-2"
                htmlFor={inputName}
            >
                {labelName}

                {labelRequired &&
                    <span id="info" className="text-red-500 font-bold pl-2"> * </span>
                }
            </label>

            {children}

            {inputErrorMessage &&
                <span className="text-red-500 italic font-bold"> {inputErrorMessage} </span>
            }
        </div>
    )
}
