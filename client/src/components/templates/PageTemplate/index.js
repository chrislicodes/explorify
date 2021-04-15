import React from "react";
import styled from "styled-components/macro";

const PageTemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 0 3rem;
  padding-bottom: 3rem;
`;

function PageTemplate({ children }) {
  return <PageTemplateWrapper>{children}</PageTemplateWrapper>;
}

export default PageTemplate;
