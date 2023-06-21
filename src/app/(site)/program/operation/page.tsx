import { HeaderPage } from '@/components/HeaderPage'
import { Section } from '@/components/Section'

export default function ProgramOperationPage() {
    return (
        <>
            <HeaderPage title="Acreditar Acadêmico" />
            
            <Section
                name="Para quem é o Acreditar Acadêmico?"
                customClass="py-40"
            >
                <h3 className="text-gray-700 text-3xl font-bold mb-8" id="operation"> E como serão as atividades? </h3>

                <p className="text-gray-600 text-lg leading-8 mb-7"> O programa Acreditar Acadêmico acontecerá durante o segundo semestre letivo de 2023, quando serão ofertadas disciplinas no formato 100% digital, com combinação de recursos didáticos na plataforma NAV (material de estudo); realização de atividades disponibilizadas no ambiente; e momentos para realização das avaliações presenciais, de acordo com o calendário acadêmico do semestre. Serão considerados aprovados, os alunos que alcançarem nota mínima de 60 pontos nas atividades propostas juntamente com as avaliações realizadas. </p>

                <p className="text-gray-600 text-lg leading-8 mb-7"> Serão considerados aprovados, os alunos que alcaçarem nota mínima de 60 pontos nas atividades propostas juntamente com as avaliações realizadas. </p>

                <p className="text-gray-600 text-lg leading-8 mb-7"> As aulas das disciplinas do Acreditar Acadêmico estão previstas para começar no dia 13/3. Os alunos deverão acessar a NAV (Nosso Ambiente Virtual) para ver os conteúdos postados pelo(a) professor(a). </p>

                <p className="text-gray-600 text-lg leading-8 mb-7"> Cabe ao aluno(a) ser responsável pelo seu estudo, estar atento às orientações postadas pelo professor(a), realizar as atividades disponibilizadas e seguir o cronograma previamente estabelecido, além de comparecer às provas. </p>

                <p className="text-gray-600 text-lg leading-8 mb-7">
                    <b> O cronograma fica sendo: </b>
                </p>

                <p className="text-gray-600 text-lg leading-8 mb-7">
                    <b> 13/3 </b> – Início da 1ª etapa
                </p>

                <p className="text-gray-600 text-lg leading-8 mb-7">
                    <b> 4/5 </b> – Atividade de Verificação 1{" "}
                </p>

                <p className="text-gray-600 text-lg leading-8 mb-7">
                    <b> 9/5 </b> – Solicitação para a Segunda Chamada{" "}
                </p>

                <p className="text-gray-600 text-lg leading-8 mb-7">
                    <b> 11/5 </b> – Aplicação da Prova de Segunda Chamada
                </p>

                <p className="text-gray-600 text-lg leading-8 mb-7">
                    <b> 12/5 </b> – Lançamento das notas da 1ª etapa
                </p>

                <p className="text-gray-600 text-lg leading-8 mb-7">
                    <b> 13/5 </b> – Início da 2ª etapa
                </p>

                <p className="text-gray-600 text-lg leading-8 mb-7">
                    <b> 15/6 </b> – Atividade de Verificação 2{" "}
                </p>

                <p className="text-gray-600 text-lg leading-8 mb-7">
                    <b> 16/6 </b> – Solicitação para a Segunda Chamada
                </p>

                <p className="text-gray-600 text-lg leading-8 mb-7">
                    <b> 20/6 </b> – Aplicação da Prova de Segunda Chamada
                </p>

                <p className="text-gray-600 text-lg leading-8 mb-7">
                    <b> 26/6 </b> – Solicitação da Avaliação Suplementar
                </p>

                <p className="text-gray-600 text-lg leading-8 mb-7">
                    <b> 29/6 </b> – Aplicação da Avaliação Suplementar
                </p>

                <p className="text-gray-600 text-lg leading-8 mb-7">
                    <b> 30/6 </b> – Lançamento das notas da 2ª etapa e encerramento do semestre{" "}
                </p>

                <p className="text-gray-600 text-lg leading-8 mb-7"> Para saber mais sobre cronograma, provas, solicitação e tipos de atividade, acessar a Área do Aluno da sua Faculdade. </p>

                <p className="text-gray-600 text-lg leading-8 mb-7">
                    <b> Observação: </b> {" "}
                    <i> As disciplinas de Estágio Supervisionado, Trabalho de Conclusão de Curso e Experiência Aplicada podem exigir mais encontros presenciais obrigatórios em função da prática profissional do estágio ou do projeto a ser desenvolvido tanto no TCC como na EA. </i>
                </p>
            </Section>
        </>
    )
}
