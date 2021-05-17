import React, { useContext } from "react";
import styled from "styled-components/macro";
import { UserContext } from "store/UserContext";

const Greeting = styled.h1`
  color: var(--color-white);
  font-size: var(--font-size-6);
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
  const { userData } = useContext(UserContext);
  const greeting = determineGreeting();

  return (
    <Greeting>
      {`${greeting}`}
      {userData && `, ${userData.display_name}!`}
    </Greeting>
  );
};

export default WelcomeUser;
