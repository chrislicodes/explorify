import React from "react";
import Icon from "../../../components/Icons/Icon";
import styled from "styled-components/macro";
import theme from "../../../styles/theme";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50%;
  gap: 3rem;
`;

const SearchIcon = styled(Icon)`
  display: inline-block;
  height: 3rem;
  width: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    height: 3rem;
    width: 3rem;
    fill: var(--color-spotify-green);
  }
`;

const HeadphoneIcon = styled(Icon)`
  fill: var(--color-white);

  & svg {
    height: 12rem;
    width: 12rem;

    @media ${theme.bp.desktopXS} {
      height: 9rem;
      width: 9rem;
    }
  }
`;

const Headline = styled.h1`
  display: flex;
  align-items: center;
  color: var(--color-white);
  font-size: var(--font-size-xl);

  @media ${theme.bp.desktopXS} {
    font-size: var(--font-size-lg);
  }
`;

function WelcomeScreen() {
  return (
    <FlexContainer>
      <HeadphoneIcon type="icon-headphones" />
      <Headline>
        Start <SearchIcon type="icon-search" /> for your favorite artists,
        tracks or albums
      </Headline>
    </FlexContainer>
  );
}

export default WelcomeScreen;
