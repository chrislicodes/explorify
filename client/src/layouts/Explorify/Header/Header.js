import React, { useContext } from "react";
import classes from "./Header.module.css";
import { logout } from "../../../auth/auth";
import { AuthContext } from "../../../context/AuthContext";

const Header = () => {
  let { display_name: username, images: userimage } = useContext(AuthContext);

  return (
    <header className={classes.Header}>
      <img src={userimage[0].url} className={classes.Userimage} alt="user" />
      <p className={classes.Username}>{username}</p>
      <button className={classes.LogoutBtn} onClick={logout}>
        LOGOUT
      </button>
    </header>
  );
};

export default Header;
