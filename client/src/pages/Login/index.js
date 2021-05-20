import React from "react";
import SpotifyIcon from "components/shared/Icon/SpotifyIcon";
import styled from "styled-components/macro";
import Particles from "react-tsparticles";
import options from "./particleOptions";
import theme from "styles/theme";

const FlexContainer = styled.main`
  --absolute-distance: 2rem;

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
  z-index: -2;
`;

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--color-black);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.8;
  z-index: -1;
`;

const SpotifyLogo = styled(SpotifyIcon)`
  align-self: flex-start;
  position: absolute;
  top: var(--absolute-distance);
  left: var(--absolute-distance);
`;

const Disclaimer = styled.p`
  position: absolute;
  bottom: var(--absolute-distance);
  right: var(--absolute-distance);
  font-size: var(--font-size-1);
  padding: var(--spacing-size-lg-1);
`;

const ContentContainer = styled.main`
  padding: var(--spacing-size-lg-1);
  margin-bottom: var(--spacing-size-xxxl);
  margin-right: var(--spacing-size-xxl);

  @media ${theme.bp.desktopXS} {
    margin: 0;
  }
`;

const Headline = styled.h1`
  font-weight: lighter;
  font-size: var(--font-size-9);
`;

const Subheader = styled.h2`
  font-size: var(--font-size-6);
  font-weight: 300;
  margin-bottom: var(--spacing-size-lg-1);

  & span {
    color: var(--color-spotify-green);
    text-transform: uppercase;
    font-weight: bold;
  }

  @media ${theme.bp.desktopXS} {
    margin-bottom: var(--spacing-size-xl);
  }
`;

const LoginButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  width: 22rem;
  background-color: var(--color-spotify-green);
  color: var(--color-white);
  font-size: var(--font-size-2);
  font-weight: bold;
  letter-spacing: 0.3rem;

  border-radius: 10rem;
  outline: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: var(--color-spotify-logo-green);
  }
`;
const LOGIN_URI =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8000/login"
    : "https://app-explorify.herokuapp.com/login";

const Login = () => {
  return (
    <FlexContainer>
      <StyledParticles id="tsparticles" options={options} />
      <Backdrop />
      <SpotifyLogo />
      <ContentContainer>
        <Headline>
          Welcome to <strong>EXPLORIFY</strong>.
        </Headline>
        <Subheader>
          Explore your favorite tracks and artists on <span>Spotify</span>
        </Subheader>
        <LoginButton href={LOGIN_URI}>LOGIN TO SPOTIFY</LoginButton>
      </ContentContainer>
      <Disclaimer>
        We are not storing any data and all data is provided by Spotify via
        their Web API.
      </Disclaimer>
    </FlexContainer>
  );
};

export default Login;
