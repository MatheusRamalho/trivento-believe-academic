interface ShoppingCartResumeItemProps {
    description: string
    value: string
}

export const ShoppingCartResumeItem = ({ description, value }: ShoppingCartResumeItemProps) => {
    return (
        <div className="flex items-center flex-wrap gap-2 mb-1">
            <dt className="text-gray-700 font-bold text-sm"> {description} </dt>
            <dd className="text-gray-600"> {value} </dd>
        </div>
    )
}
