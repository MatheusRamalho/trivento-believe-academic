'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { Fieldset } from '@/components/Fieldset'
import { FormField } from '@/components/FormField'
import { Section } from '@/components/Section'
import { Button } from '@/components/Button'
import { HeaderPage } from '@/components/HeaderPage'
import { ShoppingCartResume } from '@/components/ShoppingCartResume'

const checkoutShoppingCartFormSchema = zod.object({
    document_number: zod.string(),
    first_name: zod
        .string()
        .min(1, 'Informe o nome'),
    last_name: zod
        .string()
        .min(1, 'Informe o nome'),
    email: zod
        .string()
        .email(),
    phone_number: zod
        .string()
        .min(11, { message: 'O número de celular não pode ter menos de 11 dígitos.' })
        .max(15, { message: 'O número de celular não pode ter mais de 15 dígitos.' }),
})

type CheckoutFormDataProps = zod.infer<typeof checkoutShoppingCartFormSchema>

export default function CheckoutPage() {
    const router = useRouter()

    const { register, handleSubmit, formState } = useForm<CheckoutFormDataProps>({
        resolver: zodResolver(checkoutShoppingCartFormSchema),
        defaultValues: {
            document_number: '',
            first_name: '',
            last_name: '',
            email: '',
            phone_number: '',
        },
    })

    const handleNextCheckout = async (data: CheckoutFormDataProps) => {
        router.push('/checkout/address')
    }

    return (
        <>
            <HeaderPage title="Checkout">
                <h3 className="text-gray-200 font-bold text-2xl max-w-[600px] mx-auto mt-5"> Acreditar Acadêmico </h3>
            </HeaderPage>

            <Section
                name="Checkout"
                customClass="py-40"
            >
                <div className="flex gap-6">
                    <div className="flex-1">
                        <h2 className="font-bold text-3xl text-gray-700 mb-4 pb-2 border-b border-gray-100"> Dados do cliente </h2>

                        <form
                            id="formCheckout"
                            onSubmit={handleSubmit(handleNextCheckout)}
                        >
                            <Fieldset
                                toTheForm="formCheckout"
                                name="dataCheckoutForm"
                                legend="Dados do cliente"
                            >
                                <FormField.Root>
                                    <FormField.Label name="CPF" inputName="document_number">
                                        <FormField.Mandatory />
                                    </FormField.Label>

                                    <input
                                        id="document_number"
                                        className="input"
                                        placeholder=""
                                        required
                                        {...register('document_number')}
                                    />

                                    <FormField.Error message={formState.errors.document_number && formState.errors.document_number.message} />
                                </FormField.Root>

                                <div className="sm:flex sm:items-center sm:justify-between sm:flex-wrap sm:gap-4">
                                    <FormField.Root>
                                        <FormField.Label name="Nome" inputName="first_name">
                                            <FormField.Mandatory />
                                        </FormField.Label>

                                        <input
                                            id="first_name"
                                            className="input"
                                            placeholder="Seu nome"
                                            required
                                            {...register('first_name')}
                                        />

                                        <FormField.Error message={formState.errors.first_name && formState.errors.first_name.message} />
                                    </FormField.Root>

                                    <FormField.Root>
                                        <FormField.Label name="Sobrenome" inputName="last_name">
                                            <FormField.Mandatory />
                                        </FormField.Label>

                                        <input
                                            id="last_name"
                                            className="input"
                                            placeholder="Seu sobrenome"
                                            required
                                            {...register('last_name')}
                                        />

                                        <FormField.Error message={formState.errors.last_name && formState.errors.last_name.message} />
                                    </FormField.Root>
                                </div>

                                <div className="sm:flex sm:items-center sm:justify-between sm:flex-wrap sm:gap-4">
                                    <FormField.Root>
                                        <FormField.Label name="E-mail" inputName="email">
                                            <FormField.Mandatory />
                                        </FormField.Label>

                                        <input
                                            className="input"
                                            id="email"
                                            type="email"
                                            placeholder="email@email.com"
                                            required
                                            {...register('email')}
                                        />

                                        <FormField.Error message={formState.errors.email && formState.errors.email.message} />
                                    </FormField.Root>

                                    <FormField.Root>
                                        <FormField.Label name="Telefone" inputName="phone_number">
                                            <FormField.Mandatory />
                                        </FormField.Label>

                                        <input
                                            className="input"
                                            id="phone_number"
                                            type="tel"
                                            min={11}
                                            max={15}
                                            placeholder="(99) 9 9999-9999"
                                            required
                                            {...register('phone_number')}
                                        />

                                        <FormField.Error message={formState.errors.phone_number && formState.errors.phone_number.message} />
                                    </FormField.Root>
                                </div>
                            </Fieldset>

                            <Button
                                isFull
                                type="submit"
                                name="formCheckout"
                            >
                                Próximo
                            </Button>

                            <Link href="/checkout/address"> Próximo </Link>
                        </form>
                    </div>

                    <div className="flex-1 border-l border-gray-200 px-10">
                        <ShoppingCartResume.Root title="Resumo do pedido">
                            <ShoppingCartResume.Group>
                                <ShoppingCartResume.Item description="Total:" value="Lorem ipsum dolor, sit amet consectetur adipisicing elit." />
                                <ShoppingCartResume.Item description="Cartão:" value="Lorem ipsum dolor, sit amet consectetur adipisicing elit." />
                                <ShoppingCartResume.Item description="Forma de Pagamento:" value="Lorem ipsum dolor, sit amet consectetur adipisicing elit." />
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
                                {order.number_installments && (
                                    <>
                                        <ShoppingCartResume.Item description="Cartão:" value={`****${card.card_number.slice(-4)}`} />
                                        <ShoppingCartResume.Item description="Forma de Pagamento:" value={`${order.number_installments}x de ${values.installments[order.number_installments]}`} />
                                    </>
                                )}
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
                </div>
            </Section>
        </>
    )
}
