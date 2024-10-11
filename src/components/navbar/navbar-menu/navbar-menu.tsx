import * as React from "react";
import { MenuButton, Menu, Dropdown, MenuItem } from "@mui/joy";
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
  return (
    <Dropdown>
      <MenuButton
        sx={{
          border: "none",
          ":hover": {backgroundColor: "#242027"}
        }}
      >
        <MenuIcon color="#9675a5" />
      </MenuButton>
      <Menu sx={{ backgroundColor: "#161218", borderColor: "#9675a5" }}>
        {menuData.map((menuItem) => (
          <MenuItem
            sx={{
              fontFamily: "Dosis",
			        fontWeight: 600,
              color: "#f1eff3",
              ":hover": { backgroundColor: "#161218" },
            }}
            component={"a"}
            key={menuItem.title}
            href={menuItem.link}
          >
            {menuItem.title}
          </MenuItem>
        ))}
      </Menu>
    </Dropdown>
  );
}

export default NavbarMenu;
