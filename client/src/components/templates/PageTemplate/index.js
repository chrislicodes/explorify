import React from "react";
import styled from "styled-components/macro";
import theme from "styles/theme";

const PageTemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-size-lg-2);
  padding: 0 var(--spacing-size-lg-1);
  padding-bottom: var(--spacing-size-lg-1);

  @media ${theme.bp.tabletS} {
    padding: 0 var(--spacing-size-md-1);
  }
`;

function PageTemplate({ children }) {
  return <PageTemplateWrapper>{children}</PageTemplateWrapper>;
}

export default PageTemplate;
