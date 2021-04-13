import React from "react";
import useSWR from "swr";
import styled from "styled-components/macro";
import Loader from "components/shared/Loader";
import OverviewPageTemplate from "components/templates/OverviewPageTemplate";
import CardSection from "container/CardSection";

const prepareArtistInformation = function (artist) {
  return {
    artistName: artist.name,
    artistImageURL: artist.images.length > 0 && artist.images[0].url,
    artistLink: artist.external_urls.spotify,
    genres:
      artist.genres.length > 0 &&
      artist.genres.reduce((prev, cur) => [prev, " | ", cur]),
    followers: artist.followers.total,
    popularity: artist.popularity,
  };
};

function ArtistOverview(props) {
  const artistID = props.match.params.artistID;

  const { data: user } = useSWR("/me");

  const { data: artistInformation } = useSWR(
    () => artistID && `/artists/${artistID}`
  );

  const { data: artistRelatedArtists } = useSWR(
    () => artistID && `/artists/${artistID}/related-artists`
  );

  const { data: artistAlbums } = useSWR(
    () => artistID && `/artists/${artistID}/albums`
  );

  const { data: artistTopTracks } = useSWR(
    () =>
      artistID &&
      user &&
      `/artists/${artistID}/top-tracks?country=${user.country}`
  );

  const {
    artistName,
    artistImageURL,
    artistLink,
    genres,
    followers,
    popularity,
  } = Boolean(artistInformation) && prepareArtistInformation(artistInformation);

  return (
    <>
      {artistInformation ? (
        <>
          <OverviewPageTemplate
            imageURL={artistImageURL}
            title={artistName}
            secondaryInfo={genres}
            additionalInfo={`Followers: ${followers} · Popularity: ${popularity}`}
            playLink={artistLink}
            buttonLabel="Play on Spotify"
          >
            {artistTopTracks ? (
              <CardSection
                data={artistTopTracks.tracks}
                type="track"
                title="Top Tracks"
              />
            ) : (
              <Loader />
            )}
            {artistRelatedArtists ? (
              <CardSection
                data={artistRelatedArtists.artists}
                type="artist"
                title="Related Artists"
              /> // PROVIDE URL IN THE CONTAINER AND ALSO HANDLE SHOWING THE LOADER THERE
            ) : (
              <Loader />
            )}
            {artistAlbums ? (
              <CardSection
                data={artistAlbums.items}
                type="album"
                title="Discography"
              />
            ) : (
              <Loader />
            )}
          </OverviewPageTemplate>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default ArtistOverview;
