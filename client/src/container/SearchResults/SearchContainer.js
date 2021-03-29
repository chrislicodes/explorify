import React, { useState } from "react";
import styled from "styled-components/macro";
import useSWR from "swr";
import Loader from "../../components/Loader/Loader";
import SearchBar from "../../components/SearchBar/SearchBar";
import WelcomeScreen from "./WelcomeScreen/WelcomeScreen";
import SearchResults from "./SearchResults/SearchResults";

const FixedSearchbar = styled.div`
  position: fixed;
  top: 2.5rem;
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

  searchResult && console.log(searchResult);

  let component = (searchQuery === "" && <WelcomeScreen />) ||
    (searchResult && <SearchResults results={searchResult} />) || <Loader />;

  return (
    <>
      <FixedSearchbar>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </FixedSearchbar>
      {component}
    </>
  );
};

export default SearchContainer;
