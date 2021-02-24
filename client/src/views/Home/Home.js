import React, { useState, useEffect } from "react";
import classes from "./Home.module.css";
import WelcomeUser from "./components/WelcomeUser/WelcomeUser";
import SongContainer from "../../components/SongContainer/SongContainer";
import { getRecentlyPlayed } from "../../api/api";
import Loader from "../../components/Loader/Loader";

const Home = () => {
  const [recentlyPlayedSongs, setRecentlyPlayedSongs] = useState(null);

  useEffect(() => {
    getRecentlyPlayed().then((res) => setRecentlyPlayedSongs(res.data));
  }, []);

  return (
    <div className={classes.gridParent}>
      <div className={classes.gridHeader}>
        <WelcomeUser />
      </div>
      <div className={classes.topLeft}></div>
      <div className={classes.topRight}></div>
      <div className={classes.middleLeft}></div>
      <div className={classes.middleRight}></div>
      <div className={classes.bottomLeft}></div>
      <div className={classes.bottomRight}>
        {recentlyPlayedSongs ? (
          <SongContainer tracks={recentlyPlayedSongs.items} />
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Home;
