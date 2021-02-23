import React from "react";
import classes from "./SideNav.module.css";
import NavItem from "./NavItem/NavItem";
import AppTitle from "./AppTitle/AppTitle";

const links = [
  { target: "/", icon: "icon-home" },
  { target: "/analyze", icon: "icon-search" },
  { target: "/explore", icon: "icon-compass" },
  { target: "/about", icon: "icon-notification" },
];

const Header = () => {
  return (
    <nav className={classes.SideNav}>
      <AppTitle />
      <ul className={classes.NavLinks}>
        {links.map((link) => (
          <NavItem target={link.target} icon={link.icon} />
        ))}
      </ul>
    </nav>
  );
};

export default Header;
