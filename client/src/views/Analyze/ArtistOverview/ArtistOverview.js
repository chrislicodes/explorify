import React from "react";

function ArtistOverview(props) {
  const trackID = props.match.params.artistID;
  console.log(props);
  return (
    <div>
      <p>{trackID}</p>
    </div>
  );
}

export default ArtistOverview;
