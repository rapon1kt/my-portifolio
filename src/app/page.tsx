import { Navbar, Welcome, AboutMe } from "@/components";

export default function Home() {
	return (
		<div id="container">
			<Navbar />
			<Welcome />
			<AboutMe />
		</div>
	);
}
