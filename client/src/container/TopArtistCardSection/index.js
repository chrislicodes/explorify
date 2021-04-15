import React from "react";
import CardSection from "container/CardSection";
import Loader from "components/shared/Loader";
import useSWR from "swr";

const TopArtistScroller = ({
  timeRange = "short_term",
  limit = 20,
  offset = 0,
  title = "More artists you enjoy",
  overflowHidden = true,
  link = "/top-artists",
  backgroundHidden = false,
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
          title={title}
          link={link}
          overflowHidden={overflowHidden}
          backgroundHidden={backgroundHidden}
        />
      ) : (
        <Loader />
      )}
    </>
  );
};

export default TopArtistScroller;
