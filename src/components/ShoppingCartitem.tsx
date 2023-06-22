import { SubjectProps } from '@/types/Subject'
import { Icon } from './Icon'

export const ShoppingCartItem = (props: SubjectProps) => {
    const { id, name, related, price } = props

    const handleRemoveItemForShoppingCart = (id: string) => {
        console.log(id)
        // removeFromCart(id) // Função do @/store/cartSlice
    }

    return (
        <details className="border-b border-gray-100 p-4 mb-2" open>
            <summary className="list-none text-gray-700 uppercase leading-6 cursor-pointer flex items-start justify-between gap-2">
                <span className=""> {name} </span>
                <Icon name="ChevronDown" customClass="w-14 h-14" />
                {/* <Icon name={`${open ? 'ChevronDown' : 'ChevronUp'`} /> */}
            </summary>

            <p className="text-gray-600 mt-4"> <strong> Equivalente a: </strong> </p>

            <ul className="mt-1 mb-6">
                <li className="pl-6 text-gray-700">
                    {related.map(item => {
                        return (
                            <span
                                key={item}
                                className="block leading-10 text-base"
                            >
                                {item}
                            </span>
                        )
                    })}

                    <span className="block">
                        <strong className="text-gray-600"> Valor: </strong>
                        {price}
                    </span>
                </li>
            </ul>

            <button
                type="button"
                className="group cursor-pointer h-10 py-0 px-2 border-none rounded-lg bg-primary-100/10 font-bold text-sm text-primary-700 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed hover:text-primary-500"
                onClick={() => handleRemoveItemForShoppingCart(id)}
            >
                <Icon
                    name="XCircle"
                    customClass="w-4 h-4 stroke-primary-700 group-hover:stroke-primary-500"
                />
                Remover do carrinho
            </button>
        </details>
    )
}
