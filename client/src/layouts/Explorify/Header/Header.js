import React from "react";
import classes from "./Header.module.css";
import { logout } from "../../../auth/auth";
import SearchIcon from "./components/SearchIcon/SearchIcon";

const Header = () => {
  return (
    <header className={classes.Header}>
      <div className={classes.contentWrapper}>
        <SearchIcon />
        <button className={classes.LogoutBtn} onClick={logout}>
          LOGOUT
        </button>
      </div>
    </header>
  );
};

export default Header;
