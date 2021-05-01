import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

export const SearchContext = React.createContext({
  handleClick: () => {},
  setSearchQuery: () => {},
  searchQuery: "",
});

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");

  let history = useHistory();
  let location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/explore") {
      setSearchQuery("");
    }
  }, [location]);

  const handleClick = () => {
    if (history.location.pathname !== "/explore") {
      history.push("/explore");
    }
  };

  const value = {
    handleClick,
    setSearchQuery,
    searchQuery,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
