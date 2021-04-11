import React, { useState } from "react";
import styled from "styled-components/macro";
import useSWR from "swr";
import Loader from "components/shared/Loader";
import SearchBar from "components/shared/SearchBar";
import WelcomeScreen from "./WelcomeScreen";
import SearchResults from "./SearchResults";

const FixedSearchbar = styled.div`
  position: fixed;
  top: 14px;
  width: 20%;
  min-width: 20rem;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 100%;
`;

const SearchContainer = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: user } = useSWR("/me");

  const { data: searchResult } = useSWR(
    () =>
      searchQuery !== "" &&
      user &&
      `/search?q=${encodeURI(
        searchQuery
      )}%20NOT%20genre:hoerspiel%20&type=album,track,artist&market=${
        user.country
      }&limit=20`
  );

  let component = (searchQuery === "" && <WelcomeScreen />) ||
    (searchResult && <SearchResults results={searchResult} />) || <Loader />;

  return (
    <>
      <FixedSearchbar>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </FixedSearchbar>
      <FlexContainer>{component}</FlexContainer>
    </>
  );
};

export default SearchContainer;
