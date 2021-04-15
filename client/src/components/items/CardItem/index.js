import React from "react";
import { Link } from "react-router-dom";
import Icon from "components/shared/Icon";
import PlaceholderImage from "components/shared/PlaceholderImage";
import styled from "styled-components/macro";

const StyledIcon = styled(Icon)``;
const StyledLink = styled(Link)``;
const StyledPlaceholderImage = styled(PlaceholderImage)``;

const ArtistWrapper = styled.div`
  transition: background-color 0.3s;
  margin-top: 1rem;
  border-radius: 0.5rem;

  & ${StyledLink} {
    margin-bottom: 1rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${(props) =>
      props.backgroundHidden ? "none" : "var(--color-grey-1-50);"};
    padding: 2.2rem;
    padding-bottom: 1.5rem;
    box-shadow: ${(props) =>
      props.backgroundHidden ? "none" : "0 2px 8px rgb(0 0 0 / 60%)"};
  }

  &:hover {
    background-color: var(--color-grey-3);
  }

  &:hover ${StyledIcon} {
    opacity: 0.8;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  margin-bottom: var(--spacing-size-sm-4);
  position: relative;
  box-shadow: 0 8px 24px rgb(0 0 0 / 50%);
  border-radius: ${({ type }) => type === "artist" && "100%"};
  padding-bottom: 100%;

  & img,
  ${StyledPlaceholderImage} {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center center;
    position: absolute;
    top: 0;
    left: 0;
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
      width: 18%;
      height: 18%;
    }
  }
`;

const PrimaryInfo = styled.p`
  font-weight: bold;
  width: 100%;
`;

const SecondaryInfo = styled.p`
  color: var(--color-grey-4);
  font-size: var(--font-size-sm);
`;

const Info = styled.div`
  min-height: 5rem;
  overflow: hidden;
  width: 100%;
  & p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
  }
`;

const CardItem = ({
  imageURL,
  link,
  primaryInfo,
  secondaryInfo,
  type,
  backgroundHidden,
}) => {
  return (
    <ArtistWrapper backgroundHidden={backgroundHidden}>
      <StyledLink to={`/explore/${link}`}>
        <ImageWrapper type={type}>
          {imageURL ? (
            <img src={imageURL} alt={`${secondaryInfo}`} />
          ) : (
            <StyledPlaceholderImage />
          )}
          <StyledIcon type="icon-notification" />
        </ImageWrapper>
        <Info>
          <PrimaryInfo>{primaryInfo}</PrimaryInfo>
          <SecondaryInfo>{secondaryInfo}</SecondaryInfo>
        </Info>
      </StyledLink>
    </ArtistWrapper>
  );
};

export default CardItem;
