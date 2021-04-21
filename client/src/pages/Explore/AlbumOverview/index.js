import React from "react";
import OverviewPageTemplate from "components/templates/OverviewPageTemplate";
import TrackWrapperTemplate from "container/TrackWrapperTemplate/";
import useSWR from "swr";
import { Link } from "react-router-dom";

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

const prepareAlbumInformation = function (album) {
  return {
    albumName: album.name,
    albumImageURL: album.images.length > 0 && album.images[0].url,
    albumLink: album.external_urls.spotify,
    artists: prepareArtists(album.artists),
    albumReleaseYear: album.release_date.slice(0, 4),
    popularity: album.popularity,
    tracks: [...album.tracks.items].map((item) => {
      item.album = {};
      item.album.name = album.name;

      return item;
    }),
  };
};

function AlbumOverview(props) {
  const albumID = props.match.params.albumID;
  const { data: user } = useSWR("/me");

  const { data: albumData } = useSWR(
    () => user && `albums/${albumID}?market=${user.country}`
  );

  const {
    albumName,
    albumImageURL,
    albumLink,
    artists,
    albumReleaseYear,
    popularity,
    tracks,
  } = Boolean(albumData) && prepareAlbumInformation(albumData);

  return (
    <OverviewPageTemplate
      imageURL={albumImageURL}
      title={albumName}
      secondaryInfo={artists}
      additionalInfo={`Release - Year: ${albumReleaseYear} · Popularity: ${popularity}`}
      playLink={albumLink}
      buttonLabel="Play on Spotify"
    >
      {Boolean(tracks) && <TrackWrapperTemplate tracks={tracks} />}
    </OverviewPageTemplate>
  );
}

export default AlbumOverview;
