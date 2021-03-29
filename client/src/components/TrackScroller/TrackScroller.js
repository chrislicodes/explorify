import React from "react";
import HorizontalCardContainer from "../HorizontalCardContainer/HorizontalCardContainer";
import TitleWrapper from "../TitleWrapper/TitleWrapper";
import TrackCard from "../TrackCard/TrackCard";
import Loader from "../../components/Loader";

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
        <HorizontalCardContainer>
          {content || <Loader />}
        </HorizontalCardContainer>
      </TitleWrapper>
    </>
  );
};

export default TrackScroller;
