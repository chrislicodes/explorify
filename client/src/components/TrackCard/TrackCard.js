import React from "react";
import { Link } from "react-router-dom";
import Icon from "../Icons/Icon/Icon";
import PlaceholderImage from "../PlaceholderImage/PlaceholderImage";
import styled from "styled-components/macro";

// ---------------------------------------
// -------------  STYLING
// ---------------------------------------

const StyledIcon = styled(Icon)``;
const StyledLink = styled(Link)``;

const ArtistWrapper = styled.div`
  & ${StyledLink} {
    height: 25rem;
    width: 20rem;
    max-width: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--color-grey-1-50);
    border-radius: 0.5rem;
    padding: 1.5rem;
  }

  &:hover ${StyledIcon} {
    opacity: 0.8;
  }
`;

const ImageWrapper = styled.div`
  width: 16rem;
  height: 16rem;
  overflow: hidden;
  margin-bottom: var(--spacing-size-sm-1);
  position: relative;
  box-shadow: 0 8px 24px rgb(0 0 0 / 50%);
  & img {
    height: 100%;
    width: 100%;
  }

  & ${StyledIcon} {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    opacity: 0;
    background: var(--color-grey-2);
    transition: all 0.3s;

    z-index: 20;

    & svg {
      fill: var(--color-white);
      width: 3rem;
      height: 3rem;
    }
  }
`;

const TrackName = styled.p`
  font-weight: bold;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`;

const ArtistName = styled.p`
  color: var(--color-grey-4);
  font-size: var(--font-size-sm);
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`;

// ---------------------------------------
// -------------  LOGIC
// ---------------------------------------

const TrackCard = ({ track }) => {
  const imageURL = track.album.images.length > 0 && track.album.images[1].url;

  return (
    <ArtistWrapper>
      <StyledLink to={`/explore/tracks/${track.id}`}>
        <ImageWrapper>
          {imageURL ? (
            <img src={imageURL} alt={`${track.name}`} />
          ) : (
            <PlaceholderImage />
          )}
          <StyledIcon type="icon-notification" />
        </ImageWrapper>
        <TrackName>{track.name}</TrackName>
        <ArtistName>{track.artists[0].name}</ArtistName>
      </StyledLink>
    </ArtistWrapper>
  );
};

export default TrackCard;
