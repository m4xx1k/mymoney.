import { ThemeToggle, colors } from '@/shared/lib/theme/'
import { WavyBackground } from '@/shared/ui'
import Link from 'next/link'
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
				<Link
					href='/dashboard'
					className='block bg-primary w-fit text-light rounded-lg p-2 mt-2 mx-auto transition-all duration-200 hover:scale-110 hover:shadow-lg'
				>
					Go to Dashboard
				</Link>
			</WavyBackground>
		</Fragment>
	)
}
