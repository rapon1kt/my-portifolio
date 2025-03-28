import { Navbar, Welcome, AboutMe } from "@/components";
import Skills from "@/components/skills/skills";

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
