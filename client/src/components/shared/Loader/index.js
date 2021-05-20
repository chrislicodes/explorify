import React from "react";
import ReactLoaderSpinner from "react-loader-spinner";
import styled from "styled-components/macro";

const StyledLoader = styled.div`
  flex: 1;
  & svg {
    height: 5.5rem;
    width: 5.5rem;
    fill: ${(props) => props.fillColor || "var(--color-grey-6)"};
  }
`;

const Loader = ({
  height,
  width,
  visible,
  className,
  fillColor,
  type = "Audio",
}) => {
  return (
    <StyledLoader className={className} fillColor={fillColor}>
      <ReactLoaderSpinner
        type={type}
        height={height ? height : null}
        width={width ? width : null}
        visible={visible ? visible : true}
        radius={10}
      />
    </StyledLoader>
  );
};

export default Loader;
