import { ThemeToggle } from '@/shared/lib/theme'
import Link from 'next/link'
import { navigationLinks } from './navigation-links'

export const Navigation = () => {
	return (
		<section className='w-full sm:w-1/12 md:w-3/12 xl:w-2/12'>
			<div className='mx-auto w-fit flex items-center gap-1 md:pl-10 md:w-full'>
				<ThemeToggle containerClassName='hidden sm:block' />
				<h2 className=' text-xs tracking-wider hidden md:block md:text-lg lg:text-xl'>
					my money.
				</h2>
			</div>
			<ul className='flex justify-around items-center shadow rounded-lg mt-4 self-end mb-1 sm:flex-col sm:gap-4 md:ml-8 sm:self-start sm:mb-0	'>
				{navigationLinks.map(link => (
					<li
						className='w-fit text-xl font-thin rounded-xl hover:bg-primary transition-colors duration-200 md:w-full'
						key={link.title}
					>
						<Link
							href={link.href}
							className='flex gap-2.5 items-center justify-center w-8 h-8 m-2 sm:m-0 md:w-full md:pl-4 md:justify-start md:h-12'
						>
							<link.icon
								width={24}
								height={24}
								className='block md:hidden lg:block'
							/>
							<p className='hidden md:block'>{link.title}</p>
						</Link>
					</li>
				))}
			</ul>
		</section>
	)
}
