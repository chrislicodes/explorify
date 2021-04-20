import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components/macro";
import Icon from "components/shared/Icon";

const Preview = styled.div`
  display: flex;
  gap: 0.3rem;

  justify-content: center;
  align-items: center;
  align-self: stretch;
  min-width: 10rem;
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

function SongPreview({ previewURL }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState();

  const playPreview = () => {
    setAudio(new Audio(previewURL));
  };

  const stopPreview = () => {
    audio && audio.pause();
    setIsPlaying(false);
  };

  const audioHandler = useCallback(() => {
    audio.play();
    setIsPlaying(true);
  }, [audio]);

  useEffect(() => {
    console.log("SHOTS FIRED");
    audio && audio.addEventListener("canplaythrough", audioHandler);
    audio && audio.addEventListener("ended", () => setIsPlaying(false));
    return () => {
      if (audio) {
        audio.removeEventListener("canplaythrough", audioHandler);
        audio.pause();
      }
    };
  }, [audio, audioHandler]);

  return (
    <Preview>
      <PlayControlButton onClick={isPlaying ? stopPreview : playPreview}>
        <Icon type={isPlaying ? "icon-stop" : "icon-play"} />
      </PlayControlButton>

      <ProgressBarWrapper>
        <ProgressBar isPlaying={isPlaying} />
      </ProgressBarWrapper>
    </Preview>
  );
}

export default SongPreview;
