"use client";
import { Rocket } from "lucide-react";
import "./navbar.css";
import { useMediaQuery } from "@mui/material";
import NavbarMenu from "./navbar-menu/navbar-menu";

export default function Navbar() {
	const media = useMediaQuery("(max-width: 535px)");

	return (
		<nav id="navbar">
			<Rocket className="logo" />
			{media && <NavbarMenu />}
			{!media && (
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
				</ul>
			)}
		</nav>
	);
}
