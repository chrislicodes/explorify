import React from "react";
import { useTrackInformation } from "../../../api";

function TrackOverview(props) {
  const trackID = props.match.params.trackID;
  const { trackInformation } = useTrackInformation(trackID);
  return (
    <div>
      <pre>
        {trackInformation
          ? JSON.stringify(trackInformation, undefined, 2)
          : "Loading.."}
      </pre>
    </div>
  );
}

export default TrackOverview;
