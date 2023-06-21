import Link from 'next/link'

import { Accordion } from '@/components/Accordion'
import { Section } from '@/components/Section'
import { HeaderPage } from '@/components/HeaderPage'

export default function ProgramContactPage() {
    return (
        <>
            <HeaderPage title="Acreditar Acadêmico" />

            <Section
                name="Dúvidas mais Frequentes"
                customClass="py-40"
            >
                <h3 className="text-gray-700 text-3xl font-bold mb-8"> Dúvidas mais Frequentes </h3>

                <Accordion
                    summary="O que é o Acreditar Acadêmico?"
                    content="O Acreditar Acadêmico é um programa de regularização acadêmica para alunos que estão com pendências em disciplinas."
                />

                <Accordion
                    summary="Como se inscrever?"
                    content="Você pode realizar a sua inscrição clicando"
                >
                    <Link
                        className="text-primary-500 hover:underline hover:text-primary-600"
                        href="/"
                    >
                        aqui
                    </Link>
                </Accordion>

                <Accordion
                    summary="Qual o prazo para se inscrever no Acreditar Acadêmico?"
                    content="Os alunos interessados deverão se inscrever no período de 16 a 30 de agosto de 2021. "
                />

                <Accordion
                    summary="Quem pode participar?"
                    content="Alunos de cursos de graduação que estejam com pendências acadêmicas e desejem cursar tais disciplinas simultaneamente à sua jornada."
                />

                <Accordion
                    summary="Sou de outra instituição de ensino, posso me inscrever?"
                    content="Sim! Os alunos de outras instituições poderão cursar disciplinas isoladas no Acreditar Acadêmico."
                />

                <Accordion
                    summary="Quando começarão as aulas?"
                    content="As disciplinas estão previstas para começarem no dia 06 de setembro e encerrar conforme o calendário acadêmico institucional."
                />

                <Accordion
                    summary="Como serão as aulas?"
                    content="As aulas serão no formato 100% digital, com combinação de recursos didáticos na plataforma, onde você terá à disposição um rico material de estudo e fórum de discussões, além de dois momentos virtuais síncronos com os professores."
                />

                <Accordion
                    summary="Qual o critério de aprovação nas disciplinas?"
                    content=" Serão considerados aprovados, os alunos que alcançarem nota mínima de 60 pontos nas atividades propostas juntamente com as avaliações realizadas."
                />

                <Accordion
                    summary="Vou receber algum certificado?"
                    content="Sim! Ao final do programa e caso aprovado na disciplina, um certificado de conclusão será entregue na sua IES."
                />

                <Accordion
                    summary="Qual o valor de investimento?"
                    content="Os valores do investimento serão variáveis em função do número de disciplinas cursadas. Você pode"
                >
                    <Link
                        className="text-primary-500 hover:underline hover:text-primary-600"
                        href="/sobre/#investimento"
                    >
                        conferir aqui
                    </Link>
                </Accordion>

                <Accordion
                    summary="Posso parcelar no cartão?"
                    content="Claro! Os valores poderão ser parcelados de acordo com o plano de investimento disponível"
                >
                    <Link
                        className="text-primary-500 hover:underline hover:text-primary-600"
                        href="/sobre/#investimento"
                    >
                        neste link
                    </Link>
                </Accordion>
            </Section>
        </>
    )
}
