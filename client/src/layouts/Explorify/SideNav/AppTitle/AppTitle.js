import React from "react";
import SpotifyIcon from "../../../../components/Icons/SpotifyIcon";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import theme from "../../../../styles/theme";

const TitleWrapper = styled.div`
  & a {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 2.5rem;
    margin-bottom: 10rem;
  }

  & h1 {
    text-transform: uppercase;
    color: var(--color-white);
    font-weight: bold;
    font-size: 2.9rem;
    margin-left: 1.75rem;
  }

  @media ${theme.bp.desktopXS} {
    display: none;
  }
`;

const AppTitle = () => {
  return (
    <TitleWrapper>
      <Link to="/">
        <SpotifyIcon />
        <h1>Explorify</h1>
      </Link>
    </TitleWrapper>
  );
};

export default AppTitle;
