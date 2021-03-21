import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../components/Icons/Icon";
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--color-grey-1-50);
    border-radius: 0.4rem;
  }

  &:hover ${StyledIcon} {
    opacity: 0.8;
  }
`;

const ImageWrapper = styled.div`
  width: 16rem;
  height: 16rem;
  border-radius: 100%;
  overflow: hidden;
  margin-bottom: var(--spacing-size-sm-1);
  position: relative;

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

const ArtistName = styled.p`
  font-weight: bold;
`;

const Genre = styled.p`
  color: var(--color-grey-4);
  font-size: var(--font-size-sm);
  text-align: center;
`;

// ---------------------------------------
// -------------  LOGIC
// ---------------------------------------

const ArtistCard = ({ artist }) => {
  return (
    <ArtistWrapper>
      <StyledLink to={`/analyze/artists/${artist.id}`}>
        <ImageWrapper>
          <img src={artist.images[1].url} alt={`${artist.name}`} />
          <StyledIcon type="icon-notification" />
        </ImageWrapper>
        <ArtistName>{artist.name}</ArtistName>
        <Genre>{artist.genres[0]}</Genre>
      </StyledLink>
    </ArtistWrapper>
  );
};

export default ArtistCard;
