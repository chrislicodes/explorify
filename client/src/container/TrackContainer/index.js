import React from "react";
import TrackItem from "components/TrackItem";

import styled from "styled-components/macro";

const StyledTrackContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const TrackList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-size-sm-2);

  overflow-x: hidden;
  overflow-y: auto;
  padding-right: var(--spacing-size-sm-2);

  & li {
    list-style: none;
    text-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 0.6rem rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: var(--color-grey-3);
  }

  &::-webkit-scrollbar {
    width: 0.7rem;
    border-radius: 1rem;
    background-color: var(--color-grey-6);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    box-shadow: inset 0 0 0.6rem rgba(0, 0, 0, 0.3);
    background-color: var(--color-grey-6);
  }
`;

const TrackContainer = ({ tracks, className, displayImage }) => {
  const trackArr = tracks.map((item, index) => (
    <li key={item.id + index}>
      <TrackItem trackData={item} pos={index} displayImage={displayImage} />
    </li>
  ));

  return (
    <StyledTrackContainer className={className}>
      <TrackList>{trackArr}</TrackList>
    </StyledTrackContainer>
  );
};

export default TrackContainer;
