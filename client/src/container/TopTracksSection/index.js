import React from "react";
import Loader from "components/shared/Loader";
import SectionTemplate from "components/templates/SectionTemplate";
import TrackContainer from "container/TrackWrapperTemplate";
import useSWR from "swr";

function TopTracksSection({
  timeRange = "short_term",
  limit = 10,
  link = "/top-tracks",
}) {
  const { data: topTracks } = useSWR(
    `/me/top/tracks?time_range=${timeRange}&limit=${limit}`
  );

  return (
    <>
      {topTracks ? (
        <SectionTemplate headline={"Your top tracks"} link={link}>
          <TrackContainer tracks={topTracks.items} displayImage={true} />
        </SectionTemplate>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default TopTracksSection;
