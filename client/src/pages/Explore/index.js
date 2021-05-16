import React from "react";
import SearchContainer from "container/SearchResults";
import styled from "styled-components/macro";
import theme from "styles/theme";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  padding: 0 var(--spacing-size-lg-1);
  padding-bottom: var(--spacing-size-lg-1);

  @media ${theme.bp.tabletS} {
    padding: 0 var(--spacing-size-sm-3);
  }
`;

const Explore = () => {
  return (
    <FlexContainer>
      <SearchContainer />
    </FlexContainer>
  );
};

export default Explore;
