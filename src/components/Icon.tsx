import * as icons from 'lucide-react'

interface IconProps {
    name: string
    color?: string
    size?: number
    strokeWidth?: number
    customClass?: string
}

export const Icon = ({ name, color, size = 24, strokeWidth = 1, customClass }: IconProps) => {
    const LucideIcon = (icons as any)[name]

    return (
        <LucideIcon
            color={color}
            size={size}
            strokeWidth={strokeWidth}
            className={customClass}
        />
    )
}
