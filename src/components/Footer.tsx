import Link from 'next/link'
import Image from 'next/image'

import { Icon } from './Icon'

import TriventoIcon from '@/assets/imgs/trivento-icon.svg'
import TriventoImg from '@/assets/imgs/trivento.png'
import FaculdadeAlisImg from '@/assets/imgs/faculdade-alis.png'
import FaculdadeAltamiraImg from '@/assets/imgs/faculdade-altamira.png'
import FaculdadeLorenaImg from '@/assets/imgs/faculdade-lorena.png'

export const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="p-10 bg-gradient-primary">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 my-16 sm:flex-row sm:flex-wrap sm:gap-4">
                <article className="flex-1 flex items-center justify-center sm:flex-col">
                    <Image
                        className="w-40"
                        src={TriventoImg}
                        alt="Logo marca da empresa trivento educação"
                    />

                    <ul className="flex items-center justify-center flex-wrap gap-2 mt-3">
                        <li className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-primary-800">
                            <Link href="https://www.instagram.com/triventoeducacao/" target="_blank" title="Link do perfil do Instagram">
                                <Icon
                                    name="Instagram"
                                    customClass="w-8 h-8 stroke-white"
                                />
                            </Link>
                        </li>

                        <li className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-primary-800">
                            <Link href="https://br.linkedin.com/company/trivento-educacao" target="_blank" title="Link do perfil do Linkedin">
                                <Icon
                                    name="Linkedin"
                                    customClass="w-8 h-8 stroke-white"
                                />
                            </Link>
                        </li>
                    </ul>
                </article>

                <article className="flex-1 flex items-center justify-center sm:flex-col">
                    <Image
                        className="w-40"
                        src={FaculdadeAlisImg}
                        alt="Logo marca da empresa trivento educação"
                    />

                    <ul className="flex items-center justify-center flex-wrap gap-2 mt-3">
                        <li className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-primary-800">
                            <Link href="https://www.instagram.com/alis.itabirito/?hl=pt-br" target="_blank" title="Link do perfil do Instagram">
                                <Icon
                                    name="Instagram"
                                    customClass="w-8 h-8 stroke-white"
                                />
                            </Link>
                        </li>

                        <li className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-primary-800">
                            <Link href="https://m.facebook.com/alisitabirito/?locale2=pt_BR" target="_blank" title="Link do perfil do Facebook">
                                <Icon
                                    name="Facebook"
                                    customClass="w-8 h-8 stroke-white"
                                />
                            </Link>
                        </li>
                    </ul>
                </article>

                <article className="flex-1 flex items-center justify-center sm:flex-col">
                    <Image
                        className="w-40"
                        src={FaculdadeAltamiraImg}
                        alt="Logo marca da empresa trivento educação"
                    />

                    <ul className="flex items-center justify-center flex-wrap gap-2 mt-3">
                        <li className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-primary-800">
                            <Link href="https://www.instagram.com/serradouradaaltamira/?hl=pt-br" target="_blank" title="Link do perfil do Instagram">
                                <Icon
                                    name="Instagram"
                                    customClass="w-8 h-8 stroke-white"
                                />
                            </Link>
                        </li>

                        <li className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-primary-800">
                            <Link href="https://pt-br.facebook.com/serradouradaaltamira/" target="_blank" title="Link do perfil do Facebook">
                                 <Icon
                                    name="Facebook"
                                    customClass="w-8 h-8 stroke-white"
                                />
                            </Link>
                        </li>
                    </ul>
                </article>

                <article className="flex-1 flex items-center justify-center sm:flex-col">
                    <Image
                        className="w-40"
                        src={FaculdadeLorenaImg}
                        alt="Logo marca da empresa trivento educação"
                    />

                    <ul className="flex items-center justify-center flex-wrap gap-2 mt-3">
                        <li className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-primary-800">
                            <Link href="https://www.instagram.com/serradouradalorena/?hl=pt-br" target="_blank" title="Link do perfil do Instagram">
                                <Icon
                                    name="Instagram"
                                    customClass="w-8 h-8 stroke-white"
                                />
                            </Link>
                        </li>

                        <li className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-primary-800">
                            <Link href="https://pt-br.facebook.com/serradouradalorena/" target="_blank" title="Link do perfil do Facebook">
                                 <Icon
                                    name="Facebook"
                                    customClass="w-8 h-8 stroke-white"
                                />
                            </Link>
                        </li>
                    </ul>
                </article>
            </div>

            <div className="container mx-auto flex items-center justify-start flex-col gap-6 p-4 border-t border-primary-400 sm:justify-between sm:flex-row">
                <div className="flex items-center gap-10">
                    <Image
                        className="w-12"
                        src={TriventoIcon}
                        alt="Logo marca da empresa trivento educação"
                    />

                    <div className="">
                        <Link
                            className="text-gray-100 leading-10 hover:text-primary-100"
                            href="/terms"
                        >
                            Termos de uso
                        </Link>

                        <p className="text-gray-300"> Trivento Educação &copy; {currentYear}. Todos os direitos reservados. </p>
                    </div>
                </div>

                <div className="w-full pl-10 sm:w-auto sm:pl-0">
                    <a
                        className="flex items-start gap-10"
                        href="https://api.whatsapp.com/send?phone=553196268077&text=Ol%C3%A1%21"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <Icon
                            name="MessagesSquare"
                            customClass="stroke-white"
                        />
                        <p className="text-white"> Tem alguma dúvida sobre o Acreditar Acadêmico? <br /> <b> Fale com o Tony </b> </p>
                    </a>
                </div>
            </div>
        </footer>
    )
}
