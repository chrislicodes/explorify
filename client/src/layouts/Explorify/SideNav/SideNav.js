import React from "react";
import classes from "./SideNav.module.css";
import NavItem from "./NavItem/NavItem";
import AppTitle from "./AppTitle/AppTitle";

const Header = () => {
  return (
    <nav className={classes.SideNav}>
      <AppTitle />
      <ul>
        <NavItem target="Analyze" />
      </ul>
    </nav>
  );
};

export default Header;
