import { ThemeToggle, colors } from '@/shared/lib/theme/'
import { WavyBackground } from '@/shared/ui'
import { Fragment } from 'react'

export default function Home() {
	return (
		<Fragment>
			<ThemeToggle containerClassName='absolute top-2 right-2 z-10' />

			<WavyBackground
				className='max-w-4xl mx-auto'
				backgroundFill={{ dark: colors.dark, light: colors.light }}
			>
				<h1 className='text-2xl md:text-4xl lg:text-7xl font-bold text-center'>
					my money.
				</h1>
				<p className='text-sm md:text-lg mt-4 text-center'>
					your expen$e tracker. my pet project.
				</p>
			</WavyBackground>
		</Fragment>
	)
}
