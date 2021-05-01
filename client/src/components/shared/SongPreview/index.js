import React, { useEffect, useContext } from "react";
import styled from "styled-components/macro";
import Icon from "components/shared/Icon";
import { AudioContext } from "store/AudioContext";
import Loader from "components/shared/Loader";
import theme from "styles/theme";

const Preview = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;

  &:hover button {
    ${({ type }) =>
      type === "rounded" &&
      `background-color: var(--color-spotify-logo-green);
    transform: translateY(-2px);`}
  }
`;

const PlayControlButton = styled.button`
  width: 100%;
  height: 100%;
  height: 4.5rem;
  width: 4.5rem;

  aspect-ratio: 1/1;
  background-color: ${({ type }) =>
    type === "rounded" ? "var(--color-spotify-green)" : "transparent"};

  outline: 0;
  border: 0;
  cursor: pointer;
  border-radius: 50%;

  transition: all 0.3s ease;

  /* @media ${theme.bp.mobileM} {
    height: 3.5rem;
    width: 3.5rem;
  } */

  &:hover {
    & svg {
      ${({ type }) => type === "bar" && "fill: var(--color-spotify-green)"}
    }
  }

  & svg {
    transition: all 0.2s ease-out;
    margin-top: 4px;
    height: 2rem;
    width: 2rem;
    fill: ${({ type }) =>
      type === "rounded" ? "var(--color-white)" : "var(--color-grey-6)"};
  }
`;

const ProgressBarWrapper = styled.div`
  height: 5px;
  min-width: 7rem;

  border: 1px solid var(--color-grey-3);
  border-radius: 20px;
  overflow: hidden;

  @media ${theme.bp.mobileM} {
    display: none;
  }
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

function SongPreview({
  previewURL,
  progressBar = true,
  className,
  type = "bar",
}) {
  let {
    currentSrc,
    isPlaying,
    readyState,
    audioSetter,
    audioStopper,
  } = useContext(AudioContext);

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
    <Preview className={className} type={type}>
      <PlayControlButton
        onClick={() =>
          curPreviewIsPlaying || curPreviewIsLoading
            ? audioStopper()
            : audioSetter(previewURL)
        }
        type={type}
      >
        {curPreviewIsLoading ? (
          <Loader />
        ) : (
          <Icon type={curPreviewIsPlaying ? "icon-stop" : "icon-play"} />
        )}
      </PlayControlButton>

      {progressBar && (
        <ProgressBarWrapper>
          <ProgressBar isPlaying={curPreviewIsPlaying} />
        </ProgressBarWrapper>
      )}
    </Preview>
  );
}

export default SongPreview;
