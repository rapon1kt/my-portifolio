import React from "react";
import { Typography } from "@mui/joy";
import "./footer.css";

export default function Footer() {
	const date = new Date();
	return (
		<section id="footer">
			<Typography level="h4" className="footer-title">
				Made with 🤍 by raponikt -{" "}
				<Typography color="neutral">{date.toLocaleDateString()}</Typography>
			</Typography>
		</section>
	);
}
