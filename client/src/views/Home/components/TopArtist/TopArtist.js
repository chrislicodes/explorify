import React from "react";
import TitleWrapper from "../../../../components/TitleWrapper/TitleWrapper";
import SongContainer from "../../../../components/SongContainer/SongContainer";
import Icon from "../../../../components/Icons/Icon/Icon";
import { Link } from "react-router-dom";
import theme from "../../../../styles/theme";

import styled from "styled-components/macro";

const ContentWrapper = styled.div`
  --content-height: 25rem;
  display: flex;
  align-items: center;
  height: var(--content-height);
  gap: var(--spacing-size-md-2);

  @media ${theme.bp.tabletL} {
    flex-direction: column;
    height: auto;
  }
`;

const ImageOverlay = styled(Icon)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0;
  background: var(--color-grey-2);
  transition: all 0.3s;

  & svg {
    fill: var(--color-white);
    width: 3rem;
    height: 3rem;
  }
`;

const ArtistImageWrapper = styled.div`
  position: relative;

  & img {
    height: var(--content-height);
    width: var(--content-height);
    box-shadow: 0px 4px 17px 4px rgba(0, 0, 0, 0.3);
  }

  &:hover ${ImageOverlay} {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const StyledSongContainer = styled(SongContainer)`
  padding: 0.35rem 0;
  padding-right: 0;
  min-width: 0;
`;

const TopArtist = ({ artist, tracks }) => {
  return (
    <TitleWrapper
      headline={`TOP ARTIST - ${artist.name}`}
      link={`/analyze/artists/top`}
    >
      <ContentWrapper>
        <ArtistImageWrapper>
          <Link to={`/analyze/artist/${artist.id}`}>
            <img src={artist.images[1].url} alt={`${artist.name}`} />
            <ImageOverlay type="icon-notification" />
          </Link>
        </ArtistImageWrapper>
        <StyledSongContainer tracks={tracks.tracks} displayImage={false} />
      </ContentWrapper>
    </TitleWrapper>
  );
};

export default TopArtist;
