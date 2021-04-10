import React from "react";
import SongItem from "../SongItem";

import styled from "styled-components/macro";

const StyledSongContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const SongList = styled.ul`
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

const SongContainer = ({ tracks, className, displayImage }) => {
  const trackArr = tracks.map((item, index) => (
    <li key={item.id + index}>
      <SongItem trackData={item} pos={index} displayImage={displayImage} />
    </li>
  ));

  return (
    <StyledSongContainer className={className}>
      <SongList>{trackArr}</SongList>
    </StyledSongContainer>
  );
};

export default SongContainer;
