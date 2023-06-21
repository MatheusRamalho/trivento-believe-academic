import { ReactNode } from 'react'

interface SectionProps {
    id?: string
    name: string
    children: ReactNode
    customClass?: string
}

export const Section = ({ id, name, children, customClass }: SectionProps) => {
    return (
        <section
            className={`p-5 ${customClass}`}
            id={id}
        >
            <h6 hidden> {name} </h6>

            <div className="container mx-auto">
                {children}
            </div>
        </section>
    )
}
