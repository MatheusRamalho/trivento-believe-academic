'use client'

import { ChangeEvent, useState } from 'react'
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
import Link from 'next/link'

const checkoutAddressShoppingCartFormSchema = zod.object({
    postal_code: zod
        .string()
        .min(8, { message: 'O código postal não pode ter menos de 8 dígitos.' })
        .max(8, { message: 'O código postal não pode ter mais de 8 dígitos.' }),
    street: zod.string(),
    number: zod
        .string()
        .min(1, 'Informe o número'),
    complement: zod.string(),
    district: zod
        .string()
        .min(1, 'Informe o nome'),
    city: zod.string(),
    state: zod
        .string()
        .min(2, { message: 'O estado não pode ter menos de 2 dígitos.' })
        .max(2, { message: 'O estado não pode ter mais de 2 dígitos.' }),

})

type CheckoutAddressFormDataProps = zod.infer<typeof checkoutAddressShoppingCartFormSchema>

export default function CheckoutAddressPage() {
    const router = useRouter()
    const [formOfPayment, setFormOfPayment] = useState('')

    const { register, handleSubmit, formState } = useForm<CheckoutAddressFormDataProps>({
        resolver: zodResolver(checkoutAddressShoppingCartFormSchema),
        defaultValues: {
            postal_code: '',
            street: '',
            number: '',
            complement: '',
            district: '',
            city: '',
            state: '',
        },
    })

    const handleNextCheckout = async (data: CheckoutAddressFormDataProps) => {
        if (formOfPayment === 'pix') {
            router.push('/checkout/pagamentoViaPix')
        }

        if (formOfPayment === 'cartão de crédito') {
            router.push('/checkout/pagamento')
        }

        if (formOfPayment === 'boleto') {
            router.push('/checkout/pagamentoViaBoleto')
        }
    }

    return (
        <>
            <HeaderPage title="Checkout">
                <h3 className="text-gray-200 font-bold text-2xl max-w-[600px] mx-auto mt-5"> Acreditar Acadêmico </h3>
            </HeaderPage>

            <Section
                name="Checkout Address"
                customClass="py-40"
            >
                <div className="flex gap-6">
                    <div className="flex-1">
                        <h2 className="font-bold text-3xl text-gray-700 mb-4 pb-2 border-b border-gray-100"> Endereço de cobrança </h2>

                        <form
                            id="formCheckoutAddress"
                            onSubmit={handleSubmit(handleNextCheckout)}
                        >
                            <Fieldset
                                toTheForm="formCheckoutAddress"
                                name="dataCheckoutAddressForm"
                                legend="Endereço de cobrança"
                            >
                                <FormField.Root>
                                    <FormField.Label name="CEP" inputName="postal_code">
                                        <FormField.Mandatory />
                                    </FormField.Label>

                                    <input
                                        id="postal_code"
                                        type="number"
                                        className="input"
                                        placeholder=""
                                        required
                                        min={8}
                                        max={8}
                                        {...register('postal_code')}
                                    />

                                    <FormField.Error message={formState.errors.postal_code && formState.errors.postal_code.message} />
                                </FormField.Root>

                                <div className="sm:flex sm:items-center sm:justify-between sm:flex-wrap sm:gap-4">
                                    <FormField.Root>
                                        <FormField.Label name="Rua" inputName="street">
                                            <FormField.Mandatory />
                                        </FormField.Label>

                                        <input
                                            id="street"
                                            className="input"
                                            placeholder=""
                                            required
                                            {...register('street')}
                                        />

                                        <FormField.Error message={formState.errors.street && formState.errors.street.message} />
                                    </FormField.Root>

                                    <FormField.Root>
                                        <FormField.Label name="Número" inputName="number">
                                            <FormField.Mandatory />
                                        </FormField.Label>

                                        <input
                                            id="number"
                                            className="input"
                                            placeholder=""
                                            required
                                            {...register('number')}
                                        />

                                        <FormField.Error message={formState.errors.number && formState.errors.number.message} />
                                    </FormField.Root>
                                </div>

                                <div className="sm:flex sm:items-center sm:justify-between sm:flex-wrap sm:gap-4">
                                    <FormField.Root>
                                        <FormField.Label name="Complemento" inputName="complement">
                                            <FormField.Mandatory />
                                        </FormField.Label>

                                        <input
                                            className="input"
                                            id="complement"
                                            placeholder=""
                                            required
                                            {...register('complement')}
                                        />

                                        <FormField.Error message={formState.errors.complement && formState.errors.complement.message} />
                                    </FormField.Root>

                                    <FormField.Root>
                                        <FormField.Label name="Bairro" inputName="district">
                                            <FormField.Mandatory />
                                        </FormField.Label>

                                        <input
                                            className="input"
                                            id="district"
                                            placeholder=""
                                            required
                                            {...register('district')}
                                        />

                                        <FormField.Error message={formState.errors.district && formState.errors.district.message} />
                                    </FormField.Root>
                                </div>

                                <div className="sm:flex sm:items-center sm:justify-between sm:flex-wrap sm:gap-4">
                                    <FormField.Root>
                                        <FormField.Label name="Cidade" inputName="city">
                                            <FormField.Mandatory />
                                        </FormField.Label>

                                        <input
                                            className="input"
                                            id="city"
                                            placeholder=""
                                            required
                                            {...register('city')}
                                        />

                                        <FormField.Error message={formState.errors.city && formState.errors.city.message} />
                                    </FormField.Root>

                                    <FormField.Root>
                                        <FormField.Label name="Estado" inputName="state">
                                            <FormField.Mandatory />
                                        </FormField.Label>

                                        <input
                                            className="input"
                                            id="state"
                                            placeholder=""
                                            min={2}
                                            max={2}
                                            required
                                            {...register('state')}
                                        />

                                        <FormField.Error message={formState.errors.state && formState.errors.state.message} />
                                    </FormField.Root>
                                </div>
                            </Fieldset>

                            <Fieldset
                                toTheForm="formCheckoutAddress"
                                name="dataCheckoutAddressPaymentForm"
                                legend="Tipos de pagamentos"
                            >
                                <div className="w-full mb-8">
                                    <div className="w-full flex items-center gap-2 mb-4">
                                        <input
                                            className="w-6 h-6 cursor-pointer accent-primary-500"
                                            id="payment-credit-card"
                                            type="radio"
                                            name="payment-method"
                                            value={'cartão de Crédito'}
                                            onChange={(event) => setFormOfPayment(event.target.value)}
                                        />

                                        <label
                                            className="cursor-pointer"
                                            htmlFor="payment-credit-card"
                                        >
                                            Pagamento com cartão de Crédito
                                        </label>
                                    </div>

                                    <div className="w-full flex items-center gap-2 mb-4">
                                        <input
                                            className="w-6 h-6 cursor-pointer accent-primary-500"
                                            id="payment-pix"
                                            type="radio"
                                            name="payment-method"
                                            value={'pix'}
                                            onChange={(event) => setFormOfPayment(event.target.value)}
                                        />

                                        <label
                                            className="cursor-pointer"
                                            htmlFor="payment-pix"
                                        >
                                            Pagamento com pix
                                        </label>
                                    </div>


                                    <div className="w-full flex items-center gap-2 mb-4">
                                        <input
                                            className="w-6 h-6 cursor-pointer accent-primary-500"
                                            id="payment-boleto"
                                            type="radio"
                                            name="payment-method"
                                            value={'boleto'}
                                            onChange={(event) => setFormOfPayment(event.target.value)}
                                        />

                                        <label
                                            className="cursor-pointer"
                                            htmlFor="payment-boleto"
                                        >
                                            Pagamento com boleto
                                        </label>
                                    </div>

                                </div>
                            </Fieldset>

                            <Button
                                isFull
                                type="submit"
                                name="formCheckoutAddress"
                            >
                                Próximo
                            </Button>
                        </form>
                    </div>

                    <div className="flex-1 border-l border-gray-200 px-10">
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
                </div>

                <Link className="block" href="checkout/paymentBankSlip"> Boleto </Link>
                <Link className="block" href="checkout/paymentPix"> Pix </Link>
                <Link className="block" href="checkout/paymentCard"> cartão </Link>
            </Section>
        </>
    )
}
