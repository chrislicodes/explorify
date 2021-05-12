import React from "react";
import SpotifyIcon from "components/shared/Icon/SpotifyIcon";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";
import theme from "styles/theme";
import mixins from "styles/mixins";

const TitleWrapper = styled.div`
  ${mixins.flexCenter}

  gap: 10px;

  margin-top: var(--spacing-size-md);
  margin-bottom: var(--spacing-size-xxl);

  cursor: pointer;

  @media ${theme.bp.desktopXS} {
    display: none;
  }
`;

const Title = styled.h1`
  text-transform: uppercase;
  color: var(--color-white);
  font-weight: bold;
  font-size: var(--font-size-xxxl);
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
