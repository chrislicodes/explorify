import React, { useState, useEffect, useContext } from "react";
import classes from "./Home.module.css";
import WelcomeUser from "./components/WelcomeUser/WelcomeUser";
import SongContainer from "../../components/SongContainer/SongContainer";
import TopArtist from "./components/TopArtist/TopArtist";
import ArtistScroller from "./components/ArtistScroller/ArtistScroller";

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
  const [usersTopTrack, setUsersTopTrack] = useState(null);
  const [usersTopArtists, setUsersTopArtists] = useState(null);
  const [usersTopArtistTopTracks, setUsersTopArtistTopTracks] = useState(null);
  const { country } = useContext(AuthContext);

  useEffect(() => {
    getRecentlyPlayed().then((res) => setRecentlyPlayedSongs(res.data));

    getUsersTopArtistsShort()
      .then(({ data }) => {
        setUsersTopArtists(data.items);
        return getArtistsTopTracks(data.items[0].id, country);
      })
      .then(({ data }) => setUsersTopArtistTopTracks(data));

    getUsersTopTracksShort().then(({ data }) => setUsersTopTrack(data.items));
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
    </div>
  );
};

export default Home;
