import React, { useContext } from "react";
import classes from "./Header.module.css";
import { logout } from "../../../auth/auth";

import SearchIcon from "./components/SearchIcon/SearchIcon";
import { AuthContext } from "../../../context/AuthContext";


const Header = () => {
  let { display_name: username, images: userimage } = useContext(AuthContext);

  return (
    <header className={classes.Header}>

      <div className={classes.contentWrapper}>
        <SearchIcon />
        <button className={classes.LogoutBtn} onClick={logout}>
          LOGOUT
        </button>
      
        <img src={userimage[0].url} className={classes.Userimage} alt="user" />
        <p className={classes.Username}>{username}</p>
        <button className={classes.LogoutBtn} onClick={logout}>
          LOGOUT
        </button>
      </div>
    </header>
  );
};

export default Header;
