import React, { useEffect, useContext } from "react";
import styled from "styled-components/macro";
import Icon from "components/shared/Icon";
import { AudioContext } from "store/AudioContext";
import Loader from "components/shared/Loader";
import theme from "styles/theme";

const Preview = styled.div`
  display: flex;
  gap: 0.3rem;

  justify-content: center;
  align-items: center;
  align-self: stretch;
  min-width: 10rem;

  @media ${theme.bp.mobileM} {
    min-width: 50px;
  }
`;

const ProgressBarWrapper = styled.div`
  height: 5px;
  width: 100%;
  max-width: 120px;

  border: 1px solid var(--color-grey-3);
  border-radius: 20px;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  height: 100%;
  background-color: var(--color-spotify-green);
  width: 0;
  transition: all 0.3s ease-out;
  ${({ isPlaying }) =>
    isPlaying &&
    `
      width: 100%;
      transition: all 30s linear;
  `}
`;

const PlayControlButton = styled.button`
  height: 3rem;
  width: 3rem;
  background-color: transparent;
  outline: 0;
  border: 0;
  cursor: pointer;

  &:hover {
    & svg {
      fill: var(--color-spotify-green);
    }
  }

  & svg {
    transition: all 0.2s ease-out;
    margin-top: 4px;
    height: 1.6rem;
    width: 1.6rem;
    fill: var(--color-grey-6);
  }
`;

function SongPreview(props) {
  let {
    currentSrc,
    isPlaying,
    readyState,
    audioSetter,
    audioStopper,
  } = useContext(AudioContext);

  const previewURL = props.previewURL;
  const curPreviewIsActive = currentSrc === previewURL;
  const curPreviewIsPlaying = curPreviewIsActive && isPlaying;
  const curPreviewIsLoading =
    curPreviewIsActive && !curPreviewIsPlaying && readyState !== 4;

  useEffect(() => {
    return () => {
      return curPreviewIsPlaying && audioStopper();
    };
  }, [curPreviewIsPlaying, audioStopper]);

  return (
    <Preview>
      <PlayControlButton
        onClick={() =>
          curPreviewIsPlaying
            ? audioStopper(previewURL)
            : audioSetter(previewURL)
        }
      >
        {curPreviewIsLoading ? (
          <Loader />
        ) : (
          <Icon type={curPreviewIsPlaying ? "icon-stop" : "icon-play"} />
        )}
      </PlayControlButton>

      <ProgressBarWrapper>
        <ProgressBar isPlaying={curPreviewIsPlaying} />
      </ProgressBarWrapper>
    </Preview>
  );
}

export default SongPreview;
