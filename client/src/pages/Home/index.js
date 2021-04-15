import React from "react";
import WelcomeUser from "./components/WelcomeUser";
import PageTemplate from "components/templates/PageTemplate";
import TopArtist from "container/ArtistAndTracks/TopArtist";
import TopArtistScroller from "container/TopArtistCardSection";
import RecentlyPlayedTracks from "container/RecentlyPlayedTracks";
import TopTracks from "container/TopTracksSection";

import theme from "styles/theme";
import styled from "styled-components/macro";

// ---------------------------------------
// -------------  STYLING
// ---------------------------------------

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
    <PageTemplate>
      <WelcomeUser />
      <TopArtist />
      <TopArtistScroller offset={1} />
      <TrackOverview>
        <TopTracks />
        <RecentlyPlayedTracks />
      </TrackOverview>
    </PageTemplate>
  );
};

export default Home;
