import { Dosis } from "next/font/google";
import { Preloader } from "@/components";
import type { Metadata } from "next";
import "./globals.css";

const dosis = Dosis({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Portifolio",
	description: "Created by raponikt",
	icons: ["assets/favicon.ico"],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-br">
			<body className={dosis.className}>
				{children ? children : <Preloader />}
			</body>
		</html>
	);
}
