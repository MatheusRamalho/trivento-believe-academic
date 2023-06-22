import Link from 'next/link'

import { Section } from '@/components/Section'
import { ShoppingCartItem } from '@/components/ShoppingCartitem'
import { ShoppingCartDetails } from '@/components/ShoppingCartDetails'
import { Icon } from '@/components/Icon'
import { HeaderPage } from '@/components/HeaderPage'

export default function ShoppingCartPage() {
    return (
        <>
            <HeaderPage title="Carrinho de compras">
                <h3 className="text-gray-200 font-bold text-2xl max-w-[600px] mx-auto mt-5"> Acreditar Acadêmico </h3>
            </HeaderPage>

            <Section
                name="Carrinho de compras"
                customClass="py-40"
            >
                <div className="flex gap-6">
                    {/* {data.lenght > 0 && ( */}
                        <aside className="flex-1">
                            <h2 className="font-bold text-3xl text-gray-700 mb-4 pb-2 border-b border-gray-100"> Items adicionados </h2>

                            <div className="">
                                {/* {data.map(item => {
                                    return (
                                        <ShoppingCartItem
                                            key={item.id}
                                            item={item}
                                        />
                                    )
                                })} */}

                                <details className="border-b border-gray-100 p-4 mb-2" open>
                                    <summary className="list-none text-gray-700 uppercase leading-6 cursor-pointer flex items-start justify-between gap-2">
                                    <span className=""> disciplina lllll Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam illo, recusandae incidunt reiciendis sint corrupti exercitationem? Ipsam ullam quasi so mais algumas co unde! </span>
                                        <Icon name="ChevronDown" customClass="w-14 h-14"/>
                                        {/* <Icon name={`${open ? 'ChevronDown' : 'ChevronUp'`} /> */}
                                    </summary>

                                    <p className="text-gray-600 mt-4"> <strong> Equivalente a: </strong> </p>

                                    <ul className="mt-1 mb-6">
                                        <li className="pl-6 text-gray-700">
                                            <span
                                                className="block leading-10 text-base"
                                            >
                                                disciplina oferecida
                                            </span>

                                            <span className="block">
                                                <strong className="text-gray-600"> Valor: </strong>
                                                1.99
                                            </span>
                                        </li>
                                    </ul>

                                    <button
                                        type="button"
                                        className="group cursor-pointer h-10 py-0 px-2 border-none rounded-lg bg-primary-100/10 font-bold text-sm text-primary-700 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed hover:text-primary-500"

                                    >
                                        <Icon
                                            name="XCircle"
                                            customClass="w-4 h-4 stroke-primary-700 group-hover:stroke-primary-500"
                                        />
                                        Remover do carrinho
                                    </button>
                                </details>

                                <details className="border-b border-gray-100 p-4 mb-2" open>
                                    <summary className="list-none text-gray-700 uppercase leading-6 cursor-pointer flex items-start justify-between">
                                        disciplina iendis sint corrupti exercitationem? Ipsam ullam quasi so mais algumas co unde!
                                        <Icon name="ChevronDown" />
                                        {/* <Icon name={`${open ? 'ChevronDown' : 'ChevronUp'`} /> */}
                                    </summary>

                                    <p className="text-gray-600 mt-4"> <strong> Equivalente a: </strong> </p>

                                    <ul className="mt-1 mb-6">
                                        <li className="pl-6 text-gray-700">
                                            <span
                                                className="block leading-10 text-base"
                                            >
                                                disciplina oferecida
                                            </span>

                                            <span className="block">
                                                <strong className="text-gray-600"> Valor: </strong>
                                                1.99
                                            </span>
                                        </li>
                                    </ul>

                                    <button
                                        type="button"
                                        className="group cursor-pointer h-10 py-0 px-2 border-none rounded-lg bg-primary-100/10 font-bold text-sm text-primary-700 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed hover:text-primary-500"

                                    >
                                        <Icon
                                            name="XCircle"
                                            customClass="w-4 h-4 stroke-primary-700 group-hover:stroke-primary-500"
                                        />
                                        Remover do carrinho
                                    </button>
                                </details>

                                <details className="border-b border-gray-100 p-4 mb-2" open>
                                    <summary className="list-none text-gray-700 uppercase leading-6 cursor-pointer flex items-start justify-between">
                                        niam illo, recusandae incidunt reiciendis sint corrupti exercitationem? Ipsam ullam quasi so mais algumas co unde!
                                        <Icon name="ChevronDown" />
                                        {/* <Icon name={`${open ? 'ChevronDown' : 'ChevronUp'`} /> */}
                                    </summary>

                                    <p className="text-gray-600 mt-4"> <strong> Equivalente a: </strong> </p>

                                    <ul className="mt-1 mb-6">
                                        <li className="pl-6 text-gray-700">
                                            <span
                                                className="block leading-10 text-base"
                                            >
                                                disciplina oferecida
                                            </span>

                                            <span className="block">
                                                <strong className="text-gray-600"> Valor: </strong>
                                                1.99
                                            </span>
                                        </li>
                                    </ul>

                                    <button
                                        type="button"
                                        className="group cursor-pointer h-10 py-0 px-2 border-none rounded-lg bg-primary-100/10 font-bold text-sm text-primary-700 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed hover:text-primary-500"

                                    >
                                        <Icon
                                            name="XCircle"
                                            customClass="w-4 h-4 stroke-primary-700 group-hover:stroke-primary-500"
                                        />
                                        Remover do carrinho
                                    </button>
                                </details>
                            </div>
                        </aside>
                    {/* )} */}

                    <div className="flex-1 border-l border-gray-200 px-10">
                        <h2 className="font-bold text-3xl text-gray-700 mb-4 pb-2 border-b border-gray-100"> Resumo do pedido </h2>

                        {/* {data.lenght === 0 || !values
                            ? (
                                <div aria-busy={loading}>
                                    {!loading && 'Não há nada no carrinho'}
                                </div>
                            ) : (
                                <ShoppingCartDetails
                                    loading={loading}
                                    size={data.length}
                                    values={values}
                                />
                            )
                        } */}

                        <div
                            className="mb-10 p-4 rounded-lg shadow-sm"
                            aria-busy="false"
                        >
                            <header className="pb-8 mb-8 border-b border-gray-100">
                                <span className="line-through text-gray-600"> R$ 29.00 </span>

                                <div className="mt-4">
                                    <h3 className="text-gray-700 font-black text-3xl"> R$ 3.037.00 </h3>
                                    <h5 className="text-gray-500 font-medium text-base"> À vista ou em 1x no cartão </h5>
                                </div>

                                <div className="mt-8">
                                    <h4 className="text-gray-700 font-extrabold text-xl"> R$ 3.037.00 </h4>
                                    <h5 className="text-gray-500 font-medium text-base"> Em até 5x de R$ 639.40 </h5>
                                </div>
                            </header>

                            <div className="">
                                <h6 className="text-gray-700 font-bold text-lg mb-2"> Detalhes Adicionais </h6>
                                <p className="text-gray-500 font-medium leading-6 text-sm"> Valor por disciplina: 1.056.66 </p>
                                <p className="text-gray-500 font-medium leading-6 text-sm"> Desconto por Disciplina: 250.00 </p>
                            </div>
                        </div>

                        <Link
                            className="cursor-pointer w-fit h-14 py-0 px-6 mt-6 border-none rounded-lg bg-primary-500 shadow-white-500 font-bold text-base text-gray-100 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed hover:bg-primary-600"
                            href="/checkout"
                        >
                            <Icon name="CircleDollarSign" customClass="stroke-2"/>
                            Proceder para o pagamento
                        </Link>
                    </div>
                </div>
            </Section>
        </>
    )
}
