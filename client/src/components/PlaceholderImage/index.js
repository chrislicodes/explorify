import React from "react";
import Icon from "../Icon";
import styled from "styled-components/macro";

const PlaceholderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  background-color: var(--color-grey-1);

  & svg {
    fill: var(--color-grey-3);
    width: 10rem;
    height: 10rem;
  }
`;

function PlaceholderImage({ className }) {
  return (
    <PlaceholderWrapper className={className}>
      <Icon type="icon-user" />
    </PlaceholderWrapper>
  );
}

export default PlaceholderImage;
