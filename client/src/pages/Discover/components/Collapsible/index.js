import React, { useState } from "react";
import styled, { css } from "styled-components/macro";
import Icon from "components/shared/Icon";

const CollapsibleContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
`;

const CollapseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-grey-2);
  cursor: pointer;
  padding: 1.2rem;
  width: 10rem;
  border: none;
  text-align: left;
  outline: none;
  border-radius: 1rem;
  color: var(--color-white);
  border: 1px solid var(--color-grey-3);

  transition: all 0.3s;

  &:active,
  &:hover {
    background-color: var(--color-grey-4);
  }
`;

const Content = styled.div`
  padding: 0 18px;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.3s;

  ${(props) =>
    props.isOpen &&
    css`
      max-height: 100rem;
    `};
`;

const StyledIcon = styled(Icon)`
  & svg {
    height: 2rem;
    width: 2rem;
    fill: var(--color-spotify-green);
  }
`;

function Collapsible({ children, mountsOpen = false }) {
  const [isOpen, setIsOpen] = useState(mountsOpen);

  const toggleContent = () => {
    setIsOpen((prevState) => setIsOpen(!prevState));
  };

  return (
    <CollapsibleContainer>
      <CollapseButton onClick={toggleContent}>
        <StyledIcon type="icon-equalizer" />
        <p>Options</p>
      </CollapseButton>
      <Content isOpen={isOpen}>{children}</Content>
    </CollapsibleContainer>
  );
}

export default Collapsible;
