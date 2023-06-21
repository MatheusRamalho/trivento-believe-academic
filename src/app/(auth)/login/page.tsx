import { Button } from "@/components/Button";
import { Fieldset } from "@/components/Fieldset";
import { FormField } from "@/components/FormField";

export default function Login() {
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
                // onSubmit={handleSubmit(handleNewContact)}
            >
                <Fieldset
                    toTheForm="formLogin"
                    name="dataLoginForm"
                    legend="Dados"
                >
                    <FormField
                        labelRequired
                        labelName="Código de usuário"
                        inputName="coduser"
                        // inputErrorMessage={formState.errors.coduser && formState.errors.coduser.message}
                    >
                        <input
                            id="coduser"
                            className="input"
                            placeholder=""
                            required
                            // {...register('coduser')}
                        />
                    </FormField>

                    <FormField
                        labelRequired
                        labelName="Senha"
                        inputName="password"
                        // inputErrorMessage={formState.errors.password && formState.errors.password.message}
                    >
                        <input
                            className="input"
                            id="password"
                            type="password"
                            placeholder="******"
                            required
                            // {...register('password')}
                        />
                    </FormField>
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
