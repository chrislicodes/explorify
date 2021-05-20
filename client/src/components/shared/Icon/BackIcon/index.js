import styled from "styled-components/macro";
import Icon from "components/shared/Icon";
import { useHistory, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const StyledBackIcon = styled(Icon)`
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  cursor: pointer;
  height: 100%;

  &:hover svg {
    fill: var(--color-spotify-logo-green);
  }

  & svg {
    height: 100%;
    width: 4rem;
    transition: 0.3s;
    fill: var(--color-spotify-green);
  }
`;

const regex = new RegExp("/explore/\\w+");

function BackIcon() {
  const history = useHistory();
  const location = useLocation();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (regex.test(location.pathname)) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [location]);

  return (
    <>
      <StyledBackIcon
        type="icon-circle-left"
        onClick={() => {
          history.goBack();
        }}
        isVisible={isVisible}
      />
    </>
  );
}

export default BackIcon;
