/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			spacing: {
				15: '3.75rem',
				26: '6.5rem',
			},
			colors: {
				maroonPrimary: '#942661',
				maroonSecondary: '#57184D',
				success: '#25B03B',
				error: '#CE4E4E',
				light: '#FFFDFD',
				'dark-100': 'rgba(28, 29, 33, 1)',
				'dark-90': 'rgba(28, 29, 33, .9)',
				'dark-75': 'rgba(28, 29, 33, .75)',
				'dark-50': 'rgba(28, 29, 33, .5)',
				'dark-25': 'rgba(28, 29, 33, .25)',
				'dark-10': 'rgba(28, 29, 33, .1)',
			},
			fontFamily: {
				body: ['Poppins', ...defaultTheme.fontFamily.sans],
				heading: ['Outfit', ...defaultTheme.fontFamily.sans],
			},
			backgroundImage: () => ({
				pattern: "url('./assets/img/pattern.png')",
			}),
		},
	},
	plugins: [],
};
