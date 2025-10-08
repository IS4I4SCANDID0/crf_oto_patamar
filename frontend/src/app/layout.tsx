// import { ThemeProvider } from '@/components/themeProvider'
import type { Metadata } from 'next'
import { Nunito_Sans, Jersey_10 } from 'next/font/google'
import '../styles/globals.css'

// const pressStart2P = Press_Start_2P({
// 	variable: '--font-press-start-2P',
// 	subsets: ['latin'],
// 	weight: '400',
// })

const nunitoSans = Nunito_Sans({
	variable: '--font-nunito-sans',
	subsets: ['latin'],
	weight: ['400', '1000', '800'],
})

const jersey = Jersey_10({
	variable: '--font-jersey',
	subsets: ['latin'],
	weight: '400',
})

export const metadata: Metadata = {
	title: 'CRF Oto Patamar',
	description: 'Medidor de "deboche" do Torcedor do Flamengo',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='pt-BR' suppressHydrationWarning>
			<body
				className={`${nunitoSans.variable} ${jersey.variable}
					antialiased w-svw h-screen flex flex-col justify-between relative 
					transition-colors duration-500
					bg-background text-foreground
					overflow-x-hidden 
				`}
			>
				{/* <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange> */}
					{children}
				{/* </ThemeProvider> */}
			</body>
		</html>
	)
}
