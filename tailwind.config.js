/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-montserrat)", "sans-serif"],
				serif: ["var(--font-playfair)", "serif"],
			},
		},
	},
	plugins: [],
};
