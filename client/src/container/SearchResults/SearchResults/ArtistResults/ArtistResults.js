import React from "react";
import ArtistAndTracks from "../../../ArtistAndTracks/ArtistAndTracks";

const sortAndFilterArtistArray = (artists) => {
  if (!artists) return;

  const filteredArtists = artists.filter((artist) => artist.genres.length > 0);
  const sortedArtists = filteredArtists.sort(
    (a, b) => b.popularity - a.popularity
  );
  return sortedArtists;
};

function ArtistResults({ artists }) {
  const sortedArtists = sortAndFilterArtistArray(artists);

  console.log(artists);
  return (
    <ArtistAndTracks artist={sortedArtists[0]} headline="Artist Top Result" />
  );
}

export default ArtistResults;
