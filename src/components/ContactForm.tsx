'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { Fieldset } from '@/components/Fieldset'
import { FormField } from '@/components/FormField'
import { Button } from '@/components/Button'

const newContactFormSchema = zod.object({
    name: zod
        .string()
        .min(1, 'Informe o nome'),
    email: zod
        .string()
        .email(),
    mobilephone: zod
        .string()
        .min(11, { message: 'O número de celular não pode ter menos de 11 dígitos.' })
        .max(11, { message: 'O número de celular não pode ter mais de 11 dígitos.' }),
    message: zod
        .string()
        .min(10, { message: 'A área de texto deve ter pelo menos 10 caracteres.' })
        .max(500, { message: 'A área de texto não pode ter mais de 500 caracteres.' }),
})

type NewContactFormDataProps = zod.infer<typeof newContactFormSchema>

export const ContactForm = () => {
    const { register, handleSubmit, formState } = useForm<NewContactFormDataProps>({
        resolver: zodResolver(newContactFormSchema),
        defaultValues: {
            name: '',
            email: '',
            mobilephone: '',
            message: '',
        },
    })

    const handleNewContact = async (data: NewContactFormDataProps) => {
        console.log(data)
    }

    return (
        <div className="bg-white py-10 px-5 rounded-lg">
            <div className="text-center mb-14">
                <h1 className="text-3xl font-bold mb-4"> Ainda tem dúvida? Nós podemos te ajudar! </h1>
                <h2 className="text-xl text-gray-500"> Se você ainda tem alguma dúvida, preencha o formulário abaixo para que nossos especialistas entrem em contato com você. </h2>
            </div>

            <form
                id="formContact"
                onSubmit={handleSubmit(handleNewContact)}
            >
                <Fieldset
                    toTheForm="formContact"
                    name="dataContactForm"
                    legend="Dados"
                >
                    <div className="sm:flex sm:items-center sm:justify-between sm:flex-wrap sm:gap-4">
                        <FormField
                            labelRequired
                            labelName="Nome completo"
                            inputName="name"
                            inputErrorMessage={formState.errors.name && formState.errors.name.message}
                        >
                            <input
                                id="name"
                                className="input"
                                placeholder="Seu nome"
                                required
                                {...register('name')}
                            />
                        </FormField>

                        <FormField
                            labelRequired
                            labelName="E-mail"
                            inputName="email"
                            inputErrorMessage={formState.errors.email && formState.errors.email.message}
                        >
                            <input
                                className="input"
                                id="email"
                                type="email"
                                placeholder="email@email.com"
                                required
                                {...register('email')}
                            />
                        </FormField>

                        <FormField
                            labelRequired
                            labelName="Telefone"
                            inputName="mobilephone"
                            inputErrorMessage={formState.errors.mobilephone && formState.errors.mobilephone.message}
                        >
                            <input
                                className="input"
                                id="mobilephone"
                                type="tel"
                                min={11}
                                max={11}
                                placeholder="(99) 9 9999-9999"
                                required
                                {...register('mobilephone')}
                            />
                        </FormField>
                    </div>

                    <FormField
                        labelRequired
                        labelName="Assunto"
                        inputName="message"
                        inputErrorMessage={formState.errors.message && formState.errors.message.message}
                    >
                        <textarea
                            className="textarea"
                            id="message"
                            placeholder="Descreve o motivo da solicitação"
                            required
                            aria-describedby="info"
                            {...register('message')}
                        ></textarea>
                    </FormField>
                </Fieldset>

                <Button
                    isFull
                    type="submit"
                    name="forward-contact"
                >
                    Enviar Mensagem
                </Button>
            </form>
        </div>
    )
}
