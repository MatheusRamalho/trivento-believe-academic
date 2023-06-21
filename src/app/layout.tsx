import '../styles/globals.css'

import { ReactNode } from 'react'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['400', '700', '900']
})

export const metadata = {
	title: 'Acreditar acadêmico',
	description: 'Acreditar acadêmico',
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className={roboto.className}>
				{children}
			</body>
		</html>
	)
}
