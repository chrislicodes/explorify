import React from "react";
import Icon from "components/shared/Icon";
import PlaceholderImage from "components/shared/PlaceholderImage";
import styled from "styled-components/macro";
import SongPreview from "components/shared/SongPreview";
import { useHistory } from "react-router-dom";

const StyledIcon = styled(Icon)``;
const StyledPlaceholderImage = styled(PlaceholderImage)``;

const CardWrapper = styled.div`
  position: relative;
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  z-index: 1;

  margin: var(--spacing-size-sm-1) 0;
  padding: ${(props) =>
    props.backgroundHidden
      ? "var(--spacing-size-sm-1)"
      : "var(--spacing-size-sm-3)"};
  padding-bottom: var(--spacing-size-sm-3);

  background-color: ${(props) =>
    props.backgroundHidden ? "none" : "var(--color-grey-1-50);"};
  box-shadow: ${(props) =>
    props.backgroundHidden ? "none" : "0 2px 8px rgb(0 0 0 / 60%)"};
  transition: background-color 0.3s;

  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: var(--color-grey-3);
  }

  &:hover ${StyledIcon} {
    opacity: 0.8;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  margin-bottom: var(--spacing-size-sm-4);
  padding-bottom: 100%;

  box-shadow: 0 8px 24px rgb(0 0 0 / 50%);
  border-radius: ${({ type }) => type === "artist" && "100%"};

  & img,
  ${StyledPlaceholderImage} {
    height: 100%;
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

const PrimaryInfo = styled.div`
  font-weight: bold;
  /* width: 100%; */
`;

const SecondaryInfo = styled.div`
  color: var(--color-grey-4);
  font-size: var(--font-size-1);
`;

const Info = styled.div`
  min-height: 5rem;
  overflow: hidden;
  width: 100%;

  & div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
  }
`;

const SongPreviewWrapper = styled.div`
  position: absolute;
  bottom: 3%;
  right: 3%;
  z-index: 1000;
`;

const CardItem = (props) => {
  let {
    imageURL,
    link,
    primaryInfo,
    secondaryInfo,
    type,
    backgroundHidden,
    previewURL,
    onClick,
  } = props;

  let history = useHistory();

  function handleClick() {
    history.push(`/explore/${link}`);
  }

  return (
    <CardWrapper
      backgroundHidden={backgroundHidden}
      onClick={onClick ? (e) => onClick(e, props) : handleClick}
    >
      <ImageWrapper type={type}>
        {imageURL ? (
          <img src={imageURL} alt={`${secondaryInfo}`} />
        ) : (
          <StyledPlaceholderImage />
        )}
        <StyledIcon type="icon-notification" />
        {previewURL && (
          <>
            <SongPreviewWrapper onClick={(e) => e.stopPropagation()}>
              <SongPreview
                progressBar={false}
                previewURL={previewURL}
                type="rounded"
              />
            </SongPreviewWrapper>
          </>
        )}
      </ImageWrapper>
      <Info>
        <PrimaryInfo>{primaryInfo}</PrimaryInfo>
        <SecondaryInfo>{secondaryInfo}</SecondaryInfo>
      </Info>
    </CardWrapper>
  );
};

export default CardItem;
