import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components/macro";

const ProgressBar = styled.div`
  height: 5px;
  width: 100%;
  max-width: 120px;

  border: 1px solid var(--color-grey-3);
  border-radius: 20px;
  overflow: hidden;

  & div {
    height: 100%;
    background-color: var(--color-spotify-green);
    width: 0;
    transition: all 0.3s ease-out;
  }
`;

const Preview = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;

  ${ProgressBar} div {
    ${({ isPlaying }) =>
      isPlaying &&
      `
    width: 100%;
    transition: all 30s linear;
    
  `}
  }
`;

//TODO: Fix interaction error if user hasnt clicked anywhere, reject audio fetching promise in cleanup, mobile support

function PreviewBar({ previewURL, style }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [audio, setAudio] = useState();

  const audioHandler = useCallback(
    function () {
      if (isHovering) {
        audio.play();
        setIsPlaying(true);
      }
    },
    [isHovering, audio]
  );

  useEffect(() => {
    audio && audio.addEventListener("canplaythrough", audioHandler);
    return () => {
      if (audio) {
        audio.removeEventListener("canplaythrough", audioHandler);
        audio.pause();
      }
    };
  }, [audio, audioHandler]);

  const stopPreview = () => {
    if (audio) {
      audio.pause();
      setIsPlaying(false);
      setIsHovering(false);
    }
  };

  const playPreview = () => {
    setAudio(new Audio(previewURL));
    setIsHovering(true);
  };

  return (
    <Preview
      onMouseEnter={() => playPreview()}
      onMouseLeave={() => stopPreview()}
      isPlaying={isPlaying}
    >
      <p>Preview</p>
      <ProgressBar>
        <div></div>
      </ProgressBar>
    </Preview>
  );
}

export default PreviewBar;
