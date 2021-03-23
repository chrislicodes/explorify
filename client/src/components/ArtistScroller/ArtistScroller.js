import React from "react";
import HorizontalCardContainer from "../HorizontalCardContainer/HorizontalCardContainer";
import TitleWrapper from "../TitleWrapper/TitleWrapper";
import ArtistCard from "../ArtistCard/ArtistCard";
import styled from "styled-components/macro";
import Loader from "../../components/Loader";

const StyledCardContainer = styled(HorizontalCardContainer)`
  height: 27.5rem;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;

  & p {
    margin-bottom: 2rem;
  }

  & img {
    border-radius: 2rem;
  }
`;

const ArtistScroller = ({ artists, title }) => {
  let cardItems =
    !artists || artists?.length === 0 ? (
      <FlexContainer>
        <p>Nothing found.. </p>
        <img
          src="https://i.pinimg.com/originals/a0/36/74/a03674ba07d318077a4604780d085dfe.jpg"
          alt="Nothing found"
        />
      </FlexContainer>
    ) : (
      <Loader />
    );

  if (Array.isArray(artists) && artists.length > 0) {
    cardItems = artists.map((artist) => (
      <li key={artist.id}>
        <ArtistCard artist={artist} />
      </li>
    ));
  }

  return (
    <>
      <TitleWrapper headline={title || "Artists"} link={`/explore/artists/top`}>
        <StyledCardContainer>{cardItems}</StyledCardContainer>
      </TitleWrapper>
    </>
  );
};

export default ArtistScroller;
