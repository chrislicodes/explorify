import React from "react";

import SideNav from "./SideNav";
import HeaderComponents from "./Header/HeaderComponents";

import styled from "styled-components/macro";
import theme from "../styles/theme";

import ROUTES, { RenderRoutes } from "../routes/Routes";
import useSWR from "swr";
import Loader from "../components/Loader";

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

const Page = styled.main`
  height: 100%;
  z-index: 2;

  overflow: scroll;
  overflow-x: hidden;
  overflow-y: auto;

  @media ${theme.bp.desktopXS} {
    margin-bottom: 7rem;
  }

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
  const { data: user } = useSWR("/me");

  return (
    <AppContainer>
      <NavLayout>
        <SideNav />
      </NavLayout>
      <ContentLayout>
        {user ? (
          <>
            <Header>
              <HeaderComponents />
            </Header>
            <Page>
              <RenderRoutes routes={ROUTES} />
            </Page>
          </>
        ) : (
          <Loader />
        )}
      </ContentLayout>
    </AppContainer>
  );
};

export default Explorify;
