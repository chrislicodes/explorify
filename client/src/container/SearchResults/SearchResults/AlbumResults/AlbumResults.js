import React from "react";
import CardSection from "../../../../components/CardSection/CardSection";
import useSWR from "swr";

const filterArtists = (artists) => {
  if (!artists) return;

  return artists.filter((artist) => !artist.genres.includes("hoerspiel"));
};

const extractRelevantArtistData = (artists) => {
  let artistObj = {};

  for (const artist of artists) {
    artistObj[artist.id] = artist.popularity;
  }
  return artistObj;
};

function AlbumResults({ albums }) {
  const artistIDs = albums.map((album) => album.artists[0].id);
  const { data: artists } = useSWR(
    `/artists?ids=${encodeURI(artistIDs.join(","))}`
  );
  const filteredArtists = artists && filterArtists(artists.artists);
  const filteredAlbums =
    filteredArtists &&
    albums.filter((album) =>
      filteredArtists.find((artist) => artist.id === album.artists[0].id)
    );
  const artistObj =
    filteredArtists && extractRelevantArtistData(filteredArtists);
  const sortedAlbums =
    artistObj &&
    filteredAlbums.sort(
      (a, b) => artistObj[b.artists[0].id] - artistObj[a.artists[0].id]
    );

  return (
    <>
      {filteredAlbums && (
        <CardSection data={sortedAlbums} type={"album"} title="albums" />
      )}
    </>
  );
}

export default AlbumResults;
