import React from "react";
import Icon from "components/shared/Icon";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import SongPreview from "../../shared/SongPreview";

const TrackMetaInfo = styled.div`
  min-width: 0;
  margin-left: var(--spacing-size-sm-4);

  & > * {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

const TrackTitle = styled.h1`
  font-size: var(--font-size-3);
  font-weight: 500;
  color: var(--color-white);

  & span {
    position: relative;

    &::before {
      position: absolute;
      content: "";
      top: 2.1rem;
      height: 0.22rem;
      width: 0;
      background-color: var(--color-spotify-green);
      transition: all 0.3s ease-in-out;
    }
  }
`;

const TrackDisplayOverlay = styled(Icon)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0;
  background: ${(props) =>
    props.displayImage ? "var(--color-grey-1-70)" : "var(--color-grey-2)"};
  transition: all 0.3s;

  & svg {
    fill: ${(props) =>
      props.displayImage ? "var(--color-white)" : "var(--color-spotify-green)"};
    width: 3rem;
    height: 3rem;
  }
`;

const TrackItemWrapper = styled.article`
  display: flex;

  & > * {
    min-width: 0;
  }

  &:hover ${TrackDisplayOverlay} {
    opacity: 1;
  }
`;

const StyledLink = styled(Link)`
  flex: 1;
  display: flex;
  align-items: center;

  color: var(--color-grey-4);
  text-transform: uppercase;
  letter-spacing: 0.15rem;

  &:hover ${TrackTitle} span::before {
    width: 100%;
  }
`;

const TrackDisplay = styled.div`
  position: relative;
`;

const TrackIndex = styled.p`
  font-size: var(--font-size-4);
`;

const AlbumCover = styled.img`
  height: 6.4rem;
  width: 6.4rem;
  box-shadow: 0 3px 10px rgb(0 0 0 / 50%);
`;

const Duration = styled.time`
  margin-left: var(--spacing-size-sm-1);
`;

const AdditionalInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TrackItem = ({
  albumName,
  imageURL,
  trackTitle,
  artistName,
  trackDuration,
  id,
  displayImage,
  pos,
  previewURL,
}) => {
  return (
    <TrackItemWrapper>
      <StyledLink to={`/explore/track/${id}`}>
        <TrackDisplay>
          {displayImage ? (
            <AlbumCover src={imageURL} alt={albumName + " Album Cover"} />
          ) : (
            <TrackIndex>{String(pos + 1).padStart(2, "0")}</TrackIndex>
          )}
          <TrackDisplayOverlay
            type="icon-notification"
            displayImage={displayImage}
          />
        </TrackDisplay>
        <TrackMetaInfo>
          <TrackTitle>
            <span>{trackTitle}</span>
          </TrackTitle>
          <p>
            {artistName} | {albumName}
          </p>
        </TrackMetaInfo>
      </StyledLink>
      <AdditionalInfo>
        {previewURL && <SongPreview previewURL={previewURL} />}
        <Duration>{trackDuration}</Duration>
      </AdditionalInfo>
    </TrackItemWrapper>
  );
};

export default TrackItem;
