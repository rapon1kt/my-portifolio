import type { Metadata } from "next";
import { Dosis } from "next/font/google";
import "./globals.css";

const dosis = Dosis({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Portifolio",
	description: "Create by raponikt",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-br">
			<body className={dosis.className}>{children}</body>
		</html>
	);
}
