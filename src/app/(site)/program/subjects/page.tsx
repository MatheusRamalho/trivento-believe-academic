import { HeaderPage } from '@/components/HeaderPage'
import { Section } from '@/components/Section'
import { SubjectsCard } from '@/components/SubjectsCard'

export default function ProgramSubjectPage() {
    return (
        <>
            <HeaderPage title="Acreditar Acadêmico" />

            <Section
                name="Informações das disciplinas"
                customClass="pt-40"
            >
                <h3 className="text-gray-700 text-3xl font-bold mb-8" id="calendario"> Quando começarão as disciplinas ofertadas no Programa Acreditar Acadêmico Edição 2023? </h3>

                <p className="text-gray-600 text-lg leading-8 mb-7"> As disciplinas estão previstas para começarem no dia 13 de março de 2023 e encerrar conforme o calendário acadêmico institucional. </p>

                <p className="text-gray-600 text-lg leading-8 mb-7">
                    <strong> Atenção: </strong> {" "}
                    <i> Nesta Edição 2023 do Programa Acreditar Acadêmico, não haverá adiamento das atividades avaliativas, nem tão pouco prorrogação dos prazos de entrega das atividades propostas na NAV. Não haverá também inscrições fora do período previsto no calendário do programa. </i>
                </p>

                <p className="text-gray-600 text-lg leading-8 mb-7">
                    <strong> A OnePage completa do programa Acreditar Acadêmico por ser acessada em: </strong> {" "}

                    <a
                        className="text-primary-500 leading-10 hover:text-primary-600"
                        href="https://alisitabirito.com.br/wp-content/uploads/2023/01/OnePage-do-Programa-Acreditar-Academico-2023.1-vfinal.pdf"
                        target="_blank"
                        rel="noreferrer"
                    >
                        programa Acreditar Acadêmico
                    </a>
                </p>

                <p className="text-right">
                    <em> Trivento Educação </em>, 2023.
                </p>
            </Section>

            <Section
                name="Dísciplinas disponíveis"
                customClass="py-40"
            >
                <SubjectsCard area="gestao" />
                <SubjectsCard area="saude" />
                <SubjectsCard area="exatas" />
                <SubjectsCard area="humanas" />
            </Section>
        </>
    )
}
