import React from "react";
import styled from "styled-components/macro";
import Slider from "../Slider";

const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-size-md-1);
`;

const FormWrapper = styled.form``;

function PlaylistForm({ sliderHandler, sliderValues, buttonHandler }) {
  return (
    <FormWrapper>
      <FormBody>
        <Slider
          id="popularity"
          title="Popularity"
          minValue={Number(sliderValues.popularity[0])}
          maxValue={Number(sliderValues.popularity[1])}
          minLabel="Small Club"
          maxLabel="Stadium"
          changeHandler={sliderHandler}
        />
        <Slider
          id="valence"
          title="Mood"
          minValue={Number(sliderValues.valence[0])}
          maxValue={Number(sliderValues.valence[1])}
          minLabel="Downer"
          maxLabel="Upper"
          changeHandler={sliderHandler}
        />
        <Slider
          id="energy"
          title="Energy"
          minValue={Number(sliderValues.energy[0])}
          maxValue={Number(sliderValues.energy[1])}
          minLabel="Chill"
          maxLabel="Energetic"
          changeHandler={sliderHandler}
        />
        <Slider
          id="acousticness"
          title="Acousticness"
          minValue={Number(sliderValues.acousticness[0])}
          maxValue={Number(sliderValues.acousticness[1])}
          minLabel="Digital"
          maxLabel="Analog"
          changeHandler={sliderHandler}
        />
        <Slider
          id="danceability"
          title="Danceability"
          minValue={Number(sliderValues.danceability[0])}
          maxValue={Number(sliderValues.danceability[1])}
          minLabel="Difficult"
          maxLabel="Easy"
          changeHandler={sliderHandler}
        />
      </FormBody>
    </FormWrapper>
  );
}

export default PlaylistForm;
