import React from "react";
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
    <TitleWrapper
      headline={"Your favorite artists"}
      link={`/analyze/artists/top`}
    >
      <HorizontalCardContainer>{cardItems}</HorizontalCardContainer>
    </TitleWrapper>
  );
};

export default ArtistScroller;
