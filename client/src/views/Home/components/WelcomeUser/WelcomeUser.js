import React from "react";
import classes from "./WelcomeUser.module.css";

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

const WelcomeUser = (props) => {
  const greeting = determineGreeting();
  const user = "Testuser";

  return <h1 className={classes.WelcomeUser}>{`${greeting}, ${user}! :)`}</h1>;
};

export default WelcomeUser;
