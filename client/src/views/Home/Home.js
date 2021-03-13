import React, { useState, useEffect, useContext } from "react";
import classes from "./Home.module.css";
import WelcomeUser from "./components/WelcomeUser/WelcomeUser";
import SongContainer from "../../components/SongContainer/SongContainer";
import TopArtist from "./components/TopArtist/TopArtist";
import ArtistScroller from "./components/ArtistScroller/ArtistScroller";
import TitleWrapper from "../../components/TitleWrapper/TitleWrapper";

import { AuthContext } from "../../context/AuthContext";

import {
  getRecentlyPlayed,
  getUsersTopArtistsShort,
  getUsersTopTracksShort,
  getArtistsTopTracks,
} from "../../api/api";

import Loader from "../../components/Loader/Loader";

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
    <div className={classes.gridParent}>
      <WelcomeUser />
      {usersTopArtistTopTracks ? (
        <TopArtist
          artist={usersTopArtists[0]}
          tracks={usersTopArtistTopTracks}
        />
      ) : (
        <Loader className={classes.Loader} />
      )}
      {usersTopArtists ? (
        <ArtistScroller artists={usersTopArtists.slice(1)} />
      ) : (
        <Loader className={classes.Loader} />
      )}
      <div className={classes.songOverview}>
        {usersTopTracks ? (
          <TitleWrapper
            headline={"Your top tracks"}
            className={classes.topTracks}
            link={"/analyze/top-tracks"}
          >
            <SongContainer tracks={usersTopTracks.slice(0, 10)} image={true} />
          </TitleWrapper>
        ) : (
          <Loader className={classes.Loader} />
        )}
        {recentlyPlayedSongs ? (
          <TitleWrapper
            headline={"Recently played songs"}
            className={classes.recentlyPlayed}
            link={"/analyze/recently-played"}
          >
            <SongContainer
              tracks={recentlyPlayedSongs.slice(0, 10)}
              image={true}
            />
          </TitleWrapper>
        ) : (
          <Loader className={classes.Loader} />
        )}
      </div>
    </div>
  );
};

export default Home;
