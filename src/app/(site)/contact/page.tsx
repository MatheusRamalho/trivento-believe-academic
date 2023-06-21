import { ContactForm } from '@/components/ContactForm'
import { HeaderPage } from '@/components/HeaderPage'
import { Section } from '@/components/Section'

export default function ProgramContactPage() {
    return (
        <>
            <HeaderPage title="Contato" />

            <Section
                name="Contato sobre dúvidas"
                customClass="py-40 bg-gray-100"
            >
                <ContactForm />
            </Section>
        </>
    )
}
