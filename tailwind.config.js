/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'primary-100': '#E86996',
				'primary-200': '#E65A8C',
				'primary-300': '#E44980',
				'primary-400': '#E13773',
				'primary-500': '#DE2365',
				'primary-600': '#CA205C',
				'primary-700': '#B81D54',
				'primary-800': '#A71A4c',
				'secondary-500': '#C73065',
			},
		},
		listStyleType: {
			roman: 'upper-roman',
		}
	},
	plugins: [],
}
