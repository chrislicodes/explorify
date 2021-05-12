import React from "react";
import useSWR from "swr";
import styled from "styled-components/macro";
import Loader from "components/shared/Loader";
import { Link } from "react-router-dom";
import AudioFeaturesBar from "components/shared/AudioFeaturesBarChart";
import OverviewPageTemplate from "components/templates/OverviewPageTemplate";
import SongPreview from "components/shared/SongPreview";
import theme from "styles/theme";
import { transformDuration } from "utils";
import TrackInfoItem from "./TrackInfoItem";

const keyMapping = {
  0: "C",
  1: "C♯, D♭",
  2: "D",
  3: "D♯, E♭",
  4: "E",
  5: "F",
  6: "F♯, G♭",
  7: "G",
  8: "G♯, A♭",
  9: "A",
  10: "A♯, B♭",
  11: "B",
};

const modeMapping = {
  0: "minor",
  1: "Major",
};

const TrackInformation = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". . . "
    ". . . ";
`;

const AudioFeatures = styled.div`
  height: 450px;
  width: 100%;
  align-self: flex-start;

  @media ${theme.bp.tabletS} {
    height: 350px;
  }
`;

const prepareArtists = (artists) => {
  return artists
    .map((artist) => (
      <Link key={artist.id} to={`/explore/artist/${artist.id}`}>
        {artist.name}
      </Link>
    ))
    .reduce((prev, cur) => [prev, " | ", cur]);
};

const prepareTrackInformation = function (trackInformation) {
  const { album, artists } = trackInformation;

  return {
    albumInfo: [
      <Link key={album.id} to={`/explore/album/${album.id}`}>
        {album.name}
      </Link>,
      <span key={1}>{album.release_date.slice(0, 4)}</span>,
    ].reduce((prev, cur) => [prev, " · ", cur]),

    albumImageURL: album.images.length > 0 && album.images[0].url,
    artists: prepareArtists(artists),
    trackDuration: trackInformation.duration_ms,
    trackName: trackInformation.name,
    trackPopularity: trackInformation.popularity,
    trackLink: trackInformation.external_urls.spotify,
    previewURL: trackInformation.preview_url,
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

  const {
    albumInfo,
    albumImageURL,
    artists,
    trackDuration,
    trackName,
    trackPopularity,
    trackLink,
    previewURL,
  } = Boolean(trackInformation) && prepareTrackInformation(trackInformation);

  const audioData =
    (Boolean(audioFeatures) && prepareAudioFeatures(audioFeatures)) || [];

  const {
    tempo: trackTempo,
    mode,
    key,
  } = Boolean(audioFeatures) && audioFeatures;

  return (
    <>
      {trackInformation ? (
        <>
          <OverviewPageTemplate
            imageURL={albumImageURL}
            title={trackName}
            secondaryInfo={artists}
            additionalInfo={albumInfo}
            playLink={trackLink}
            buttonLabel="Play on Spotify"
          >
            <TrackInformation>
              <TrackInfoItem
                item={
                  (previewURL && (
                    <SongPreview
                      previewURL={previewURL}
                      progressBar={false}
                      type="rounded"
                    />
                  )) || <p>Not available</p>
                }
                fieldName="Song Preview"
              />
              <TrackInfoItem
                item={transformDuration(trackDuration)}
                fieldName="Duration"
              />
              <TrackInfoItem item={trackPopularity} fieldName="Popularity" />
              <TrackInfoItem item={keyMapping[key]} fieldName="Key" />
              <TrackInfoItem item={modeMapping[mode]} fieldName="Mode" />
              <TrackInfoItem
                item={Math.round(trackTempo * 1)}
                fieldName="Tempo (BPM)"
              />
            </TrackInformation>
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
