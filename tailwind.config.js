const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				Montserrat: ["Montserrat", "ui-sans-serif"],
			},
			colors: {
				black: {
					1: "#050607",
					2: "#171717",
				},
				red: {
					1: "#FF0000",
					2: "#FFE5A1",
					3: "#D99A01",
				},
				grey: {
					1: "#EFF3FB",
				},
				white: {
					1: "#F5F5F5",
				},
			},
		},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			const utilities = {
				".bg-hero": {
					"background-image": "url(/bg-hero.png)",
				},
			};
			addUtilities(utilities);
		}),
	],
	darkMode: "class",
};
