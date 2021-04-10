import React from "react";
import styled from "styled-components/macro";
import useSWR from "swr";

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
  const { data: userData } = useSWR("/me");
  const userName = userData && userData.display_name;
  const greeting = determineGreeting();

  return <Greeting>{`${greeting}, ${userName}!`}</Greeting>;
};

export default WelcomeUser;
