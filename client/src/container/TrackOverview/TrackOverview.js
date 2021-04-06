import React from "react";
import useSWR from "swr";
import styled from "styled-components/macro";
import Loader from "../../components/Loader/";
import { Link } from "react-router-dom";
import AudioFeaturesBar from "../../components/AudioFeaturesBar/AudioFeaturesBar";

const FlexContainer = styled.div`
  max-width: 1400px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 3rem;
  padding-bottom: 5rem;
  gap: 3rem;

  & > * {
    width: 100%;
  }
`;

const TrackHeader = styled.div`
  display: flex;
  gap: 3rem;
`;

const TrackDescription = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  gap: 1rem;
  margin-top: 1rem;
`;

const AlbumImageContainer = styled.div`
  width: 30rem;
  height: 30rem;

  & img {
    height: 100%;
    width: 100%;
  }
`;

const TrackInformation = styled.div``;
const AudioFeatures = styled.div`
  height: 60%;
  width: 100%;
  /* max-width: 1000px; */
  align-self: flex-start;
`;

const TrackName = styled.p`
  font-size: var(--font-size-xxxxl);
  font-weight: 600;
  line-height: 1;
`;
const Artists = styled.p`
  font-size: var(--font-size-xxl);
  & a {
    color: var(--color-spotify-green);

    &:hover {
      border-bottom: 1px solid var(--color-spotify-green);
    }
  }
`;
const AlbumInfo = styled.p`
  font-size: var(--font-size-lg);
  color: var(--color-grey-5);
`;

const PlayButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18rem;
  height: 4.5rem;
  margin-top: 1rem;
  border-radius: 15rem;
  font-weight: 500;
  font-size: var(--font-size-md-2);
  user-select: none;
  cursor: pointer;
  background-color: var(--color-spotify-green);
  transition: all 0.1s ease-in;

  &:hover {
    background-color: var(--color-spotify-logo-green);
  }
`;

const prepareArtists = (artists) => {
  const artistElement = artists
    .map((artist) => (
      <Link key={artist.id} to={`/explore/artist/${artist.id}`}>
        {artist.name}
      </Link>
    ))
    .reduce((prev, cur) => [prev, " | ", cur]);

  return artistElement;
};

const prepareTrackInformation = function (trackInformation) {
  const album = trackInformation.album;
  const artists = trackInformation.artists;

  return {
    albumName: album.name,
    albumImageURL: album.images.length > 0 && album.images[0].url,
    albumID: album.id,
    albumReleaseYear: album.release_date.slice(0, 4),
    artists: prepareArtists(artists),
    trackDuration: trackInformation.duration_ms,
    trackName: trackInformation.name,
    trackPopularity: trackInformation.popularity,
    trackLink: trackInformation.external_urls.spotify,
  };
};

const prepareAudioFeatures = function (audioFeatures) {
  const relevantMetrics = [
    "acousticness",
    "danceability",
    "energy",
    "instrumentalness",
    "liveness",
    "speechiness",
    "valence",
  ];

  let data = [];

  relevantMetrics.forEach((metric) =>
    data.push({
      metric: metric,
      value: Math.round(audioFeatures[metric] * 100) / 100,
    })
  );

  return data;
};

function TrackOverview(props) {
  const trackID = props.match.params.trackID;

  const { data: trackInformation } = useSWR(
    () => trackID && `/tracks/${trackID}`
  );

  const { data: audioFeatures } = useSWR(
    () => trackID && `/audio-features/${trackID}`
  );

  // const { data: audioAnalysis } = useSWR(
  //   () => trackID && `/audio-analysis/${trackID}`
  // );

  console.log(trackInformation);
  console.log(audioFeatures);

  const {
    albumName,
    albumImageURL,
    albumID,
    albumReleaseYear,
    artists,
    trackDuration,
    trackName,
    trackPopularity,
    trackLink,
  } = Boolean(trackInformation) && prepareTrackInformation(trackInformation);

  const audioData =
    (Boolean(audioFeatures) && prepareAudioFeatures(audioFeatures)) || [];

  return (
    <FlexContainer>
      {trackInformation ? (
        <>
          <TrackHeader>
            <AlbumImageContainer>
              <img src={albumImageURL} alt={albumName} />
            </AlbumImageContainer>
            <TrackDescription>
              <TrackName>{trackName}</TrackName>
              <Artists>{artists}</Artists>
              <AlbumInfo>
                {albumName} · {albumReleaseYear}
              </AlbumInfo>
              <PlayButton
                href={trackLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Play on Spotify
              </PlayButton>
            </TrackDescription>
          </TrackHeader>
          <TrackInformation>HERE GOES A GRID</TrackInformation>
          <AudioFeatures>
            <AudioFeaturesBar data={audioData} />
          </AudioFeatures>
        </>
      ) : (
        <Loader />
      )}
    </FlexContainer>
  );
}

export default TrackOverview;
