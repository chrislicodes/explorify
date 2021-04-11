import React from "react";
import WelcomeUser from "./components/WelcomeUser";
import TopArtist from "container/ArtistAndTracks/TopArtist";
import TopArtistScroller from "container/TopArtistScroller";
import RecentlyPlayedTracks from "container/RecentlyPlayedTracks";
import TopTracks from "container/TopTracks";

import theme from "styles/theme";
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

const TrackOverview = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: space-between;
  overflow: hidden;

  & > * {
    min-width: 0;
    flex: 1;
  }

  @media ${theme.bp.desktopM} {
    flex-direction: column;
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
      <TrackOverview>
        <TopTracks />
        <RecentlyPlayedTracks />
      </TrackOverview>
    </FlexContainer>
  );
};

export default Home;
