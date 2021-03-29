import React from "react";
import HorizontalCardContainer from "../HorizontalCardContainer/HorizontalCardContainer";
import TitleWrapper from "../TitleWrapper/TitleWrapper";
import AlbumCard from "../AlbumCard/AlbumCard";
import styled from "styled-components/macro";
import Loader from "../Loader/Loader";

const StyledCardContainer = styled(HorizontalCardContainer)`
  height: 27.5rem;
`;

const AlbumScroller = ({ albums, title }) => {
  let content = undefined;

  content = albums.map((album) => (
    <li key={album.id}>
      <AlbumCard album={album} />
    </li>
  ));

  return (
    <>
      <TitleWrapper headline={title || "Albums"} link={`/explore/artists/top`}>
        <StyledCardContainer>{content || <Loader />}</StyledCardContainer>
      </TitleWrapper>
    </>
  );
};

export default AlbumScroller;
