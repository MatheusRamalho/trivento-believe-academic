import { ReactNode } from 'react'

interface FieldsetProps {
    toTheForm: string
    name: string
    legend: string
    children: ReactNode
}

export const Fieldset = ({ toTheForm, name, legend, children }: FieldsetProps) => {
    return (
        <fieldset
            form={toTheForm}
            name={name}
            className="mb-2 rounded-xl border border-solid border-transparent"
        >
            <legend className="w-fit py-0 px-2 text-base uppercase text-gray-600 opacity-0">
                {legend}
            </legend>

            {children}
        </fieldset>
    )
}
