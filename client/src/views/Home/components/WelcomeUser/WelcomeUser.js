import React, { useContext } from "react";
import classes from "./WelcomeUser.module.css";
import { AuthContext } from "../../../../context/AuthContext";

const determineGreeting = () => {
  const currentHour = new Date().getHours();
  let welcomeString = "";

  if (currentHour >= 5 && currentHour <= 12) {
    welcomeString = "Good Morning";
  } else if (currentHour >= 13 && currentHour <= 18) {
    welcomeString = "Good Afternoon";
  } else {
    welcomeString = "Good Evening";
  }

  return welcomeString;
};

const WelcomeUser = () => {
  const { display_name: name } = useContext(AuthContext);

  const greeting = determineGreeting();

  return <h1 className={classes.WelcomeUser}>{`${greeting}, ${name}!`}</h1>;
};

export default WelcomeUser;
