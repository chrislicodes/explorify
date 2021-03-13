import React from "react";
import classes from "./SideNav.module.css";
import NavItem from "./NavItem";
import AppTitle from "./AppTitle";

const navItems = [
  { target: "/", icon: "icon-home" },
  { target: "/analyze", icon: "icon-stats-bars" },
  { target: "/explore", icon: "icon-compass" },
  { target: "/about", icon: "icon-notification" },
];

const SideNav = ({ className, titleClass }) => {
  return (
    <nav className={`${classes.sideNav} ${className}`}>
      <AppTitle className={titleClass} />
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
