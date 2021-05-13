import React, { useState } from "react";
import TopTracksSection from "container/TopTracksSection/";
import PageTemplate from "components/templates/PageTemplate";
import Button from "components/shared/Button";
import styled from "styled-components/macro";

const ButtonWrapper = styled.div`
  display: flex;
  gap: var(--spacing-size-sm-1);
  height: 4rem;
`;

function TopTracks() {
  const [timeRange, setTimeRange] = useState("long_term");

  //don't judge me
  const [activeShort, activeMedium, activeLong] = [
    timeRange === "short_term",
    timeRange === "medium_term",
    timeRange === "long_term",
  ];

  return (
    <PageTemplate>
      <ButtonWrapper>
        <Button main={activeLong} onClick={() => setTimeRange("long_term")}>
          All Time
        </Button>
        <Button main={activeMedium} onClick={() => setTimeRange("medium_term")}>
          Last 6 Months
        </Button>
        <Button main={activeShort} onClick={() => setTimeRange("short_term")}>
          Last 4 Weeks
        </Button>
      </ButtonWrapper>
      <TopTracksSection limit={35} timeRange={timeRange} link={false} />
    </PageTemplate>
  );
}

export default TopTracks;
