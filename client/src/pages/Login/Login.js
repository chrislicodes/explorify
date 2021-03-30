import React from "react";
import classes from "./Login.module.css";
import SpotifyIcon from "../../components/Icons/SpotifyIcon/SpotifyIcon";
import styled from "styled-components/macro";
import Particles from "react-tsparticles";
import options from "./particleOptions";

const FlexContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const StyledParticles = styled(Particles)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--color-black);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.75;
  z-index: 0;
`;

const SpotifyLogo = styled(SpotifyIcon)`
  z-index: 3;
  position: absolute;
  top: 0;
  left: 0;
`;

const Login = () => {
  return (
    <FlexContainer>
      <StyledParticles id="tsparticles" options={options} />
      <Backdrop />
      <SpotifyLogo />

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
            <a
              className={classes.LoginBtn}
              href={`${process.env.REACT_APP_BACKEND_URI}login`}
            >
              LOGIN TO SPOTIFY
            </a>
          </div>
        </div>
      </main>
      <div className={classes.AppNote}>
        We are not storing any data and all data displayed belongs to Spotify. ♥
      </div>
    </FlexContainer>
  );
};

export default Login;
