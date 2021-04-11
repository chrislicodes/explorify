import React from "react";
import ReactLoaderSpinner from "react-loader-spinner";
import styled from "styled-components/macro";

const StyledLoader = styled.div`
  & svg {
    height: 5.5rem;
    width: 5.5rem;
    fill: ${(props) => props.fillColor || "var(--color-grey-6)"};
  }
`;

const Loader = (props) => {
  const { height, width, visible, className, fillColor } = props;

  return (
    <StyledLoader className={className} fillColor={fillColor}>
      <ReactLoaderSpinner
        type="Audio"
        height={height ? height : null}
        width={width ? width : null}
        visible={visible ? visible : true}
      />
    </StyledLoader>
  );
};

export default Loader;
