import React from "react";
import SearchContainer from "../../container/SearchResults/SearchContainer";
import styled from "styled-components/macro";
import theme from "../../styles/theme";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  gap: 4rem;
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
