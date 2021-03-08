import React from "react";
import classes from "./ArtistScroller.module.css";
import HorizontalCardContainer from "../../../../components/HorizontalCardContainer/HorizontalCardContainer";
import TitleWrapper from "../../../../components/TitleWrapper/TitleWrapper";
import ArtistCard from "../../../../components/ArtistCard/ArtistCard";

const ArtistScroller = ({ artists }) => {
  const cardItems = artists.map((artist) => (
    <li key={artist.id}>
      <ArtistCard artist={artist} />
    </li>
  ));

  return (
    <div className={classes.content}>
      <TitleWrapper
        headline={"Learn more about your favorite artists"}
        link={`/analyze/artists/top`}
      >
        <HorizontalCardContainer>{cardItems}</HorizontalCardContainer>
      </TitleWrapper>
    </div>
  );
};

export default ArtistScroller;
