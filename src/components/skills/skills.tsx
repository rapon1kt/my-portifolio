import React from "react";
import "./skills.css";
import { Typography } from "@mui/joy";
import { ArrowBigRight, ArrowDown, Hash } from "lucide-react";
import { languages } from "@/data/social";

export default function Skills() {
	return (
		<section id="skills">
			<div className="blob"></div>
			<div className="left-corner">
				<Typography
					className="skills-title"
					startDecorator={<Hash strokeWidth={3} size={30} />}
				>
					My Skills
				</Typography>
				<Typography className="my-description">
					Since I started programming at the age of 14, I have developed with
					technologies that are currently frequently used in the workplace, such
					as JavaScript, Java and Python. I initially used these tools as a
					hobby, to have fun programming games and to seek more knowledge. But
					then I realized that the programming area opens many doors for me to
					develop my creativity and problem-solving, and since then I have
					always sought to bring these skills to my daily life. In addition to
					this desire to discover the world of programming, I took several
					courses in this area, some of which are:
				</Typography>
				<Typography className="list">
					<Typography
						startDecorator={<ArrowBigRight className="arrow" />}
						className="courses"
					>
						The Complete Full-Stack Web Development Bootcamp - Udemy
					</Typography>
					<Typography
						startDecorator={<ArrowBigRight className="arrow" />}
						className="courses"
					>
						NodeJS, Typescript, TDD, DDD, Clean Architecture e Solid - Udemy
					</Typography>
					<Typography
						startDecorator={<ArrowBigRight className="arrow" />}
						className="courses"
					>
						Python 3 - Curso Completo do Básico ao Avançado - Udemy
					</Typography>
					<Typography
						startDecorator={<ArrowBigRight className="arrow" />}
						className="courses"
					>
						Trilha Conectar - Rocketseat
					</Typography>
				</Typography>
			</div>
			<Typography
				level="h3"
				className="languages-title"
				endDecorator={<ArrowDown />}
			>
				Languages
			</Typography>
			<div className="right-corner">
				{languages.map((language) => (
					<div className="programming-language" key={language.name}>
						<img src={language.src} alt={`${language.name} IMG`} />
						<Typography level="title-lg" className="languages-name">
							{language.name}
						</Typography>
					</div>
				))}
			</div>
		</section>
	);
}
