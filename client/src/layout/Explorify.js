import React from "react";

import SideNav from "./SideNav";
import HeaderComponents from "./Header/HeaderComponents";

import styled from "styled-components/macro";
import theme from "../styles/theme";

import ROUTES, { RenderRoutes } from "../routes/Routes";

// ---------------------------------------
// -------------  STYLING
// ---------------------------------------
const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;

  --desktop-nav-size: 27rem;

  font-size: var(--font-size-md);

  @media ${theme.bp.desktopXS} {
    height: 100%;
    width: 100%;
    flex-direction: column;
  }
`;

const ContentLayout = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  max-width: calc(100% - var(--desktop-nav-size));
  background-color: var(--color-grey-2);

  @media ${theme.bp.desktopXS} {
    max-width: 100%;
  }
`;

const View = styled.main`
  height: 100%;
  z-index: 2;

  overflow: scroll;
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 0.6rem rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: var(--color-grey-3);
  }

  &::-webkit-scrollbar {
    width: 1rem;
    border-radius: 1rem;
    background-color: var(--color-grey-6);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    box-shadow: inset 0 0 0.6rem rgba(0, 0, 0, 0.3);
    background-color: var(--color-grey-6);
  }
`;

const NavLayout = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 0 0 var(--desktop-nav-size);
  background-color: var(--color-grey-1);

  z-index: 99;

  @media ${theme.bp.desktopXS} {
    flex: 0;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    & ul {
      flex-direction: row;
      justify-content: space-between;
      gap: 0;
    }
  }
`;

const Header = styled.header`
  flex-basis: 8rem;
  display: flex;
  align-items: center;
`;

// ---------------------------------------
// -------------  LOGIC
// ---------------------------------------

const Explorify = () => {
  return (
    <AppContainer>
      <NavLayout>
        <SideNav />
      </NavLayout>
      <ContentLayout>
        <Header>
          <HeaderComponents />
        </Header>
        <View>
          <RenderRoutes routes={ROUTES} />
        </View>
      </ContentLayout>
    </AppContainer>
  );
};

export default Explorify;
