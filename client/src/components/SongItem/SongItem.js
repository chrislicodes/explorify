import React from "react";
import classes from "./SongItem.module.css";

import { transformDuration } from "../../utils/utils";

const SongItem = ({ trackData }) => {
  const album = trackData.album;
  const image = album.images[2].url;

  const songTitle = trackData.name;

  const artist = trackData.artists[0];
  const duration = transformDuration(trackData.duration_ms);

  return (
    <article className={classes.SongItem}>
      <img
        className={classes.albumCover}
        src={image}
        alt={album.name + " Album Cover"}
      />
      <div className={classes.metaInfo}>
        <p className={classes.songTitle}>{songTitle}</p>
        <p className={classes.additionalInfo}>
          {artist.name} | {album.name}
        </p>
      </div>
      <p className={classes.duration}>
        <time>{duration}</time>
      </p>
    </article>
  );
};

export default SongItem;
