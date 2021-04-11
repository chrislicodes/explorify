import React from "react";
import styled from "styled-components/macro";
import theme from "styles/theme";

const ButtonStyled = styled.button`
  max-height: 4rem;
  height: 100%;
  padding: 0 2.1rem;

  border: 2px solid var(--color-spotify-green);
  border-radius: 2rem;
  outline: none;

  background-color: ${({ main }) =>
    main ? "var(--color-spotify-green)" : "transparent"};
  color: ${({ main }) =>
    main ? "var(--color-white)" : "var(--color-spotify-green)"};

  font-size: var(--font-size-sm);
  font-weight: bold;

  cursor: pointer;
  transition: ${theme.transition};

  &:hover {
    background-color: ${({ main }) =>
      main ? "var(--color-spotify-logo-green)" : "var(--color-spotify-green)"};
    color: var(--color-white);
  }
`;

const Button = ({ onClick, children, className, main }) => {
  return (
    <ButtonStyled className={className} onClick={onClick} main={main}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
