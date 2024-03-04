import { Navigation } from '@/widgets/navigation'

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='flex max-w-screen-2xl flex-col-reverse h-full sm:flex-row py-4'>
			<Navigation />
			<main className='flex flex-col grow h-full items-stretch'>
				{children}
			</main>
		</div>
	)
}

export default layout
