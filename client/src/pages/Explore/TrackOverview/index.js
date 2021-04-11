import React from "react";
import useSWR from "swr";
import styled from "styled-components/macro";
import Loader from "components/shared/Loader";
import { Link } from "react-router-dom";
import AudioFeaturesBar from "components/shared/AudioFeaturesBarChart";
import OverviewPageTemplate from "components/templates/OverviewPageTemplate";

const TrackInformation = styled.div``;
const AudioFeatures = styled.div`
  height: 450px;
  width: 100%;
  align-self: flex-start;
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
    <>
      {trackInformation ? (
        <>
          <OverviewPageTemplate
            imageURL={albumImageURL}
            title={trackName}
            secondaryInfo={artists}
            additionalInfo={`${albumName} · ${albumReleaseYear}`}
            playLink={trackLink}
          >
            <TrackInformation>HERE GOES A GRID</TrackInformation>
            <AudioFeatures>
              <AudioFeaturesBar data={audioData} />
            </AudioFeatures>
          </OverviewPageTemplate>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default TrackOverview;
