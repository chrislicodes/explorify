import React from "react";

import classes from "./Login.module.css";
import SpotifyIcon from "../../layouts/Explorify/SideNav/AppTitle/SpotifyIcon/SpotifyIcon";

const Login = function () {
  return (
    <div className={classes.LoginContainer}>
      <div className={classes.LoginBackdrop}></div>
      <div className={classes.LoginLogo}>
        <SpotifyIcon />
      </div>
      <main className={classes.LoginContent}>
        <div className={classes.LoginWrapper}>
          <div className={classes.LoginHeadline}>
            <p>
              Welcome to
              <span>
                <b> EXPLORIFY</b>.
              </span>
            </p>
          </div>
          <div className={classes.LoginSubheadline}>
            <p>Explore your favorite songs and artists on Spotify</p>
          </div>
          <div className={classes.LoginBtnContainer}>
            <a className={classes.LoginBtn} href="http://localhost:8080/login">
              LOGIN TO SPOTIFY
            </a>
            <a className={classes.LoginLearnMoreBtn} href="/">
              LEARN MORE
            </a>
          </div>
        </div>
      </main>
      <div className={classes.AppVersion}>v.0.0.1</div>
      <div className={classes.AppNote}>
        This application is not an official product of Spotify, but uses Spotify's API.
      </div>
    </div>
  );
};

export default Login;
