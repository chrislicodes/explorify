import React from "react";
import styled from "styled-components/macro";

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-size-sm-1);
  padding: var(--spacing-size-sm-3) 0;
  border: 1px solid var(--color-grey-3);

  & > * {
    text-align: center;
  }
`;

const Item = styled.div`
  font-size: var(--font-size-3);
  font-weight: 500;
`;

const FieldName = styled.h2`
  color: var(--color-grey-5);
  font-size: var(--font-size-2);
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
