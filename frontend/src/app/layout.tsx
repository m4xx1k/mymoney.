import { ThemeProvider } from '@/shared/lib/theme'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const font = Poppins({
	subsets: ['latin'],
	weight: ['300', '400', '600', '700'],
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'my money.',
	description: '',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' suppressHydrationWarning={true}>
			<body className={font.className}>
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	)
}
