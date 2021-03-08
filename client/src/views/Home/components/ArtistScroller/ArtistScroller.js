import React from "react";
import classes from "./ArtistScroller.module.css";
import HorizontalCardContainer from "../../../../components/HorizontalCardContainer/HorizontalCardContainer";
import TileComponent from "../../../../components/TileComponent/TileComponent";
import ArtistCard from "../../../../components/ArtistCard/ArtistCard";

const ArtistScroller = ({ artists }) => {
  const cardItems = artists.map((artist) => (
    <li key={artist.id}>
      <ArtistCard artist={artist} />
    </li>
  ));

  return (
    <div className={classes.content}>
      <TileComponent
        headline={"Learn more about your favorite artists"}
        link={`/analyze/artists/top`}
      >
        <HorizontalCardContainer cardItems={cardItems} />
      </TileComponent>
    </div>
  );
};

export default ArtistScroller;
