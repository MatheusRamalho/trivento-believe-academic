import { HeaderPage } from '@/components/HeaderPage'
import { Section } from '@/components/Section'

export default function PrograminvestmentPage() {
    return (
        <>
            <HeaderPage title="Acreditar Acadêmico" />

            <Section
                name="Qual será o investimento necessário?"
                customClass="py-40"
            >
                <h3 className="text-gray-700 text-3xl font-bold mb-8"> Qual será o investimento necessário? </h3>

                <p className="text-gray-600 text-lg leading-8 mb-7">
                    <i> Valor da disciplina Básica: R$800,00 </i>
                </p>

                <p className="text-gray-600 text-lg leading-8 mb-7">
                    <i> Valor da disciplina Especial: R$1650,00 </i>
                </p>

                <p className="text-gray-600 text-lg leading-8 mb-7"> Os valores do investimento são variáveis em função do número de disciplinas cursadas, <b> no máximo 5 </b>. O pagamento será feito com cartão de crédito. Os valores poderão ser parcelados de acordo com o plano de investimento que o(a) aluno(a) escolher no final da compra. Não serão aceitas solicitações fora do prazo de inscrição previsto no calendário acadêmico, nem pagamento com boleto. </p>

                <p className="text-gray-600 text-lg leading-8 mb-7">
                    <i> 1 Disciplina até 3 vezes no cartão / 2 Disciplinas até 4 vezes no cartão / 3 ou mais disciplinas até 5 vezes no cartão </i>
                </p>

                <p className="text-gray-600 text-lg leading-8 mb-7">
                    <i> Desconto para número de disciplinas: R$125,00 para cada disciplina a mais, limitando a R$250,00 por disciplina. </i>
                </p>

                <p className="text-gray-600 text-lg leading-8 mb-7">
                    <b> O valor da parcela depende do número de parcelas escolhidas no momento da inscrição. Sendo assim, se o pagamento for à vista (numa única parcela), o aluno terá um desconto de 5%. </b>
                </p>

                <p className="text-gray-600 text-lg leading-8 mb-7">
                    <b> FAÇA A SUA SIMULAÇÃO NA LOJINHA. COLOQUE NO CARRINHO AS DISCIPLINAS QUE VOCÊ DEVE (máximo 5) E SIMULE OS VALORES E OPÇÕES DE PARCELAMENTO.{" "} </b>
                </p>

                <p className="text-gray-600 text-lg leading-8 mb-7">
                    <strong>
                        <i> Não se aplicam no Acreditar Acadêmico, os eventuais descontos que o aluno tenha nas suas mensalidades do curso na Faculdade. </i>
                    </strong>
                </p>

                <p className="text-gray-600 text-lg leading-8 mb-7">
                    <strong>
                        <i> O valor por disciplina apresentado é o investimento necessário para cursar a disciplina completa e não uma mensalidade ou semestralidade. </i>
                    </strong>
                </p>
            </Section>
        </>
    )
}
