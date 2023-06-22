import { SubjectProps } from '@/types/Subject'

interface SubjectItemProps {
    title: string
    item: SubjectProps
}

export const Subject = ({ title, item }: SubjectItemProps) => {
    const handleClick = async () => {
        // if (data.some((cartItem) => cartItem.id === item.id)) {
            // toast.error('Essa disciplina ou alguma equivalente já foi adicionada')
            // return
        // }

        // if (data.length === 5) {
        //     toast.error('Você não pode adicionar mais de 5 disciplinas')
        //     return
        // }

        // dispatch(addToCart(item))
        // toast.success(`A disciplina foi adicionada ao carrinho`)
    }

    return (
        <article
            className={item.area.toLowerCase()}
            role="button"
            onClick={handleClick}
        >
            {title}
        </article>
    )
}
