import React from "react";
import SpotifyIcon from "./SpotifyIcon/SpotifyIcon";
import classes from "./AppTitle.module.css";
import { Link } from "react-router-dom";

const AppTitle = () => {
  return (
    <Link to="/">
      <div className={classes.AppTitle}>
        <SpotifyIcon />
        <h1>Explorify</h1>
      </div>
    </Link>
  );
};

export default AppTitle;
