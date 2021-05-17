import React, { useContext } from "react";
import useSWR from "swr";
import Loader from "components/shared/Loader";
import OverviewPageTemplate from "components/templates/OverviewPageTemplate";
import AlbumCardSection from "container/CardSections/AlbumCardSection";
import ArtistCardSection from "container/CardSections/ArtistCardSection";
import TrackCardSection from "container/CardSections/TrackCardSection";
import { transformFollowerFormat } from "utils";
import { UserContext } from "store/UserContext";

const prepareArtistInformation = function (artist) {
  return {
    artistName: artist.name,
    artistImageURL: artist.images.length > 0 && artist.images[0].url,
    artistLink: artist.external_urls.spotify,
    genres:
      artist.genres.length > 0 &&
      artist.genres.slice(0, 5).reduce((prev, cur) => [prev, " | ", cur]),
    followers: transformFollowerFormat(artist.followers.total),
    popularity: artist.popularity,
  };
};

function ArtistOverview(props) {
  const artistID = props.match.params.artistID;

  const { userData: user } = useContext(UserContext);
  const { data: artistInformation } = useSWR(
    () => artistID && `/artists/${artistID}`
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
            <TrackCardSection
              fetchURL={
                artistID &&
                user &&
                `/artists/${artistID}/top-tracks?country=${user.country}`
              }
              title="Top Tracks"
            />
            <ArtistCardSection
              fetchURL={artistID && `/artists/${artistID}/related-artists`}
              propertyName="artists"
              type="artist"
              title="Related Artists"
            />
            <AlbumCardSection
              fetchURL={
                artistID &&
                user &&
                `/artists/${artistID}/albums?market=${user.country}`
              }
              propertyName="items"
              type="album"
              title="Discography"
            />
          </OverviewPageTemplate>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default ArtistOverview;
