'use client'
import { ThemeValue } from '@/shared/lib/theme'
import { useTheme as useThemeDefault } from 'next-themes'
export const useTheme = () => {
	const {
		theme: themeDefault,
		setTheme: setThemeDefault,
		...rest
	} = useThemeDefault()
	const theme = themeDefault as ThemeValue

	const setTheme = (theme: ThemeValue) => setThemeDefault(theme)
	return { theme, setTheme, ...rest }
}
