import React from "react";
import styled from "styled-components/macro"

const NothingFoundContainer = styled.div`
  display: flex;
  flex-direction: column;

  & p {
    margin-bottom: 2rem;
  }

  & img {
    border-radius: 2rem;
  }
`;

const NothingFound = () => {
  return (
    <NothingFoundContainer>
      <p>Nothing found.. </p>
      <img
        src="https://i.pinimg.com/originals/a0/36/74/a03674ba07d318077a4604780d085dfe.jpg"
        alt="Nothing found"
      />
    </NothingFoundContainer>
  );
};