import React from "react";

function AlbumOverview(props) {
  const albumID = props.match.params.albumID;
  return (
    <div>
      <p>{albumID}</p>
    </div>
  );
}

export default AlbumOverview;
