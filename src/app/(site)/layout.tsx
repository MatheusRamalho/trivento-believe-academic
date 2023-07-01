import { ReactNode } from 'react'

import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'

interface SiteLayoutProps {
    children: ReactNode
}

export default function SiteLayout({ children }: SiteLayoutProps) {
    return (
        <div className="w-full h-full">
            <Navbar.Root />

            <main className="min-h-screen mt-24">
                {children}
            </main>

            <Footer />
        </div>
    )
}
