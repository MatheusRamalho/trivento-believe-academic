import { ReactNode } from 'react'
import Image from 'next/image'

import TriventoImg from '@/assets/imgs/trivento.png'
import FaculdadeAlisImg from '@/assets/imgs/faculdade-alis.png'
import FaculdadeAltamiraImg from '@/assets/imgs/faculdade-altamira.png'
import FaculdadeLorenaImg from '@/assets/imgs/faculdade-lorena.png'

interface AuthLayoutProps {
    children: ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="w-screen h-screen overflow-hidden lg:flex">
            <div className="h-32 lg:h-screen lg:flex-1 flex items-center justify-center flex-col bg-gradient-primary">
                <Image
                    className="w-52"
                    src={TriventoImg}
                    alt="Logo marca da empresa trivento educação"
                />

                <div className="hidden lg:flex items-center justify-center flex-wrap">
                    <Image
                        className="w-52"
                        src={FaculdadeAlisImg}
                        alt="Logo marca da empresa trivento educação"
                    />

                    <Image
                        className="w-52"
                        src={FaculdadeAltamiraImg}
                        alt="Logo marca da empresa trivento educação"
                    />

                    <Image
                        className="w-52"
                        src={FaculdadeLorenaImg}
                        alt="Logo marca da empresa trivento educação"
                    />
                </div>
            </div>

            <main className="h-[calc(100%-8rem)] lg:h-screen flex-1">
                {children}
            </main>
        </div>
    )
}
