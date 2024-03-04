import type { Config } from 'tailwindcss'
import { colors } from './src/shared/lib/theme/colors'
const {
	default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette')
const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors,
		},
	},
	plugins: [addVariablesForColors],
}
function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme('colors'))
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	)

	addBase({
		':root': newVars,
	})
}
export default config
