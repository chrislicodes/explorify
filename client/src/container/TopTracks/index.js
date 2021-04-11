import React from "react";
import Loader from "components/Loader";
import SectionTemplate from "components/SectionTemplate";
import TrackContainer from "container/TrackContainer";
import useSWR from "swr";

function TopTracks({ timeRange = "short_term", limit = 10 }) {
  const { data: topTracks } = useSWR(
    `/me/top/tracks?time_range=${timeRange}&limit=${limit}`
  );

  return (
    <>
      {topTracks ? (
        <SectionTemplate headline={"Your top tracks"} link={"/top-tracks"}>
          <TrackContainer tracks={topTracks.items} displayImage={true} />
        </SectionTemplate>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default TopTracks;
