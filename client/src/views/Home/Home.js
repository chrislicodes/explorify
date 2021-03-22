import React from "react";
import WelcomeUser from "./components/WelcomeUser/WelcomeUser";
import TopArtist from "../../container/TopArtist/TopArtist";
import TopArtistScroller from "../../container/TopArtistScroller/TopArtistScroller";
import RecentlyPlayedSongs from "../../container/RecentlyPlayedSongs/RecentlyPlayedSongs";
import TopTracks from "../../container/TopTracks/TopTracks";

import theme from "../../styles/theme";
import styled from "styled-components/macro";

// ---------------------------------------
// -------------  STYLING
// ---------------------------------------

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 0 3rem;
  padding-bottom: 3rem;
`;

const SongOverview = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: space-between;
  overflow: hidden;

  & > * {
    min-width: 0;
  }

  @media ${theme.bp.desktopM} {
    flex-direction: column;
  }

  @media ${theme.bp.desktopXS} {
    margin-bottom: var(--spacing-size-xl-2);
  }
`;

// ---------------------------------------
// -------------  LOGIC
// ---------------------------------------

const Home = () => {
  return (
    <FlexContainer>
      <WelcomeUser />
      <TopArtist />
      <TopArtistScroller offset={1} />
      <SongOverview>
        <TopTracks />
        <RecentlyPlayedSongs />
      </SongOverview>
    </FlexContainer>
  );
};

export default Home;
