import React from "react";
import useSWR from "swr";
import ArtistAndTracks from "container/ArtistAndTracks";

const TopArtist = ({ timeRange = "short_term" }) => {
  const { data: artistJSON } = useSWR(
    `/me/top/artists?time_range=${timeRange}&limit=1`
  );

  const artist =
    artistJSON && artistJSON.items.length > 0 && artistJSON.items[0];

  const artistName = artist && artist.name;

  return (
    <>
      <ArtistAndTracks
        artist={artist}
        headline={artistName}
        link="/top-artists"
      />
    </>
  );
};

export default TopArtist;
