import React, { useContext } from "react";
import { SearchContext } from "store/SearchContext";
import styled from "styled-components/macro";
import useSWR from "swr";
import Loader from "components/shared/Loader";
import WelcomeScreen from "./WelcomeScreen";
import SearchResults from "./SearchResults";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 100%;
`;

const SearchContainer = () => {
  const { searchQuery } = useContext(SearchContext);
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
      <FlexContainer>{component}</FlexContainer>
    </>
  );
};

export default SearchContainer;
