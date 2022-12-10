import "../styles/globals.css";
import type { AppProps } from "next/app";

import { Montserrat } from "@next/font/google";
import { Playfair_Display } from "@next/font/google";

/* 
  Configure fonts
*/

const montserrat = Montserrat({
	subsets: ["latin"],
	variable: "--font-montserrat",
});
const play_Display = Playfair_Display({
	subsets: ["latin"],
	variable: "--font-playfair",
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<style jsx global>
				{`
					@layer base {
						body {
							font-family: ${montserrat.style.fontFamily};
						}

						h1,
						h2,
						h3,
						h4,
						h5,
						h6 {
							font-family: ${play_Display.style.fontFamily};
						}
					}
				`}
			</style>
			<Component {...pageProps} />
		</>
	);
}
