import Head from "next/head";
import "tailwindcss/tailwind.css";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
	return (
		<ThemeProvider attribute="class">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
