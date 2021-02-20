import React from "react";
import classes from "./SongItem.module.css";

import { transformDuration } from "../../utils/utils";

const SongItem = (props) => {
  const data = props.trackData;
  const album = data.album;
  const artist = data.artists[0];
  const image = album.images[2].url;
  const duration = transformDuration(data.duration_ms);

  return (
    <article className={classes.SongItem}>
      <img
        className={classes.albumCover}
        src={image}
        alt={album.name + " Album Cover"}
      />
      <div>
        <p>{data.name}</p>
        <p>
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
