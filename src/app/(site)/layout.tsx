import { ReactNode } from 'react'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

interface SiteLayoutProps {
    children: ReactNode
}

export default function SiteLayout({ children }: SiteLayoutProps) {
    return (
        <div className="w-full h-full">
            <Navbar />

            <main className="min-h-screen mt-24">
                {children}
            </main>

            <Footer />
        </div>
    )
}
