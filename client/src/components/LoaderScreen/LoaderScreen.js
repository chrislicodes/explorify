import React from "react";
import Loader from "../Loader";
import styled from "styled-components/macro";

const LoaderScreenContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-1);
`;

const LoaderScreen = () => {
  return (
    <LoaderScreenContainer>
      <Loader />
    </LoaderScreenContainer>
  );
};

export default LoaderScreen;
