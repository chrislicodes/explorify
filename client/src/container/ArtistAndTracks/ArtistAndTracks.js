import React from "react";
import TitleWrapper from "../../components/TitleWrapper/TitleWrapper";
import SongContainer from "../../components/SongContainer/SongContainer";
import Icon from "../../components/Icons/Icon/Icon";
import PlaceholderImage from "../../components/PlaceholderImage/PlaceholderImage";
import { Link } from "react-router-dom";
import theme from "../../styles/theme";
import styled from "styled-components/macro";
import useSWR from "swr";
import Loader from "../../components/Loader/Loader";

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
  height: var(--content-height);
  min-width: var(--content-height);

  & img {
    height: var(--content-height);
    width: var(--content-height);
    box-shadow: 0px 4px 17px 4px rgba(0, 0, 0, 0.3);
    object-fit: cover;
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
  & > ul {
    overflow: hidden;
  }
`;

const ArtistAndTracks = ({ artist, headline = "Artist", nTracks = 10 }) => {
  const { data: user } = useSWR("/me");
  const { data: tracks } = useSWR(
    () => artist && `/artists/${artist.id}/top-tracks?market=${user.country}`
  );

  const imageURL = artist.images.length > 0 && artist.images[1].url;

  return (
    <>
      {tracks ? (
        <TitleWrapper
          headline={`${headline} - ${artist.name}`}
          link={`/explore/artists/${artist.id}`}
        >
          <ContentWrapper>
            <ArtistImageWrapper>
              <Link to={`/explore/artists/${artist.id}`}>
                {imageURL ? (
                  <img src={artist.images[1].url} alt={`${artist.name}`} />
                ) : (
                  <PlaceholderImage />
                )}
                <ImageOverlay type="icon-notification" />
              </Link>
            </ArtistImageWrapper>
            <StyledSongContainer
              tracks={tracks.tracks.slice(0, nTracks)}
              displayImage={false}
            />
          </ContentWrapper>
        </TitleWrapper>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default ArtistAndTracks;
