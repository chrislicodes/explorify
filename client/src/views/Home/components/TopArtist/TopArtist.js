import React from "react";
import classes from "./TopArtist.module.css";
import TitleWrapper from "../../../../components/TitleWrapper/TitleWrapper";
import SongContainer from "../../../../components/SongContainer/SongContainer";
import Icon from "../../../../components/Icons/Icon/Icon";
import { Link } from "react-router-dom";

const TopArtist = ({ artist, tracks }) => {
  return (
    <TitleWrapper
      headline={`TOP ARTIST - ${artist.name}`}
      link={`/analyze/artists/top`}
    >
      <div className={classes.content}>
        <Link to={`/analyze/artist/${artist.id}`}>
          <div className={classes.imageContainer}>
            <img
              src={artist.images[1].url}
              alt={`${artist.name}`}
              className={classes.artistImage}
            />
            <Icon type="icon-notification" className={classes.imageIcon} />
          </div>
        </Link>
        <SongContainer
          tracks={tracks.tracks}
          className={classes.songContainer}
        />
      </div>
    </TitleWrapper>
  );
};

export default TopArtist;
