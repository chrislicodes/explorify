import React from "react";
import SongItem from "../SongItem/SongItem";

import classes from "./SongContainer.module.css";

const SongContainer = ({ tracks, className }) => {
  const trackArr = tracks.map((item, index) => (
    <li key={item.id + index}>
      <SongItem trackData={item} pos={index} noImage={true} />
    </li>
  ));

  return (
    <div className={`${classes.SongContainer} ${className}`}>
      <ul className={classes.SongList}>{trackArr}</ul>
    </div>
  );
};

export default SongContainer;
 