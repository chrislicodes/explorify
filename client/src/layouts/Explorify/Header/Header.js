import React from "react";
import classes from "./Header.module.css";
import { logout } from "../../../auth/auth";

const Header = () => {
  return (
    <header className={classes.Header}>
      Header
      <button className={classes.LogoutBtn} onClick={logout}>
        LOGOUT
      </button>
    </header>
  );
};

export default Header;
