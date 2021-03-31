import React from "react";
import SpotifyIcon from "../../components/Icons/SpotifyIcon/SpotifyIcon";
import styled from "styled-components/macro";
import Particles from "react-tsparticles";
import options from "./particleOptions";
import theme from "../../styles/theme";

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
  font-size: var(--font-size-xs);
  padding: 3rem;
`;

const ContentContainer = styled.main`
  padding: 3rem;
  margin-bottom: 7rem;
  margin-right: 10rem;

  @media ${theme.bp.desktopXS} {
    margin: 0;
  }
`;

const Headline = styled.h1`
  font-weight: lighter;
  font-size: 5rem;
`;

const Subheader = styled.h2`
  font-size: 3rem;
  font-weight: 300;
  margin-bottom: 3rem;

  & span {
    color: var(--color-spotify-green);
    text-transform: uppercase;
    font-weight: bold;
  }

  @media ${theme.bp.desktopXS} {
    margin-bottom: 5rem;
  }
`;

const LoginButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5.5rem;
  width: 25rem;
  background-color: var(--color-spotify-green);
  color: var(--color-white);
  font-size: var(--font-size-md-2);
  font-weight: bold;
  letter-spacing: 0.3rem;

  border-radius: 10rem;
  outline: none;
  transition: all 0.3s ease-in-out;
`;

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
          Explore your favorite songs and artists on <span>Spotify</span>
        </Subheader>
        <LoginButton href={`${process.env.REACT_APP_BACKEND_URI}login`}>
          LOGIN TO SPOTIFY
        </LoginButton>
      </ContentContainer>
      <Disclaimer>
        We are not storing any data and all data displayed belongs to Spotify. ♥
      </Disclaimer>
    </FlexContainer>
  );
};

export default Login;
