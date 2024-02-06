import { Rocket } from "lucide-react";
import "./navbar.css";

export default function Navbar() {
	return (
		<nav id="navbar">
			<Rocket className="logo" />
			<ul className="nav-links">
				<li className="nav-link">
					<a href="#">Home</a>
				</li>
				<li className="nav-link">
					<a href="#about-me">About Me</a>
				</li>
				<li className="nav-link">
					<a href="#skills">Skills</a>
				</li>
				<li className="nav-link">
					<a href="#projects">Projects</a>
				</li>
				<li className="nav-link">
					<a href="#contact">Contact</a>
				</li>
			</ul>
		</nav>
	);
}
