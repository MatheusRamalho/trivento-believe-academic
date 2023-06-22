import { HeaderPage } from '@/components/HeaderPage'
import { Section } from '@/components/Section'
import { SubjectsOffered } from '@/components/SubjectsOffered'

export default function Home() {
	return (
		<>
			<HeaderPage title="Acreditar Acadêmico">
				<h3 className="text-gray-200 font-bold text-2xl max-w-[600px] mx-auto mt-5"> Seu currículo atualizado, sua formação em sintonia com as demandas com o mundo do trabalho. </h3>
			</HeaderPage>

			<Section
				name="Etapas de contratação"
				id="steps"
			>
				<div className="pt-24">
					<h2 className="text-center text-gray-700 text-3xl font-bold"> Contrate em apenas 3 etapas: </h2>

					<div className="flex flex-col items-center justify-center gap-2 mt-10 sm:flex-row sm:flex-wrap">
						<div className="w-72 p-4 flex items-center justify-start flex-col text-center">
							<div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center font-black text-white text-4xl sm:w-28 sm:h-28 sm:text-7xl"> 1 </div>
							<span className="mt-5 text-gray-700 text-xl"> Confira abaixo as opções por área do conhecimento. </span>
						</div>

						<div className="w-72 p-4 flex items-center justify-start flex-col text-center">
							<div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center font-black text-white text-4xl sm:w-28 sm:h-28 sm:text-7xl"> 2 </div>
							<span className="mt-5 text-gray-700 text-xl"> Selecione as disciplinas que você quer cursar. </span>
						</div>

						<div className="w-72 p-4 flex items-center justify-start flex-col text-center">
							<div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center font-black text-white text-4xl sm:w-28 sm:h-28 sm:text-7xl"> 3 </div>
							<span className="mt-5 text-gray-700 text-xl"> Finalize a contratação no “Carrinho”. </span>
						</div>
					</div>
				</div>
			</Section>

			<Section
				name="Lista de disciplinas"
				id=""
			>
				<blockquote className="max-w-[700px] mx-auto mt-10 p-8 rounded-xl bg-yellow-400">
					<h5 className="font-bold text-xl mb-3"> Inscrições encerradas </h5>

					<p className="text-gray-800 leading-7 mb-3"> As inscrições para o Acreditar Acadêmico estão encerradas no momento. Fique ligado nos nossos canais oficiais para mais informações sobre as próximas inscrições! </p>

					<cite> Trivento Educação </cite>
				</blockquote>

				{/* <SubjectsOffered disciplines={} /> */}
			</Section>
		</>
	)
}
