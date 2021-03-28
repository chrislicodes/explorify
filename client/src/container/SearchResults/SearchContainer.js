import React, { useState } from "react";
import styled from "styled-components/macro";
import useSWR from "swr";
import Loader from "../../components/Loader/Loader";
import SearchBar from "../../components/SearchBar/SearchBar";
import WelcomeScreen from "./WelcomeScreen/WelcomeScreen";
import SearchResults from "./SearchResults/SearchResults";

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
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {component}
    </>
  );
};

export default SearchContainer;
