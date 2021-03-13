import React from "react";
import SpotifyIcon from "../../../../components/Icons/SpotifyIcon";
import classes from "./AppTitle.module.css";
import { Link } from "react-router-dom";

const AppTitle = ({ className }) => {
  return (
    <div className={className}>
      <Link to="/" className={classes.AppTitle}>
        <SpotifyIcon />
        <h1>Explorify</h1>
      </Link>
    </div>
  );
};

export default AppTitle;
