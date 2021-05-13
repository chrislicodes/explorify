import React from "react";
import styled from "styled-components/macro";
import SongPreview from "components/shared/SongPreview";
import Icon from "components/shared/Icon";

const StyledIcon = styled(Icon)``;

const CardWrapper = styled.div`
  position: relative;
  display: flex;

  height: 8rem;
  z-index: 1;

  margin: var(--spacing-size-sm-1) 0;
  gap: var(--spacing-size-sm-1);

  border-radius: 0.5rem;
  background-color: var(--color-grey-1-50);
  box-shadow: 0 2px 8px rgb(0 0 0 / 60%);

  transition: background-color 0.3s;

  cursor: pointer;

  &:hover {
    background-color: var(--color-grey-3);
  }

  &:hover ${StyledIcon} {
    opacity: 0.9;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  min-height: 5rem;
  width: 100%;

  overflow: hidden;

  align-self: center;

  & p {
    width: 100%;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
  }
`;

const PrimaryInfo = styled.p`
  font-weight: bold;
`;

const SecondaryInfo = styled.p`
  color: var(--color-grey-4);
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 100%;

  margin-bottom: var(--spacing-size-sm-4);
  box-shadow: 0 8px 24px rgb(0 0 0 / 50%);
  border-radius: ${({ type }) => type === "artist" && "100%"};

  & img {
    width: auto;
    height: 100%;
    aspect-ratio: 1 / 1;
    object-fit: scale-down;
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

    opacity: 0.7;
    background: var(--color-grey-2);
    transition: all 0.3s;

    z-index: 20;

    & svg {
      fill: var(--color-white);
      width: 30%;
      height: 30%;
    }
  }
`;

const SongPreviewWrapper = styled.div`
  margin-right: var(--spacing-size-sm-1);
`;

function SelectedCardItem(props) {
  let { imageURL, primaryInfo, secondaryInfo, previewURL, onClick } = props;

  return (
    <CardWrapper onClick={(e) => onClick(e, props)}>
      <ImageWrapper>
        <img src={imageURL} alt="Cover" />
        <StyledIcon type="icon-cross" />
      </ImageWrapper>
      <InfoContainer>
        <PrimaryInfo>{primaryInfo}</PrimaryInfo>
        <SecondaryInfo>{secondaryInfo}</SecondaryInfo>
      </InfoContainer>
      <SongPreviewWrapper onClick={(e) => e.stopPropagation()}>
        <SongPreview
          progressBar={false}
          previewURL={previewURL}
          type="rounded"
        />
      </SongPreviewWrapper>
    </CardWrapper>
  );
}

export default SelectedCardItem;
