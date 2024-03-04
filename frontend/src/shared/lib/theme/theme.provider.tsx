'use client'

import { useTheme } from '@/shared/lib/theme'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'
import { useEffect } from 'react'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
	const { setTheme } = useTheme()
	useEffect(() => {
		const theme = localStorage.getItem('theme')
		if (!theme) setTheme('dark')
	}, [])
	return (
		<NextThemesProvider
			defaultTheme='dark'
			themes={['dark']}
			attribute='class'
			{...props}
		>
			{children}
		</NextThemesProvider>
	)
}
