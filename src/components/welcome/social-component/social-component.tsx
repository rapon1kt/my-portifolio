import { GitHub } from "@mui/icons-material";

type SocialType = {
	link: string;
	Icon: typeof GitHub;
};

export default function Social({ link, Icon }: SocialType) {
	return (
		<>
			<a className="social-link" href={link}>
				<Icon className="social-icon" />
			</a>
			<div className="dot"></div>
		</>
	);
}
