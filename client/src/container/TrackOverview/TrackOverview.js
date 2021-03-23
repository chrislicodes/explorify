import React from "react";
import useSWR from "swr";

function TrackOverview(props) {
  const trackID = props.match.params.trackID;
  const { data: trackInformation } = useSWR(
    () => trackID && `/tracks/${trackID}`
  );
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
