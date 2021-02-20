import React from "react";
import SongItem from "../SongItem/SongItem";

const SongContainer = (props) => {
  const trackArr = props.tracks.map((item) => (
    <SongItem key={item.track.id + item.played_at} trackData={item.track} />
  ));

  return <>{trackArr}</>;
};

export default SongContainer;
