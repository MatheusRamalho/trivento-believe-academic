import { useState } from 'react'

import { SubjectProps } from '@/types/Subject'
import { Icon } from './Icon'
import { Subject } from './Subject'

interface SubjectsCategoriesProps {
	key: string
	text: string
	icon: string
}

interface SubjectsOfferedProps {
	disciplines?: SubjectProps[]
}

const optionsCategoriesDisciplines: SubjectsCategoriesProps[] = [
	{ key: 'tudo', text: 'Todas', icon: 'LayoutGrid' },
	{ key: 'multi', text: 'Multidisciplinar', icon: 'Shapes' },
	{ key: 'gestao', text: 'Gestão', icon: 'PieChart' },
	{ key: 'humanas', text: 'Humanas', icon: 'PersonStanding' },
	{ key: 'saude', text: 'Saúde Humana e Animal', icon: 'Cross' },
	{ key: 'exatas', text: 'Exatas e Tecnologia', icon: 'Calculator' },
	{ key: 'exclusivas', text: 'Ofertas Exclusivas', icon: 'BadgePercent' },
]

export const SubjectsOffered = ({ disciplines = [] }: SubjectsOfferedProps) => {
	const [selected, setSelected] = useState('tudo')

	const listSubjects = (item: SubjectProps) => item.related.map((label) => (
		<Subject
			key={label}
			title={label}
			item={item}
		/>
	))

	const disciplinesExclusivas = disciplines
		.filter((item) => item.featured)
		.sort((a, b) => a.name.localeCompare(b.name))

	const disciplinesGerais = disciplines
		.filter((item) => !item.featured)
		.sort((a, b) => a.name.localeCompare(b.name))

	const disciplinesSortableData = [...disciplinesExclusivas, ...disciplinesGerais]

	const handleSelectFilterCategoryDiscipline = (event: any) => {
		console.log(event.currentTarget)
		
		// const left = event.currentTarget.offsetLeft
		// const width = event.currentTarget.offsetWidth

		// if (divRef.current) {
		// 	divRef.current.style.transform = `translateX(${left}px)`
		// 	divRef.current.style.width = `${width}px`
		// }

		// setSelected(opt.key)
	}

	return (
		<div className="">
			<nav className="">
				<ul className="">
					{optionsCategoriesDisciplines
						.filter((opt) => disciplinesSortableData
							.map((item) => item.area)
							.includes(opt.key) || opt.key === 'tudo')
						.map((opt) => (
							<li
								className={`flex items-center justify-center ${selected === opt.key ? 'active' : ''}`}
								key={opt.key}
								role="button"
								onClick={(event) => handleSelectFilterCategoryDiscipline(event)}
							>
								{opt.icon !== null &&
									<Icon name={opt.icon} />
								}

								{opt.text}
							</li>
						))}
				</ul>
			</nav>

			<ul className="">
				{selected === 'tudo' && disciplinesSortableData.map(listSubjects)}

				{disciplinesSortableData
					.filter((item) => item.area === selected)
					.map(listSubjects)}
			</ul>
		</div>
    )
}
