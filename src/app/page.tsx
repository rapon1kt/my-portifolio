import { Navbar, Welcome, AboutMe, Skills } from "@/components";

export default function Home() {
	return (
		<div id="container">
			<Navbar />
			<Welcome />
			<AboutMe />
			<Skills />
		</div>
	);
}
