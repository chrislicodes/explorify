import React from "react";
import TrackItem from "components/items/TrackItem";
import styled from "styled-components/macro";
import { transformDuration } from "utils";

const StyledTrackWrapperTemplate = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  min-width: 0;
`;

const TrackList = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-size-sm-3);

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

const TrackWrapperTemplate = ({ tracks, className, displayImage }) => {
  const trackArr = tracks.map((track, index) => {
    const albumName = track.album?.name;
    const imageURL = displayImage && track.album.images[2].url;
    const trackTitle = track.name;
    const artistName = track.artists[0].name;
    const trackDuration = transformDuration(track.duration_ms);
    const trackID = track.id;
    const previewURL = track.preview_url;

    return (
      <li key={trackID + index}>
        <TrackItem
          albumName={albumName}
          imageURL={imageURL}
          trackTitle={trackTitle}
          artistName={artistName}
          trackDuration={trackDuration}
          id={trackID}
          pos={index}
          displayImage={displayImage}
          previewURL={previewURL}
        />
      </li>
    );
  });

  return (
    <StyledTrackWrapperTemplate className={className}>
      <TrackList>{trackArr}</TrackList>
    </StyledTrackWrapperTemplate>
  );
};

export default TrackWrapperTemplate;
