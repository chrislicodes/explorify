import React from "react";
import styled from "styled-components/macro";

const ButtonStyled = styled.button`
  max-height: 5rem;
  height: 100%;
  padding: 0 var(--spacing-size-md-1);

  border: 2px solid var(--color-spotify-green);
  border-radius: 2rem;
  outline: none;

  background-color: ${({ main }) =>
    main ? "var(--color-spotify-green)" : "transparent"};
  color: ${({ main }) =>
    main ? "var(--color-white)" : "var(--color-spotify-green)"};

  font-size: var(--font-size-2);
  font-weight: bold;

  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, transform 0.1s;

  &:hover {
    background-color: ${({ main }) =>
      main ? "var(--color-spotify-logo-green)" : "var(--color-spotify-green)"};
    color: var(--color-white);
  }

  &:active {
    transform: translateY(0.5px);
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
