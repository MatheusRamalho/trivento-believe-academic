'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { Section } from '@/components/Section'
import { HeaderPage } from '@/components/HeaderPage'
import { ShoppingCartResume } from '@/components/ShoppingCartResume'
import { Fieldset } from '@/components/Fieldset'
import { FormField } from '@/components/FormField'
import { Button } from '@/components/Button'

const checkoutShoppingCartFormSchema = zod.object({
    card_number: zod
        .number()
        .min(16, 'O cartão não pode ter menos do que 16 dígitos')
        .max(16, 'O cartão não pode ter mais do que 16 dígitos'),
    cardholder_name: zod.string(),
    expiration_month: zod
        .number()
        .min(2, 'O mês de validade não pode ter menos do que 2 dígitos')
        .max(2, 'O mês de validade não pode ter mais do que 2 dígitos'),
    expiration_year: zod
        .number()
        .min(2, 'O ano de validade não pode ter menos do que 2 dígitos')
        .max(2, 'O ano de validade não pode ter mais do que 2 dígitos'),
    security_code: zod
        .number()
        .min(3, 'O cvv não pode ter menos do que 3 dígitos')
        .max(4, 'O cvv não pode ter mais do que 4 dígitos'),
    number_installments: zod.number()
})

type CheckoutFormDataProps = zod.infer<typeof checkoutShoppingCartFormSchema>

export default function CheckoutPaymentCardPage() {
    const { register, handleSubmit, formState } = useForm<CheckoutFormDataProps>({
        resolver: zodResolver(checkoutShoppingCartFormSchema),
        // defaultValues: {
        //     card_number: 0,
        //     cardholder_name: '',
        //     expiration_month: 0,
        //     expiration_year: 0,
        //     security_code: 0,
        //     number_installments: 0,
        // },
    })

    const handleNextCheckout = async (data: CheckoutFormDataProps) => {
        console.log('cartão')
    }

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
                    <div className="flex-1 border-r border-gray-200 px-10">
                        <form
                            id="formCheckoutPaymentCard"
                            onSubmit={handleSubmit(handleNextCheckout)}
                        >
                            <Fieldset
                                toTheForm="formCheckoutPaymentCard"
                                name="dataCheckoutPaymentCardForm"
                                legend="Dados do cartão"
                            >
                                <FormField.Root>
                                    <FormField.Label name="Número do cartão" inputName="card_number">
                                        <FormField.Mandatory />
                                    </FormField.Label>

                                    <input
                                        id="card_number"
                                        className="input"
                                        type="number"
                                        required
                                        min={16}
                                        max={16}
                                        {...register('card_number')}
                                    />

                                    <FormField.Error message={formState.errors.card_number && formState.errors.card_number.message} />
                                </FormField.Root>

                                <FormField.Root>
                                    <FormField.Label name="Nome do titular" inputName="cardholder_name">
                                        <FormField.Mandatory />
                                    </FormField.Label>

                                    <input
                                        id="cardholder_name"
                                        className="input"
                                        placeholder="Seu nome"
                                        required
                                        {...register('cardholder_name')}
                                    />

                                    <FormField.Error message={formState.errors.cardholder_name && formState.errors.cardholder_name.message} />
                                </FormField.Root>

                                <div className="sm:flex sm:items-center sm:justify-between sm:flex-wrap sm:gap-4">
                                    <FormField.Root>
                                        <FormField.Label name="Mês" inputName="expiration_month">
                                            <FormField.Mandatory />
                                        </FormField.Label>

                                        <input
                                            id="expiration_month"
                                            className="input"
                                            type="number"
                                            required
                                            min={2}
                                            max={2}
                                            {...register('expiration_month')}
                                        />

                                        <FormField.Error message={formState.errors.expiration_month && formState.errors.expiration_month.message} />
                                    </FormField.Root>

                                    <FormField.Root>
                                        <FormField.Label name="Ano" inputName="expiration_year">
                                            <FormField.Mandatory />
                                        </FormField.Label>

                                        <input
                                            id="expiration_year"
                                            className="input"
                                            type="number"
                                            required
                                            min={2}
                                            max={2}
                                            {...register('expiration_year')}
                                        />

                                        <FormField.Error message={formState.errors.expiration_year && formState.errors.expiration_year.message} />
                                    </FormField.Root>

                                    <FormField.Root>
                                        <FormField.Label name="CVV" inputName="security_code">
                                            <FormField.Mandatory />
                                        </FormField.Label>

                                        <input
                                            id="security_code"
                                            className="input"
                                            type="password"
                                            required
                                            min={3}
                                            max={4}
                                            {...register('security_code')}
                                        />

                                        <FormField.Error message={formState.errors.security_code && formState.errors.security_code.message} />
                                    </FormField.Root>
                                </div>

                                <FormField.Root>
                                    <FormField.Label name="Parcelas" inputName="number_installments">
                                        <FormField.Mandatory />
                                    </FormField.Label>

                                    <select
                                        name="number_installments"
                                        id="number_installments"
                                    >
                                        {/* {values && Object.entries(values.installments).map((item) => (
                                            <option
                                                key={item[0]}
                                                value={item[0]}
                                            >
                                                {item[0]}x de {item[1]}
                                            </option>
                                        ))} */}
                                    </select>

                                    <FormField.Error message={formState.errors.number_installments && formState.errors.number_installments.message} />
                                </FormField.Root>
                            </Fieldset>

                            <Button
                                isFull
                                type="submit"
                                name="formCheckoutPaymentCard"
                            >
                                Confirmar dados
                            </Button>
                        </form>
                    </div>

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
                </div>
            </Section>
        </>
    )
}
