import React from "react";
import Icon from "../Icons/Icon";
import { Link } from "react-router-dom";
import { transformDuration } from "../../utils";
import styled from "styled-components/macro";

const SongMetaInfo = styled.div`
  flex: 1;
  margin-left: var(--spacing-size-sm-4);
  min-width: 0;

  & > p {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

const SongTitle = styled.p`
  font-size: var(--font-size-md-2);
  font-weight: 500;
  color: var(--color-white);

  margin-bottom: var(--spacing-size-xxs);

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

const SongDisplayOverlay = styled(Icon)`
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

const SongItemWrapper = styled.article`
  & a {
    display: flex;
    align-items: center;

    font-size: var(--font-size-sm);
    color: var(--color-grey-4);
    text-transform: uppercase;
    letter-spacing: 0.15rem;
  }

  &:hover ${SongDisplayOverlay} {
    opacity: 1;
  }

  &:hover ${SongTitle} span::before {
    width: 100%;
  }
`;

const SongDisplay = styled.div`
  position: relative;
`;

const SongIndex = styled.p`
  font-size: var(--font-size-lg);
`;

const AlbumCover = styled.img`
  min-height: 6.4rem;
  min-width: 6.4rem;
  box-shadow: 0 3px 10px rgb(0 0 0 / 50%);
`;

const Duration = styled.time`
  margin-left: 1rem;
`;

const SongItem = ({ trackData, displayImage, pos }) => {
  const album = trackData.album;
  const image = album.images[2].url;
  const songTitle = trackData.name;
  const artist = trackData.artists[0];
  const duration = transformDuration(trackData.duration_ms);
  const id = trackData.id;

  return (
    <SongItemWrapper>
      <Link to={`/explore/track/${id}`}>
        <SongDisplay>
          {displayImage ? (
            <AlbumCover src={image} alt={album.name + " Album Cover"} />
          ) : (
            <SongIndex>{String(pos + 1).padStart(2, "0")}</SongIndex>
          )}
          <SongDisplayOverlay
            type="icon-notification"
            displayImage={displayImage}
          />
        </SongDisplay>
        <SongMetaInfo>
          <SongTitle>
            <span>{songTitle}</span>
          </SongTitle>
          <p>
            <span>
              {artist.name} | {album.name}
            </span>
          </p>
        </SongMetaInfo>
        <div>
          <Duration>{duration}</Duration>
        </div>
      </Link>
    </SongItemWrapper>
  );
};

export default SongItem;
