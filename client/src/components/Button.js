import React from "react";
import styled from "styled-components/macro";
import theme from "../styles/theme";

const ButtonStyled = styled.button`
  height: 100%;
  padding: 0 2.1rem;

  border: 2px solid var(--color-spotify-green);
  border-radius: 2rem;
  outline: none;
  background-color: transparent;

  font-size: var(--font-size-sm);
  color: var(--color-spotify-green);
  font-weight: bold;

  cursor: pointer;
  transition: ${theme.transition};

  &:hover {
    background-color: var(--color-spotify-green);
    color: var(--color-white);
  }
`;

const Button = ({ onClick, children }) => {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
};

export default Button;
