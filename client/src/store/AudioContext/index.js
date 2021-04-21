import React, { useState, useEffect, useCallback } from "react";

export const AudioContext = React.createContext({
  currentSrc: "",
  isPlaying: false,
  readyState: 0,
  audioSetter: () => {},
  audioStopper: () => {},
});

export const AudioProvider = ({ children }) => {
  const [audio, setAudio] = useState(new Audio());
  const [isPlaying, setIsPlaying] = useState(false);

  //Each component can check if it is currently active
  let currentSrc = audio.src;

  //Each component can determine if it is loading
  let readyState = audio.readyState;

  const audioHandler = useCallback(() => {
    audio.play();
    setIsPlaying(true);
  }, [audio]);

  useEffect(() => {
    if (currentSrc !== "") {
      audio.addEventListener("canplaythrough", audioHandler);
      audio.addEventListener("ended", stopAudio);
    }

    return () => {
      audio.removeEventListener("canplaythrough", audioHandler);
      audio.removeEventListener("ended", stopAudio);
    };
  });

  const playAudio = (previewURL) => {
    audio.pause();
    setIsPlaying(false);
    if (previewURL !== currentSrc) {
      setAudio(new Audio(previewURL));
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  const stopAudio = () => {
    audio.pause();
    setIsPlaying(false);
  };

  useEffect(() => {
    window.addEventListener("blur", stopAudio);

    return () => window.removeEventListener("blur", stopAudio);
  });

  const value = {
    currentSrc,
    isPlaying,
    readyState,
    audioSetter: playAudio,
    audioStopper: stopAudio,
  };

  return (
    <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
  );
};
