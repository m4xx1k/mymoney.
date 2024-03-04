'use client'
import { useTheme } from '@/shared/lib/theme'
import { cn } from '@/shared/utils'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useEffect, useState } from 'react'

export const ThemeToggle = ({ containerClassName }: Props) => {
	const [mounted, setMounted] = useState(false)
	const { setTheme, theme } = useTheme()
	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}
	useEffect(() => {
		setMounted(true)
	}, [])
	if (!mounted) return null
	return (
		<div className={cn('flex gap-2', containerClassName)}>
			{
				<button
					className='p-1 border border-neutral rounded-md'
					key={theme}
					onClick={toggleTheme}
				>
					{theme === 'dark' ? <SunIcon /> : <MoonIcon />}
				</button>
			}
		</div>
	)
}
type Props = {
	containerClassName?: string
}
