import { ROUTES } from '@/shared/constants'
import {
	CubeIcon,
	DashboardIcon,
	PersonIcon,
	ReaderIcon,
	TableIcon,
} from '@radix-ui/react-icons'
import { IconProps } from '@radix-ui/react-icons/dist/types'
import { ForwardRefExoticComponent, RefAttributes } from 'react'
export const navigationLinks: NavigationLink[] = [
	{ title: 'Dashboard', href: ROUTES.DASHBOARD, icon: DashboardIcon },
	{
		title: 'Accounts',
		href: ROUTES.ACCOUNTS,
		icon: CubeIcon,
	},
	{ title: 'Categories', href: ROUTES.CATEGORIES, icon: TableIcon },
	{ title: 'Transactions', href: ROUTES.TRANSACTIONS, icon: ReaderIcon },
	{ title: 'Profile', href: ROUTES.PROFILE, icon: PersonIcon },
]
type NavigationLink = {
	title: string
	href: string
	icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
}
