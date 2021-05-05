import React, { useRef } from "react";
import styled from "styled-components/macro";
import Slider from "../Slider";
import Button from "components/shared/Button";

const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  gap: 0.75rem;
`;
const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const FormWrapper = styled.form``;

const StyledButton = styled(Button)`
  height: 4rem;
`;

const StyledInput = styled.input`
  height: 4rem;
`;

function PlaylistForm({ sliderHandler, sliderValues, buttonHandler }) {
  const inputEl = useRef(null);
  return (
    <FormWrapper>
      <FormHeader>
        <StyledInput type="text" placeholder="Playlist Name" ref={inputEl} />
        <StyledButton onClick={(e) => buttonHandler(e, inputEl.current.value)}>
          Create Playlist
        </StyledButton>
      </FormHeader>
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
        {/* <Slider
          id="tempo"
          title="Tempo"
          minValue={Number(sliderValues.tempo[0])}
          maxValue={Number(sliderValues.tempo[1])}
          minLabel="Slow"
          maxLabel="Fast"
          changeHandler={sliderHandler}
        /> */}
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
