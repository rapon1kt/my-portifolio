import React from "react";
import { Typography } from "@mui/joy";
import { projects } from "@/data/social";
import { Hash, LinkIcon } from "lucide-react";
import "./projects.css";

export default function Projects() {
	return (
		<section id="projects">
			<div className="top-corner">
				<Typography
					startDecorator={<Hash strokeWidth={3} size={30} />}
					className="projects-title"
				>
					Projects
				</Typography>
				<Typography className="projects-description" level="body-lg">
					In this section, I will demonstrate all my projects that I consider
					relevant to the professional environment. For now, I only have one
					project done, which I consider to have polished the front-end to its
					maximum. However, the backend is still under development, you can
					check out the backend project in more detail{" "}
					<Typography
						component="a"
						style={{
							color: "var(--logo)",
							textDecoration: "none",
							fontWeight: "bold",
						}}
						href="https://github.com/rapon1kt/clean-node-api"
					>
						here
					</Typography>
					.
				</Typography>
			</div>
			<div className="bottom-corner">
				{projects.map((project) => (
					<div className="project-container" key={project.name}>
						<div className="apresentation">
							<Typography
								component="a"
								href={project.link}
								level="h1"
								className="project-name"
								startDecorator={<LinkIcon />}
							>
								{project.name}
							</Typography>
							<img
								className="project-image"
								src={project.src}
								title="Medinik"
							/>
							<Typography
								style={{ textDecoration: "none" }}
								level="body-md"
								component="a"
								href={project.github}
							>
								Link to GitHub repository
							</Typography>
						</div>
						<Typography level="body-lg" className="project-description">
							{project.description}
						</Typography>
					</div>
				))}
			</div>
		</section>
	);
}
