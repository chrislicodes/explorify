import React from "react";
import SongItem from "../SongItem/SongItem";

import classes from "./SongContainer.module.css";

const SongContainer = ({ tracks, title }) => {
  const trackArr = tracks.map((item) => (
    <li key={item.track.id + item.played_at}>
      <SongItem trackData={item.track} />
    </li>
  ));

  return (
    <div className={classes.SongContainer}>
      <p className={classes.containerTitle}>{title}</p>
      <ul className={classes.SongList}>{trackArr}</ul>
    </div>
  );
};

export default SongContainer;
