import React from "react";
import classes from "./ArtistCard.module.css";
import { Link } from "react-router-dom";
import Icon from "../../components/Icons/Icon/Icon";

const ArtistCard = ({ artist }) => {
  return (
    <div className={classes.artistCard}>
      <Link to={`/analyze/artists/${artist.id}`}>
        <div className={classes.imageContainer}>
          <img src={artist.images[1].url} alt={`${artist.name}`} />
          <Icon type="icon-notification" className={classes.imageIcon} />
        </div>
        <p className={classes.artistName}>{artist.name}</p>
        <p className={classes.genre}>{artist.genres[0]}</p>
      </Link>
    </div>
  );
};

export default ArtistCard;
