import { ThemeToggle } from '@/shared/lib/theme'
import { Fragment } from 'react'

export default function Home() {
	return (
		<Fragment>
			<ThemeToggle containerClassName='absolute top-2 right-2 z-10' />

			<h1>hello world</h1>
		</Fragment>
	)
}
