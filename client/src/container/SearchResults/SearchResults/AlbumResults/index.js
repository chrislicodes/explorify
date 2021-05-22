import React, { useContext } from "react";
import AlbumCardSection from "container/CardSections/AlbumCardSection";
import useSWR from "swr";
import { UserContext } from "store/UserContext";

const filterArtists = (artists) => {
  if (!artists) return;

  return artists.filter((artist) => !artist.genres.includes("hoerspiel"));
};

function AlbumResults({ albums }) {
  const artistIDs = albums.map((album) => album.artists[0].id);
  const albumIDs = albums.map((album) => album.id);

  const { userData } = useContext(UserContext);

  const { data: artists } = useSWR(
    () => userData && `/artists?ids=${encodeURI(artistIDs.join(","))}`
  );

  const { data: albumsData } = useSWR(
    () =>
      userData &&
      `/albums?ids=${encodeURI(albumIDs.join(","))}&market=${userData.country}`
  );

  const filteredArtists = artists && filterArtists(artists.artists);

  const filteredAlbums =
    filteredArtists &&
    albumsData &&
    albumsData.albums.filter((album) =>
      filteredArtists.find((artist) => artist.id === album.artists[0].id)
    );

  const sortedAlbums =
    filteredAlbums &&
    [...filteredAlbums].sort((a, b) => b.popularity - a.popularity);

  return (
    <>
      {sortedAlbums && (
        <AlbumCardSection data={sortedAlbums} type={"album"} title="albums" />
      )}
    </>
  );
}

export default AlbumResults;
