import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MenuIcon } from "lucide-react";

const menuData = [
	{
		title: "About Me",
		link: "#about-me",
	},
	{
		title: "Skills",
		link: "#skills",
	},
	{
		title: "Projects",
		link: "#projects",
	},
	{
		title: "Contact",
		link: "#contact",
	},
];

function NavbarMenu() {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<IconButton
				id="navbar-button"
				aria-controls={open ? "navbar-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
			>
				<MenuIcon color="#9675a5" />
			</IconButton>
			<Menu
				id="navbar-menu"
				aria-labelledby="navbar-button"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				sx={{
					borderRadius: "12px",
				}}
				MenuListProps={{
					sx: {
						backgroundColor: "#161218",
						color: "#beb4c7",
					},
				}}
				anchorOrigin={{
					vertical: "top",
					horizontal: "left",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "left",
				}}
			>
				{menuData.map((data) => (
					<MenuItem LinkComponent={"a"} href={data.link}>
						{data.title}
					</MenuItem>
				))}
			</Menu>
		</div>
	);
}

export default NavbarMenu;
