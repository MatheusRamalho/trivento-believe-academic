import Link from 'next/link'

const academicAreas = {
    gestao: {
        title: 'Gestão',
        items: [
            'Administração Estratégica',
            'Análise de Custos e Formação de Preços',
            'Avaliação do Desempenho das Pessoas',
            'Contabilidade de Custos',
            'Controle da Qualidade Industrial',
            'Custos Industriais',
        ],
    },
    saude: {
        title: 'Saúde',
        items: [
            'Anatomia e Fisiologia',
            'Farmacologia Toxicológica',
            'Genética Básica',
            'Genética e Embriologia',
            'Metodologia Científica',
            'Patologia Geral',
        ],
    },
    exatas: {
        title: 'Exatas e Tecnologia',
        items: [
            'Álgebra e Geometria',
            'Algoritmo e Lógica de Programação',
            'Cálculo Aplicado à Engenharia',
            'Calorimetria e Hidrodinâmica',
            'Computação Aplicada à Engenharia',
            'Estatística e Probabilidade',
        ],
    },
    humanas: {
        title: 'Humanas',
        items: [
            'Antropologia',
            'Estudos Culturais e Antropológicos',
            'Estudos Filosóficos e Sociológicos',
            'Filosofia',
            'Neuropsicologia',
            'Psicologia Escolar e Educacional',
        ],
    },
}

interface SubjectCardProps {
    area: 'gestao' | 'saude' | 'exatas' | 'humanas'
}

export const SubjectsCard = ({ area }: SubjectCardProps) => {
    return (
        <article className="w-full h-auto m-2 border border-gray-200 rounded-lg">
            <div className="bg-primary-500 rounded-tl-lg rounded-tr-lg py-4 px-8">
                <h3 className="text-white font-bold text-2xl"> {academicAreas[area].title} </h3>
            </div>

            <ul className="py-4 px-8">
                {academicAreas[area].items.map(item => {
                    return (
                        <li
                            key={item}
                            className="text-gray-600 text-sm leading-8"
                        >
                            {item}
                        </li>
                    )
                })}
            </ul>

            <div className="py-4 px-8">
                <Link
                    href="/"
                    className="text-primary-500 hover:text-primary-600 hover:underline"
                >
                    Ver todas
                </Link>
            </div>
        </article>
    )
}
