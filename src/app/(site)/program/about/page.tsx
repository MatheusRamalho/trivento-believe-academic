import Link from 'next/link'

import { Section } from '@/components/Section'
import { Icon } from '@/components/Icon'
import { HeaderPage } from '@/components/HeaderPage'

export default function ProgramPage() {
    return (
        <>
            <HeaderPage title="Acreditar Acadêmico" />

            <Section
                name="Não deixe o seu sonho para depois"
                customClass="pt-40 pb-20"
            >
                <h3 className="text-gray-700 text-3xl font-bold mb-8"> Não deixe o seu sonho para depois </h3>

                <p className="text-gray-600 text-lg leading-8 mb-7"> O <b>Acreditar Acadêmico</b> é um programa do Grupo Trivento Educação de regularização acadêmica pensado especialmente para você, aluno de graduação que está com alguma pendência em disciplinas anteriormente cursadas. Com o Acreditar Acadêmico, você não precisa deixar para depois a tão sonhada colação de grau, aqui você pode cursar essas pendências sem atrapalhar a jornada prevista do seu curso. </p>

                <Link href="/"> Não quero perder tempo </Link>
            </Section>

            <Section
                name="Sua história de sucesso continua aqui"
                customClass="pb-20"
            >
                <h3 className="text-gray-700 text-3xl font-bold mb-8"> Sua história de sucesso continua aqui </h3>

                <ul className="flex flex-col gap-10 sm:flex-row sm:flex-wrap sm:justify-between">
                    <li className="sm:w-1/3">
                        <div className="flex items-center gap-3">
                            <Icon name="Expand" customClass="stroke-primary-500" />
                            <h6 className="font-bold text-2xl text-gray-700 underline underline-offset-4"> Flexibilidade </h6>
                        </div>
                        <p className="text-gray-600 text-lg leading-8 pl-8 pt-6 max-w-xs"> Aulas no formato 100% digital. </p>
                    </li>

                    <li className="sm:w-1/3">
                        <div className="flex items-center gap-3">
                            <Icon name="Medal" customClass="stroke-primary-500" />
                            <h6 className="font-bold text-2xl text-gray-700 underline underline-offset-4"> Reconhecimento </h6>
                        </div>
                        <p className="text-gray-600 text-lg leading-8 pl-8 pt-6 max-w-xs"> Certificação reconhecida pelo MEC. </p>
                    </li>

                    <li className="sm:w-1/3">
                        <div className="flex items-center gap-3">
                            <Icon name="Zap" customClass="stroke-primary-500" />
                            <h6 className="font-bold text-2xl text-gray-700 underline underline-offset-4"> Facilidade </h6>
                        </div>
                        <p className="text-gray-600 text-lg leading-8 pl-8 pt-6 max-w-xs"> Estude no melhor ambiente de aprendizagem com uma plataforma que
                            tem tudo o que você precisa. </p>
                    </li>

                    <li className="sm:w-1/3">
                        <div className="flex items-center gap-3">
                            <Icon name="Lightbulb" customClass="stroke-primary-500" />
                            <h6 className="font-bold text-2xl text-gray-700 underline underline-offset-4"> Competência </h6>
                        </div>
                        <p className="text-gray-600 text-lg leading-8 pl-8 pt-6 max-w-xs"> Professores altamente capacitados e que buscam sempre inovar em
                            suas práticas de lecionar. </p>
                    </li>
                </ul>
            </Section>

            <Section
                name="Para quem é o Acreditar Acadêmico?"
                customClass="pb-40"
            >
                <h3 className="text-gray-700 text-3xl font-bold mb-8" id="program"> Para quem é o Acreditar Acadêmico? </h3>

                <div>
                    <p className="text-gray-600 text-lg leading-8 mb-7"> O Acreditar Acadêmico é para você: </p>

                    <p className="text-gray-600 text-lg leading-8 mb-7"> <b> Estudante universitário com pendências acadêmicas </b>, em função de não terem alcançado a aprovação em disciplinas anteriormente cursadas. Assim, você evita postergar a tão sonhada colação de grau, cursando as disciplinas pendentes paralelamente à jornada prevista do seu curso. </p>
                </div>

                <div>
                    <p className="text-gray-600 text-lg leading-8 mb-7"> Para você {" "} <b> que estuda na Faculdade Serra Dourada ou na Faculdade Alis </b>, que fazem parte do grupo Trivento Educação: </p>

                    <p className="text-gray-600 text-lg leading-8 mb-7"> 1 - Você poderá visualizar na lista de disciplinas, aquelas que estão sendo ofertadas no programa Acreditar Acadêmico. <b> Caso você não encontre a disciplina procurada, é porque ela não está sendo ofertada nesta edição 2023. Acompanhe as próximas chamadas do programa. </b> </p>

                    <p className="text-gray-600 text-lg leading-8 mb-7"> 2 - Você observará que na cesta de produtos (segunda etapa do processo), para cada disciplina selecionada, aparecerá a disciplina que você irá cursar em equivalência no Acreditar Acadêmico. </p>

                    <p className="text-gray-600 text-lg leading-8 mb-7"> 3 - Você terá a equivalência lançada no seu histórico escolar, somente mediante a aprovação na disciplina dentro do Acreditar Acadêmico edição 2023 conforme previsto no calendário do programa. </p>
                </div>
            </Section>
        </>
    )
}
