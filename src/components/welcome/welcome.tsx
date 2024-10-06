"use client";
import Social from "./social-component/social-component";
import socialMedia from "@/data/social";
import { useEffect } from "react";
import "./welcome.css";
import { useMediaQuery } from "@mui/material";

export default function Welcome() {
	const media = useMediaQuery(`(max-width: 1040px)`);

	const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

	let interval: any;

	useEffect(() => {
		document.querySelector("h1")!.onmouseover = (event: any) => {
			let iteration = 0;
			let i = 0;
			const txt = " my portifolio!";
			const speed = 50;
			const chipText = document.getElementById("chip-text");

			clearInterval(interval);
			function typeWriter() {
				if (chipText) {
					if (chipText.textContent!.length === 25) {
						chipText.innerHTML += "";
					} else if (i < txt.length) {
						chipText.innerHTML += txt.charAt(i);
						i++;
						setTimeout(typeWriter, speed);
					}
				} else {
					return;
				}
			}
			typeWriter();

			interval = setInterval(() => {
				event.target!.innerText = event.target.innerText
					.split("")
					.map((letter: string, index: number) => {
						if (index < iteration) {
							return event.target.dataset.value[index];
						}

						return letters[Math.floor(Math.random() * 26)];
					})
					.join("");

				if (iteration >= event.target.dataset.value.length) {
					clearInterval(interval);
				}

				iteration += 1 / 3;
			}, 30);
		};
	}, []);

	return (
		<main id="Welcome">
			{media && (
				<div className="middle-corner">
					<div id="blob"></div>
					<div id="blur"></div>
					<div id="picture"></div>
				</div>
			)}
			<div className="left-corner">
				<div className="chip">
					<p id="chip-text">Welcome to</p>
				</div>
				<h1 data-value="Gustavo Raponi">My Portifolio!</h1>
				<p>16y, Full-Stack Developer</p>
				<div className="social">
					{socialMedia.map((media) => (
						<Social Icon={media.icon} link={media.link} key={media.link} />
					))}
				</div>
			</div>
			{!media && (
				<div className="middle-corner">
					<div id="blob"></div>
					<div id="blur"></div>
					<div id="picture"></div>
				</div>
			)}
			<div className="right-corner">
				<button className="email-button">Send me an email!</button>
			</div>
		</main>
	);
}
