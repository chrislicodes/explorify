import React, { useState, useEffect, useContext } from "react";
import classes from "./Home.module.css";
import WelcomeUser from "./components/WelcomeUser/WelcomeUser";
import SongContainer from "../../components/SongContainer/SongContainer";

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
  const [usersTopArtist, setUsersTopArtist] = useState(null);
  const [usersTopArtistTopTracks, setUsersTopArtistTopTracks] = useState(null);
  const { country } = useContext(AuthContext);

  useEffect(() => {
    getRecentlyPlayed().then((res) => setRecentlyPlayedSongs(res.data));

    getUsersTopArtistsShort(1)
      .then((res) => {
        setUsersTopArtist(res.data.items[0]);
        return getArtistsTopTracks(res.data.items[0].id, country);
      })
      .then((res) => setUsersTopArtistTopTracks(res.data));

    getUsersTopTracksShort(1).then((res) =>
      setUsersTopTrack(res.data.items[0])
    );
  }, [country]);

  return (
    <div className={classes.gridParent}>
      <WelcomeUser />
      <Loader className={classes.loader} />
    </div>
  );
};

export default Home;
