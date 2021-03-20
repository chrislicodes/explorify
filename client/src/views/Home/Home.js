import React, { useState, useEffect, useContext } from "react";
import WelcomeUser from "./components/WelcomeUser/WelcomeUser";
import SongContainer from "../../components/SongContainer/SongContainer";
import TopArtist from "./components/TopArtist/TopArtist";
import ArtistScroller from "./components/ArtistScroller/ArtistScroller";
import TitleWrapper from "../../components/TitleWrapper/TitleWrapper";

import { AuthContext } from "../../context/AuthContext";

import theme from "../../styles/theme";
import styled from "styled-components/macro";

import {
  getRecentlyPlayed,
  getUsersTopArtistsShort,
  getUsersTopTracksShort,
  getArtistsTopTracks,
} from "../../api";

import Loader from "../../components/Loader/Loader";

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
    

  @media ${theme.bp.desktopXS} {
    margin-bottom: var(--spacing-size-xl-2);
  }
`;

const Home = () => {
  const [recentlyPlayedSongs, setRecentlyPlayedSongs] = useState(null);
  const [usersTopTracks, setUsersTopTracks] = useState(null);
  const [usersTopArtists, setUsersTopArtists] = useState(null);
  const [usersTopArtistTopTracks, setUsersTopArtistTopTracks] = useState(null);
  const { country } = useContext(AuthContext);

  useEffect(() => {
    getRecentlyPlayed().then(({ data }) => {
      const tracks = data.items.map((item) => item.track);
      setRecentlyPlayedSongs(tracks);
    });

    getUsersTopArtistsShort()
      .then(({ data }) => {
        setUsersTopArtists(data.items);
        return getArtistsTopTracks(data.items[0].id, country);
      })
      .then(({ data }) => setUsersTopArtistTopTracks(data));

    getUsersTopTracksShort().then(({ data }) => setUsersTopTracks(data.items));
  }, [country]);

  return (
    <FlexContainer>
      <WelcomeUser />
      {usersTopArtistTopTracks ? (
        <TopArtist
          artist={usersTopArtists[0]}
          tracks={usersTopArtistTopTracks}
        />
      ) : (
        <Loader />
      )}
      {usersTopArtists ? (
        <ArtistScroller artists={usersTopArtists.slice(1)} />
      ) : (
        <Loader />
      )}
      <SongOverview>
        {usersTopTracks ? (
          <TitleWrapper
            headline={"Your top tracks"}
            link={"/analyze/top-tracks"}
          >
            <SongContainer
              tracks={usersTopTracks.slice(0, 10)}
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
              tracks={recentlyPlayedSongs.slice(0, 10)}
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
