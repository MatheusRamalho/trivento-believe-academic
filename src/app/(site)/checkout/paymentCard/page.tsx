import { Section } from '@/components/Section'
import { HeaderPage } from '@/components/HeaderPage'
import { ShoppingCartResume } from '@/components/ShoppingCartResume'

export default function CheckoutPaymentCardPage() {
    return (
        <>
            <HeaderPage title="Checkout">
                <h3 className="text-gray-200 font-bold text-2xl max-w-[600px] mx-auto mt-5"> Acreditar Acadêmico </h3>
                <h3 className="text-gray-200 font-bold text-2xl max-w-[600px] mx-auto mt-5"> Pagamento por cartão </h3>
            </HeaderPage>

            <Section
                name="Checkout card"
                customClass="py-40"
            >
                <div className="flex gap-6">
                    <div className="flex-1 px-10">
                        <ShoppingCartResume.Root title="Resumo do pedido">
                            <ShoppingCartResume.Group>
                                <ShoppingCartResume.Item description="Total:" value="Lorem ipsum dolor, sit amet consectetur adipisicing elit." />
                            </ShoppingCartResume.Group>

                            <ShoppingCartResume.Group>
                                <ShoppingCartResume.Item description="Nome do Comprador:" value="Lorem ipsum dolor, sit amet consectetur adipisicing elit." />
                                <ShoppingCartResume.Item description="CPF:" value="Lorem ipsum dolor, sit amet consectetur adipisicing elit." />
                                <ShoppingCartResume.Item description="E-mail:" value="Lorem ipsum dolor, sit amet consectetur adipisicing elit." />
                                <ShoppingCartResume.Item description="Telefone:" value="Lorem ipsum dolor, sit amet consectetur adipisicing elit." />
                            </ShoppingCartResume.Group>

                            <ShoppingCartResume.Group>
                                <ShoppingCartResume.Item description="Endereço:" value="Lorem ipsum dolor, sit amet consectetur adipisicing elit." />
                                <ShoppingCartResume.Item description="Complemento:" value="Lorem ipsum dolor, sit amet consectetur adipisicing elit." />
                                <ShoppingCartResume.Item description="Bairro:" value="Lorem ipsum dolor, sit amet consectetur adipisicing elit." />
                                <ShoppingCartResume.Item description="Cidade:" value="Lorem ipsum dolor, sit amet consectetur adipisicing elit." />
                                <ShoppingCartResume.Item description="Estado:" value="Lorem ipsum dolor, sit amet consectetur adipisicing elit." />
                                <ShoppingCartResume.Item description="CEP:" value="Lorem ipsum dolor, sit amet consectetur adipisicing elit." />
                            </ShoppingCartResume.Group>
                        </ShoppingCartResume.Root>

                        {/* <ShoppingCartResume.Root title="Resumo do pedido">
                            <ShoppingCartResume.Group>
                                <ShoppingCartResume.Item description="Total:" value={order.number_installments === '1' ? values.installments[order.number_installments] : values.total_with_discount} />
                            </ShoppingCartResume.Group>

                            <ShoppingCartResume.Group>
                                <ShoppingCartResume.Item description="Nome do Comprador:" value={`${customer.first_name} ${customer.last_name}`} />
                                <ShoppingCartResume.Item description="CPF:" value={customer.document_number} />
                                <ShoppingCartResume.Item description="E-mail:" value={customer.email} />
                                <ShoppingCartResume.Item description="Telefone:" value={customer.phone_number} />
                            </ShoppingCartResume.Group>

                            <ShoppingCartResume.Group>
                                <ShoppingCartResume.Item description="Endereço:" value={`${address.street} ${address.number}`} />
                                <ShoppingCartResume.Item description="Complemento:" value={address.complement} />
                                <ShoppingCartResume.Item description="Bairro:" value={address.district} />
                                <ShoppingCartResume.Item description="Cidade:" value={address.city} />
                                <ShoppingCartResume.Item description="Estado:" value={address.state} />
                                <ShoppingCartResume.Item description="CEP:" value={address.postal_code} />
                            </ShoppingCartResume.Group>
                        </ShoppingCartResume.Root> */}
                    </div>

                    <div className="flex-1 border-l border-gray-200 px-10">
                        {/* FORMULÁRIO DO CARTÃO */}
                    </div>
                </div>
            </Section>
        </>
    )
}
