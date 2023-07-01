interface ShoppingCartValues {
    total: string
    discount: string
    total_with_discount: string
    in_cash_percentual_discount: string
    installments: {
        [key: string]: string
    }
    price_per_subject: string
}

interface ShoppingCartDetailsProps {
    loading: boolean
    size: number
    values: ShoppingCartValues
}

export const ShoppingCartDetails = ({ loading, size, values }: ShoppingCartDetailsProps) => {
    const max = Math.max(...Object.keys(values.installments).map((item) => {
        return (parseInt(item))
    }))

    return (
        <div
            className="mb-10 p-4 rounded-lg shadow-sm"
            aria-busy={loading}
        >
            <header className="pb-8 mb-8 border-b border-gray-100">
                <span className="line-through text-gray-600"> {values.total} </span>

                <div className="mt-4">
                    <h3 className="text-gray-700 font-black text-3xl"> {values.installments['1']} </h3>
                    <h5 className="text-gray-500 font-medium text-base"> À vista ou em 1x no cartão {values.in_cash_percentual_discount}% OFF </h5>
                </div>

                <div className="mt-8">
                    <h4 className="text-gray-700 font-extrabold text-xl"> {values.total_with_discount} </h4>
                    <h5 className="text-gray-500 font-medium text-base"> Em até {max}x de {values.installments[max.toString()]} </h5>
                </div>
            </header>

            <div className="">
                <h6 className="text-gray-700 font-bold text-lg mb-2"> Detalhes Adicionais </h6>
                <p className="text-gray-500 font-medium leading-6 text-sm"> Valor por disciplina: {values.price_per_subject} </p>
                <p className="text-gray-500 font-medium leading-6 text-sm"> {size > 1 && `Desconto por Disciplina: ${values.discount}`} </p>
            </div>
        </div>
    )
}
