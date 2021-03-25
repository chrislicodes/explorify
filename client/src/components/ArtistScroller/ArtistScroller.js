import React from "react";
import HorizontalCardContainer from "../HorizontalCardContainer/HorizontalCardContainer";
import TitleWrapper from "../TitleWrapper/TitleWrapper";
import ArtistCard from "../ArtistCard/ArtistCard";
import styled from "styled-components/macro";
import Loader from "../../components/Loader";

const StyledCardContainer = styled(HorizontalCardContainer)`
  height: 27.5rem;
`;

const NothingFoundContainer = styled.div`
  display: flex;
  flex-direction: column;

  & p {
    margin-bottom: 2rem;
  }

  & img {
    border-radius: 2rem;
  }
`;

const NothingFound = () => {
  return (
    <NothingFoundContainer>
      <p>Nothing found.. </p>
      <img
        src="https://i.pinimg.com/originals/a0/36/74/a03674ba07d318077a4604780d085dfe.jpg"
        alt="Nothing found"
      />
    </NothingFoundContainer>
  );
};

const EmptyState = () => {
  return <p>Ready when you are .. </p>;
};

const ArtistScroller = ({ artists, title, showEmptyState }) => {
  let content = undefined;

  if (!showEmptyState && Array.isArray(artists)) {
    if (artists.length > 0) {
      content = artists.map((artist) => (
        <li key={artist.id}>
          <ArtistCard artist={artist} />
        </li>
      ));
    } else {
      content = <NothingFound />;
    }
  }

  if (showEmptyState) {
    content = <EmptyState />;
  }

  return (
    <>
      <TitleWrapper headline={title || "Artists"} link={`/explore/artists/top`}>
        <StyledCardContainer>{content || <Loader />}</StyledCardContainer>
      </TitleWrapper>
    </>
  );
};

export default ArtistScroller;
