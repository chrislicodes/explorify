import React from "react";
import classes from "./Header.module.css";
import { logout } from "../../../auth/auth";
import SearchIcon from "./components/SearchIcon/SearchIcon";

const Header = () => {
  return (
    <header className={classes.Header}>
      <SearchIcon />
      <button className={classes.LogoutBtn} onClick={logout}>
        LOGOUT
      </button>
    </header>
  );
};

export default Header;
