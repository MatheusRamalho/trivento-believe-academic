import { ReactNode } from 'react'

import { Icon } from './Icon'

interface AccordionProps {
    summary: string
    content: string
    children?: ReactNode
}

export const Accordion = ({ summary, content, children }: AccordionProps) => {
    return (
        <details className="border border-gray-100 border-b-0 cursor-pointer p-4 first:rounded-tl-md first:rounded-tr-md last:rounded-bl-md last:rounded-br-md">
            <summary className="list-none text-gray-600 text-lg font-bold cursor-pointer flex items-start justify-between gap-2">
                <span> {summary} </span>
                <Icon name="ChevronDown" customClass="w-14 h-14" />
            </summary>

            <p className="text-gray-600 text-base pl-4 pt-2">
                {content}
                {children}
            </p>
        </details>
    )
}
