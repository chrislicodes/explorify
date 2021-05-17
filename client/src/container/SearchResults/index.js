import React, { useContext } from "react";
import { SearchContext } from "store/SearchContext";
import { UserContext } from "store/UserContext";
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
  const { userData } = useContext(UserContext);

  const { data: searchResult } = useSWR(
    () =>
      searchQuery !== "" &&
      userData &&
      `/search?q=${encodeURI(
        searchQuery
      )}%20NOT%20genre:hoerspiel%20&type=album,track,artist&market=${
        userData.country
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
