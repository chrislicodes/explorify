import React from "react";
import { Slider, Rail, Handles, Tracks } from "react-compound-slider";
import styled from "styled-components/macro";

const Title = styled.p`
  color: var(--color-spotify-logo-green);
`;

const Label = styled.p`
  font-weight: bold;
`;

const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const sliderStyle = {
  position: "relative",
  width: "100%",
  height: 40,
  margin: "auto",
};

const SliderWrapper = styled.div`
  --slider-height: 1.3rem;
  --slider-margin-bottom: 7px;
  --slider-border-radius: 5px;
  text-transform: none;
  font-size: var(--font-size-1);
`;

const StyledRail = styled.div`
  position: absolute;
  bottom: 0;
  height: var(--slider-height);
  margin-bottom: var(--slider-margin-bottom);
  background-color: var(--color-grey-3);
  border-radius: var(--slider-border-radius);
  width: 100%;
`;

const TrackWrapper = styled.div``;

const StyledTrack = styled.div`
  position: absolute;
  bottom: 0;
  height: var(--slider-height);
  margin-bottom: var(--slider-margin-bottom);
  background-color: var(--color-spotify-green);
  border-radius: var(--slider-border-radius);
  z-index: 1;
  cursor: pointer;
  left: ${({ source }) => `${source.percent}%`};
  width: ${({ source, target }) => `${target.percent - source.percent}%`};
`;

const HandleWrapper = styled.div``;

const StyledHandle = styled.div`
  left: ${({ percent }) => `${percent}%`};
  position: absolute;
  margin-left: calc(2px - var(--slider-height));
  margin-top: calc(30px - var(--slider-height));
  z-index: 2;
  width: calc(var(--slider-height) + 5px);
  height: calc(var(--slider-height) + 5px);
  border: 0;
  text-align: center;
  cursor: pointer;
  border-radius: 50%;
  background-color: var(--color-grey-4);
  color: var(--color-white);
`;

const HandleLabel = styled.div`
  font-size: var(--font-size-base);
  margin-top: -1.8rem;
`;

export function Handle({ handle: { id, value, percent }, getHandleProps }) {
  return (
    <StyledHandle percent={percent} {...getHandleProps(id)}>
      <HandleLabel>{value}</HandleLabel>
    </StyledHandle>
  );
}

function Track({ source, target, getTrackProps }) {
  return (
    <StyledTrack
      source={source}
      target={target}
      {
        ...getTrackProps() /* this will set up events if you want it to be clickeable (optional) */
      }
    />
  );
}

function OptionSlider({
  id,
  minValue,
  maxValue,
  minLabel,
  maxLabel,
  title,
  changeHandler,
}) {
  return (
    <SliderWrapper id={id}>
      <Title>{title}</Title>
      <Slider
        rootStyle={sliderStyle}
        domain={[0, 100]}
        step={1}
        mode={2}
        values={[minValue, maxValue]}
        onChange={(values) => changeHandler(values, id)}
      >
        <Rail>{({ getRailProps }) => <StyledRail {...getRailProps()} />}</Rail>
        <Handles>
          {({ handles, getHandleProps }) => (
            <HandleWrapper>
              {handles.map((handle) => (
                <Handle
                  key={handle.id}
                  handle={handle}
                  getHandleProps={getHandleProps}
                />
              ))}
            </HandleWrapper>
          )}
        </Handles>
        <Tracks left={false} right={false}>
          {({ tracks, getTrackProps }) => (
            <TrackWrapper>
              {tracks.map(({ id, source, target }) => (
                <Track
                  key={id}
                  source={source}
                  target={target}
                  getTrackProps={getTrackProps}
                />
              ))}
            </TrackWrapper>
          )}
        </Tracks>
      </Slider>
      <LabelWrapper>
        <Label>{minLabel}</Label>
        <Label>{maxLabel}</Label>
      </LabelWrapper>
    </SliderWrapper>
  );
}

export default OptionSlider;
