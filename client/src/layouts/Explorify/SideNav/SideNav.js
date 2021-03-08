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

const SideNav = ({ className }) => {
  return (
    <nav className={`${classes.sideNav} ${className}`}>
      <AppTitle />
      <ul className={classes.navLinks}>
        {navItems.map((navItem) => (
          <NavItem
            key={navItem.target}
            target={navItem.target}
            icon={navItem.icon}
          />
        ))}
      </ul>
    </nav>
  );
};

export default SideNav;
