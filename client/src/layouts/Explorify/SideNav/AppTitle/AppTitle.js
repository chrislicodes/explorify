import React from "react";
import SpotifyIcon from "../../../../components/Icons/SpotifyIcon";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import theme from "../../../../styles/theme";
import mixins from "../../../../styles/mixins";

const TitleWrapper = styled.div`
  & a {
    ${mixins.flexCenter}

    margin-top: var(--spacing-size-md);
    margin-bottom: var(--spacing-size-xxl);
  }

  & h1 {
    text-transform: uppercase;
    color: var(--color-white);
    font-weight: bold;
    font-size: var(--font-size-xxxl);
    margin-left: var(--spacing-size-sm-4);
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
