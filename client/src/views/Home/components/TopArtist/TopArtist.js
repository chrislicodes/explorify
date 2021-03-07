import React from "react";
import classes from "./TopArtist.module.css";
import TileComponent from "../../../../components/TileComponent/TileComponent";
import SongContainer from "../../../../components/SongContainer/SongContainer";

const TopArtist = ({ artist, tracks }) => {
  return (
    <TileComponent
      headline={`TOP ARTIST ${artist.name}`}
      link={`/explore/artists/${artist.id}`}
    >
      <div className={classes.content}>
        <img
          src={artist.images[1].url}
          alt={`${artist.name}`}
          className={classes.artistImage}
        />
        <SongContainer
          tracks={tracks.tracks}
          className={classes.songContainer}
        />
      </div>
    </TileComponent>
  );
};

export default TopArtist;
