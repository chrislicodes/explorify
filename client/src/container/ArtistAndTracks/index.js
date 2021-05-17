import React, { useContext } from "react";
import SectionTemplate from "components/templates/SectionTemplate";
import TrackWrapperTemplate from "container/TrackWrapperTemplate";
import Icon from "components/shared/Icon";
import PlaceholderImage from "components/shared/PlaceholderImage";
import { Link } from "react-router-dom";
import theme from "styles/theme";
import styled from "styled-components/macro";
import useSWR from "swr";
import Loader from "components/shared/Loader";
import { UserContext } from "store/UserContext";

const ContentWrapper = styled.div`
  --content-height: 26rem;
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

const StyledTrackWrapperTemplate = styled(TrackWrapperTemplate)`
  min-width: 0;
  & > ul {
    overflow: hidden;
  }
`;

const ArtistAndTracks = ({ artist, headline = "", nTracks = 10, link }) => {
  const { userData } = useContext(UserContext);
  const { data: tracks } = useSWR(
    () =>
      artist &&
      userData &&
      `/artists/${artist.id}/top-tracks?market=${userData.country}`
  );

  const imageURL = artist && artist.images.length > 0 && artist.images[1].url;
  const titleLink = link || (artist && `/explore/artist/${artist.id}`);

  let renderData;

  if (artist === false) {
    renderData = <p>Not enough recent data available.</p>;
  } else if (tracks?.tracks) {
    renderData = (
      <ContentWrapper>
        <ArtistImageWrapper>
          <Link to={`/explore/artist/${artist.id}`}>
            {imageURL ? (
              <img src={artist.images[1].url} alt={`${artist.name}`} />
            ) : (
              <PlaceholderImage />
            )}
            <ImageOverlay type="icon-notification" />
          </Link>
        </ArtistImageWrapper>
        <StyledTrackWrapperTemplate
          tracks={tracks.tracks.slice(0, nTracks)}
          displayImage={false}
        />
      </ContentWrapper>
    );
  } else {
    renderData = <Loader />;
  }

  return (
    <>
      <SectionTemplate headline={`${headline}`} link={titleLink}>
        {renderData}
      </SectionTemplate>
    </>
  );
};

export default ArtistAndTracks;
