import { HeaderPage } from '@/components/HeaderPage'
import { Section } from '@/components/Section'

export default function ProgramAboutPage() {
    return (
        <>
            <HeaderPage title="Trivento Educação" />

            <Section
                name="Quem somos"
                customClass="py-40"
            >
                <h3 className="text-gray-700 text-3xl font-bold mb-8"> Quem somos nós </h3>

                <p className="text-gray-600 text-lg leading-8 mb-7"> Com uma proposta inovadora, projeto acadêmico diferenciado e professores com vasta experiência no mercado, o Grupo Trivento Educação chega com um novo conceito de ensino superior, moderno e atual, focado no mercado de trabalho. </p>

                <p className="text-gray-600 text-lg leading-8 mb-7"> Nosso principal objetivo é levar para os alunos o que há de mais moderno e prático no ensino superior. Onde teoria e prática são aliadas, com o uso de tecnologias inovadoras e muita interação entre os estudantes e professores, tornando o aprendizado mais acelerado. </p>

                <p className="text-gray-600 text-lg leading-8 mb-7"> O Grupo Trivento Educação é a união de três instituições espalhadas pelo país, a Faculdade Alis, Serra Dourada Lorena e Serra Dourada Altamira. Estamos sempre crescendo! </p>

                <p className="text-gray-600 text-lg leading-8 mb-7"> Compromisso diário e respeito ao próximo são valores que nossa instituição carrega em seu DNA e, só a partir desses dois pilares sabemos que é possível manter nossa instituição com a excelência que sempre prezamos. Venha fazer parte desse mundo. Juntos, realizaremos seus sonhos e objetivos. </p>

                {/* CARROUSEL AQUI */}
            </Section>
        </>
    )
}
