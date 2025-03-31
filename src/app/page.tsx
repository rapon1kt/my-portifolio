import {
	Navbar,
	Welcome,
	AboutMe,
	Skills,
	Projects,
	Footer,
} from "@/components";

export default function Home() {
	return (
		<div id="container">
			<Navbar />
			<Welcome />
			<AboutMe />
			<Skills />
			<Projects />
			<Footer />
		</div>
	);
}
