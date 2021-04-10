import React from "react";
import SearchContainer from "../../container/SearchResults";
import styled from "styled-components/macro";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  padding: 0 3rem;
  padding-bottom: 3rem;
`;

const Explore = () => {
  return (
    <FlexContainer>
      <SearchContainer />
    </FlexContainer>
  );
};

export default Explore;
