import React, { useState } from "react";

export const SearchContext = React.createContext({
  setSearchQuery: () => {},
  searchQuery: "",
});

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const value = {
    setSearchQuery,
    searchQuery,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
