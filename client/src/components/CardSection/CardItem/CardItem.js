import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../Icons/Icon/Icon";
import PlaceholderImage from "../../PlaceholderImage/PlaceholderImage";
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
    box-shadow: 0 2px 8px rgb(0 0 0 / 60%);
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
  border-radius: ${({ type }) => type === "artist" && "100%"};

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

const PrimaryInfo = styled.p`
  font-weight: bold;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`;

const SecondaryInfo = styled.p`
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

const processData = (data, type) => {
  let link = `${type}/${data.id}`;
  let imageURL = data.images?.length > 0 && data.images[1].url;
  let primaryInfo = data.name;
  let secondaryInfo;

  switch (type) {
    case "artist":
      secondaryInfo = data.genres[0] || "Artist";
      break;

    case "album":
      secondaryInfo = data.artists[0].name;
      break;

    case "track":
      imageURL = data.album.images.length > 0 && data.album.images[1].url;
      secondaryInfo = data.artists[0].name;
      break;

    default:
      break;
  }

  return { imageURL, link, primaryInfo, secondaryInfo };
};

const CardItem = ({ data, type }) => {
  const { imageURL, link, primaryInfo, secondaryInfo } = processData(
    data,
    type
  );

  return (
    <ArtistWrapper>
      <StyledLink to={`/explore/${link}`}>
        <ImageWrapper type={type}>
          {imageURL ? (
            <img src={imageURL} alt={`${secondaryInfo}`} />
          ) : (
            <PlaceholderImage />
          )}
          <StyledIcon type="icon-notification" />
        </ImageWrapper>
        <PrimaryInfo>{primaryInfo}</PrimaryInfo>
        <SecondaryInfo>{secondaryInfo}</SecondaryInfo>
      </StyledLink>
    </ArtistWrapper>
  );
};

export default CardItem;
