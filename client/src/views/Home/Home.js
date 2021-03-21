import React, { useContext } from "react";
import WelcomeUser from "./components/WelcomeUser/WelcomeUser";
import SongContainer from "../../components/SongContainer/SongContainer";
import TopArtist from "./components/TopArtist/TopArtist";
import ArtistScroller from "./components/ArtistScroller/ArtistScroller";
import TitleWrapper from "../../components/TitleWrapper/TitleWrapper";

import { AuthContext } from "../../context/AuthContext";

import theme from "../../styles/theme";
import styled from "styled-components/macro";

import {
  useRecentlyPlayedSongs,
  useUserTopArtistsShort,
  useUserTopTracksShort,
  useArtistsTopTrack,
} from "../../api";

import Loader from "../../components/Loader/Loader";

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
  const { country } = useContext(AuthContext);

  const { usersTopArtistsShort } = useUserTopArtistsShort();
  const { artistTopTracks } = useArtistsTopTrack(
    usersTopArtistsShort?.items[0].id,
    country
  );
  const { usersTopTracksShort } = useUserTopTracksShort();
  const { recentlyPlayedSongs } = useRecentlyPlayedSongs();

  return (
    <FlexContainer>
      <WelcomeUser />
      {artistTopTracks ? (
        <TopArtist
          artist={usersTopArtistsShort.items[0]}
          tracks={artistTopTracks}
        />
      ) : (
        <Loader />
      )}
      {usersTopArtistsShort ? (
        <ArtistScroller artists={usersTopArtistsShort.items.slice(1)} />
      ) : (
        <Loader />
      )}
      <SongOverview>
        {usersTopTracksShort ? (
          <TitleWrapper
            headline={"Your top tracks"}
            link={"/analyze/top-tracks"}
          >
            <SongContainer
              tracks={usersTopTracksShort.items.slice(0, 10)}
              displayImage={true}
            />
          </TitleWrapper>
        ) : (
          <Loader />
        )}
        {recentlyPlayedSongs ? (
          <TitleWrapper
            headline={"Recently played songs"}
            link={"/analyze/recently-played"}
          >
            <SongContainer
              tracks={recentlyPlayedSongs.items
                .map((item) => item.track)
                .slice(0, 10)}
              displayImage={true}
            />
          </TitleWrapper>
        ) : (
          <Loader />
        )}
      </SongOverview>
    </FlexContainer>
  );
};

export default Home;
