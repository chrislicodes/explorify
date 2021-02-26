import React from "react";
import SongItem from "../SongItem/SongItem";

import classes from "./SongContainer.module.css";

const SongContainer = ({ tracks }) => {
  const trackArr = tracks.map((item) => (
    <li key={item.track.id + item.played_at}>
      <SongItem trackData={item.track} />
    </li>
  ));

  return <ul className={classes.SongContainer}>{trackArr}</ul>;
};

export default SongContainer;
