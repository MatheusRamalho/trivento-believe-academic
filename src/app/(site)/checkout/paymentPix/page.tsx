'use client'

import { FormEvent, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Section } from '@/components/Section'
import { Button } from '@/components/Button'
import { HeaderPage } from '@/components/HeaderPage'
import { ShoppingCartResume } from '@/components/ShoppingCartResume'

export default function CheckoutPaymentPixPage() {
    const [termsChecked, setTermsChecked] = useState(false)
    const [isExclusiveOpen, setIsExclusiveOpen] = useState(false)
    const [imageQRCode, setImageQRCode] = useState('')

    // useEffect(() => {
    //     res.data?.additional_data.qr_code &&
    //         QRCode.toDataURL(res.data?.additional_data.qr_code).then((data) => {
    //             setImageQRCode(data)
    //         })
    // }, [res])

    // const handleCopyClipboard = () => {
    //     try {
    //         navigator.clipboard
    //             .writeText(res.data?.additional_data.qr_code || '')
    //             .then(() => alert('Copiado para área de transferência'))
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
    }

    return (
        <>
            <HeaderPage title="Checkout">
                <h3 className="text-gray-200 font-bold text-2xl max-w-[600px] mx-auto mt-5"> Acreditar Acadêmico </h3>
                <h3 className="text-gray-200 font-bold text-2xl max-w-[600px] mx-auto mt-5"> Pagamento por pix </h3>
            </HeaderPage>

            <Section
                name="Checkout Banck Slip"
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
                        <p className="font-bold text-xl text-gray-700 mb-4"> Ao clicar no botão abaixo, será gerado um QRCode com validade de 3 minutos. </p>
                        <p className="font-bold text-xl text-gray-700 mb-4 pb-2 border-b border-gray-100"> Após a confirmação do pedido, você pode retornar à página inicial </p>

                        <div className="w-full mt-8">
                            <div className="w-full flex items-center gap-2 mb-8">
                                <input
                                    className="w-6 h-6 cursor-pointer accent-primary-500"
                                    id="terms"
                                    type="checkbox"
                                    name="terms"
                                    onChange={() => setTermsChecked((current) => !current)}
                                />

                                <label
                                    className="cursor-pointer gap-1"
                                    htmlFor="terms"
                                >
                                    Ao clicar declaro que li e concordo com os
                                    <Link className="text-primary-500 hover:text-primary-700" href="/terms"> Termos de Uso </Link>
                                </label>
                            </div>

                            <Button
                                isFull
                                disabled={!termsChecked}
                                onClick={() => handleSubmit}
                            >
                                Confirmar Pedido e gerar QRCode
                            </Button>
                        </div>

                        <div className="mt-8">
                            <Button
                                isFull
                                onClick={() => setIsExclusiveOpen(!isExclusiveOpen)}
                            >
                                Atendimento Exclusivo
                            </Button>
                        </div>

                        {/* {res.isSuccess && (
                            <div className="w-full mt-8">
                                <Image
                                    src={imageQRCode}
                                    alt="qrcode"
                                />

                                <Button onClick={handleCopyClipboard}>Pix copia e cola </Button>
                            </div>
                        )} */}
                    </div>
                </div>
            </Section>
        </>
    )
}
