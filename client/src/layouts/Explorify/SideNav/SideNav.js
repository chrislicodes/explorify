import React from "react";
import classes from "./SideNav.module.css";
import NavItem from "./NavItem/NavItem";
import AppTitle from "./AppTitle/AppTitle";

const navItems = [
  { target: "/", icon: "icon-home" },
  { target: "/analyze", icon: "icon-stats-bars" },
  { target: "/explore", icon: "icon-compass" },
  { target: "/about", icon: "icon-notification" },
];

const Header = () => {
  return (
    <nav className={classes.SideNav}>
      <AppTitle />
      <ul className={classes.NavLinks}>
        {navItems.map((navItem) => (
          <NavItem target={navItem.target} icon={navItem.icon} />
        ))}
      </ul>
    </nav>
  );
};

export default Header;
