import React from "react";
import SpotifyIcon from "components/shared/Icon/SpotifyIcon";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";
import theme from "styles/theme";
import mixins from "styles/mixins";

const TitleWrapper = styled.div`
  ${mixins.flexCenter}

  gap: var(--spacing-size-sm-2);

  margin-top: var(--spacing-size-md-1);
  margin-bottom: var(--spacing-size-xxxl);

  cursor: pointer;

  @media ${theme.bp.desktopXS} {
    display: none;
  }
`;

const Title = styled.h1`
  text-transform: uppercase;
  color: var(--color-white);
  font-weight: bold;
  font-size: var(--font-size-6);
  padding-left: var(--spacing-size-sm-2);

  border-left: 2px solid var(--color-white);
`;
const AppTitle = () => {
  let history = useHistory();

  function handleClick() {
    history.push("/home");
  }
  return (
    <TitleWrapper onClick={handleClick}>
      <SpotifyIcon />
      <Title>Explorify</Title>
    </TitleWrapper>
  );
};

export default AppTitle;
