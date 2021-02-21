import React from "react";
import classes from "./SideNav.module.css";
import NavItem from "./NavItem/NavItem";

const Header = () => {
  return (
    <nav className={classes.SideNav}>
      <ul>
        <NavItem target="Analyze" />
      </ul>
    </nav>
  );
};

export default Header;
