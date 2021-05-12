import React from "react";
import styled from "styled-components/macro";

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem 0;
  border: 1px solid var(--color-grey-3);

  & > * {
    text-align: center;
  }
`;

const Item = styled.div`
  font-size: var(--font-size-4);
  font-weight: 500;
`;

const FieldName = styled.h2`
  color: var(--color-grey-5);
  font-size: var(--font-size-3);
  font-weight: 400;
`;

function index({ item, fieldName }) {
  return (
    <InfoItem>
      <Item>{item}</Item>
      <FieldName>{fieldName}</FieldName>
    </InfoItem>
  );
}

export default index;
