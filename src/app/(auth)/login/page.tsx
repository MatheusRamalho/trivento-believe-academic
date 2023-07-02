'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { Button } from '@/components/Button'
import { Fieldset } from '@/components/Fieldset'
import { FormField } from '@/components/FormField'

const loginFormSchema = zod.object({
    coduser: zod
        .string()
        .min(9, { message: 'O codigo não pode ter menos de 9 dígitos.' })
        .max(9, { message: 'O codigo não pode ter mais de 9 dígitos.' }),
    password: zod.string()
})

type LoginFormDataProps = zod.infer<typeof loginFormSchema>

export default function Login() {
    const { register, handleSubmit, formState } = useForm<LoginFormDataProps>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            coduser: '',
            password: '',
        },
    })

    const handleLogin = async (data: LoginFormDataProps) => {
        console.log(data)
    }

    return (
        <div className="w-full h-full flex items-center justify-center flex-col p-5 rounded-lg sm:px-14 md:px-32 2xl:px-52">
            <div className="w-full mb-14">
                <h2 className="text-3xl font-bold mb-4"> Login </h2>
                <p className="text-xl text-gray-500"> Faça seu login para continuar </p>
                <p className="text-xl text-gray-500"> Faça login usando o mesmo usuário e senha da NAV (CPF) </p>
            </div>

            <form
                id="formLogin"
                className="w-full"
                onSubmit={handleSubmit(handleLogin)}
            >
                <Fieldset
                    toTheForm="formLogin"
                    name="dataLoginForm"
                    legend="Dados"
                >
                    <FormField.Root>
                        <FormField.Label name="Código de usuário" inputName="coduser">
                            <FormField.Mandatory />
                        </FormField.Label>

                        <input
                            id="coduser"
                            className="input"
                            placeholder=""
                            required
                            {...register('coduser')}
                        />

                        <FormField.Error message={formState.errors.coduser && formState.errors.coduser.message} />
                    </FormField.Root>

                    <FormField.Root>
                        <FormField.Label name="Senha" inputName="password">
                            <FormField.Mandatory />
                        </FormField.Label>

                        <input
                            className="input"
                            id="password"
                            type="password"
                            placeholder="******"
                            required
                            {...register('password')}
                        />

                        <FormField.Error message={formState.errors.password && formState.errors.password.message} />
                    </FormField.Root>
                </Fieldset>

                <Button
                    isFull
                    type="submit"
                    name="login"
                >
                    Entrar
                </Button>
            </form>
        </div>
    )
}
