import React from "react";
import PageTemplate from "components/templates/PageTemplate";
import RecentlyPlayedTracks from "container/RecentlyPlayedTracks";

function RecentlyPlayedPage() {
  return (
    <PageTemplate>
      <RecentlyPlayedTracks limit={50} link={false} />
    </PageTemplate>
  );
}

export default RecentlyPlayedPage;
