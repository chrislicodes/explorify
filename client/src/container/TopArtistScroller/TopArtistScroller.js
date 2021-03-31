import React from "react";
import CardSection from "../../components/CardSection/CardSection";
import Loader from "../../components/Loader/Loader";
import useSWR from "swr";

const TopArtistScroller = ({
  timeRange = "short_term",
  limit = 20,
  offset = 0,
}) => {
  const { data: topArtists } = useSWR(
    `/me/top/artists?time_range=${timeRange}&limit=${limit}`
  );

  return (
    <>
      {topArtists ? (
        <CardSection
          data={topArtists.items.slice(offset)}
          type={"artist"}
          title="More artists you enjoy"
        />
      ) : (
        <Loader />
      )}
    </>
  );
};

export default TopArtistScroller;
