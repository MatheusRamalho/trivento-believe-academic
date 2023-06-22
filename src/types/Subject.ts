export interface SubjectProps {
	id: string
	name: string
	related: string[]
	area: string
	price: string
	featured?: boolean
	description?: string | null
}
