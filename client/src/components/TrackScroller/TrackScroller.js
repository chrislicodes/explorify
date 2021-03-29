import React from "react";
import HorizontalCardContainer from "../HorizontalCardContainer/HorizontalCardContainer";
import TitleWrapper from "../TitleWrapper/TitleWrapper";
import TrackCard from "../TrackCard/TrackCard";
import styled from "styled-components/macro";
import Loader from "../../components/Loader";

const StyledCardContainer = styled(HorizontalCardContainer)`
  height: 27.5rem;
`;

const TrackScroller = ({ tracks, title }) => {
  let content = undefined;

  content = tracks.map((track) => (
    <li key={track.id}>
      <TrackCard track={track} />
    </li>
  ));

  return (
    <>
      <TitleWrapper headline={title || "Tracks"} link={`/explore/artists/top`}>
        <StyledCardContainer>{content || <Loader />}</StyledCardContainer>
      </TitleWrapper>
    </>
  );
};

export default TrackScroller;
