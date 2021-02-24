import React from "react";

import classes from "./Login.module.css";
import SpotifyIcon from "../../layouts/Explorify/SideNav/AppTitle/SpotifyIcon/SpotifyIcon";

const Login = () => {
  return (
    <div className={classes.LoginContainer}>
      <div className={classes.LoginBackdrop}></div>
      <div className={classes.LoginLogo}>
        <SpotifyIcon />
      </div>
      <main className={classes.LoginContent}>
        <div className={classes.LoginWrapper}>
          <div className={classes.LoginHeadline}>
            <h1>
              Welcome to
              <span>
                <strong> EXPLORIFY</strong>.
              </span>
            </h1>
          </div>
          <div className={classes.LoginSubheadline}>
            <h2>Explore your favorite songs and artists on Spotify</h2>
          </div>
          <div className={classes.LoginBtnContainer}>
            <a className={classes.LoginBtn} href={`${process.env.REACT_APP_BACKEND_URI}login`}>
              LOGIN TO SPOTIFY
            </a>
            <a className={classes.LoginLearnMoreBtn} href="/">
              LEARN MORE
            </a>
          </div>
        </div>
      </main>
      <div className={classes.AppVersion}>v.{process.env.REACT_APP_VERSION}</div>
      <div className={classes.AppNote}>
        This application is not an official product of Spotify, but uses Spotify's API.
      </div>
    </div>
  );
};

export default Login;
