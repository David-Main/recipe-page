import "../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html>
			<head />
			<body className="max-w-screen-2xl px-4 py-6">{children}</body>
		</html>
	);
}
