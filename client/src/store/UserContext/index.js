import React, { useState, useEffect } from "react";
import { axiosInstance } from "App.js";

export const UserContext = React.createContext({
  userData: "",
});

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(undefined);

  useEffect(() => {
    const getUser = async () => {
      try {
        console.log("Fetching User ..");
        const user = await axiosInstance.get("/me");
        setUserData(user.data);
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, []);

  const value = {
    userData,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
