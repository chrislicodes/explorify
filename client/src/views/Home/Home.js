import React from "react";
import classes from "./Home.module.css";

const Home = () => {
  const welcomeUser = () => {
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

  const greetingString = welcomeUser();

  return (
    <div>
      Home <p className={classes.Greeting}>{greetingString}, Dennis</p>
    </div>
  );
};

export default Home;
