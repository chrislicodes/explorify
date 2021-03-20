import React, { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";
import styled from "styled-components/macro";

const Greeting = styled.h1`
  color: var(--color-white);
  font-size: var(--font-size-xxl);
`;

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

  return <Greeting>{`${greeting}, ${name}!`}</Greeting>;
};

export default WelcomeUser;
