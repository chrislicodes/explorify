import React, { useState } from "react";
import TopArtistCardSection from "container/CardSections/ArtistCardSection/TopArtistCardSection";
import PageTemplate from "components/templates/PageTemplate";
import Button from "components/shared/Button";
import styled from "styled-components/macro";

const ButtonWrapper = styled.div`
  display: flex;
  gap: var(--spacing-size-sm-1);
  height: 4rem;
`;

function TopArtists() {
  const [timeRange, setTimeRange] = useState("long_term");

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
      <TopArtistCardSection
        link={false}
        title="Your Top Artists"
        overflowHidden={false}
        limit={35}
        timeRange={timeRange}
        backgroundHidden={true}
      />
    </PageTemplate>
  );
}

export default TopArtists;
