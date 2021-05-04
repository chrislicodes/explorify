import React from "react";
import styled from "styled-components/macro";
import Slider from "../Slider";

const FormHeader = styled.div`
  margin-bottom: 4rem;
`;
const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const FormWrapper = styled.form`
  margin-right: 4rem;
`;

function PlaylistForm({ changeHandler, sliderValues }) {
  return (
    <FormWrapper>
      <FormHeader>
        <input type="text" placeholder="Playlist Name" />
        {/* <input type="checkbox" />
        <span></span> */}
        <button>Create Playlist</button>
      </FormHeader>
      <FormBody>
        {/* <input type="number" min="10" max="100" value="10" /> */}
        <Slider
          id="popularity"
          title="Popularity"
          minValue={Number(sliderValues.popularity[0])}
          maxValue={Number(sliderValues.popularity[1])}
          minLabel="Small Club"
          maxLabel="Stadium"
          changeHandler={changeHandler}
        />
        <Slider
          id="valence"
          title="Mood"
          minValue={Number(sliderValues.valence[0])}
          maxValue={Number(sliderValues.valence[1])}
          minLabel="Downer"
          maxLabel="Upper"
          changeHandler={changeHandler}
        />
        <Slider
          id="energy"
          title="Energy"
          minValue={Number(sliderValues.energy[0])}
          maxValue={Number(sliderValues.energy[1])}
          minLabel="Chill"
          maxLabel="Energetic"
          changeHandler={changeHandler}
        />
        <Slider
          id="tempo"
          title="Tempo"
          minValue={Number(sliderValues.tempo[0])}
          maxValue={Number(sliderValues.tempo[1])}
          minLabel="Slow"
          maxLabel="Fast"
          changeHandler={changeHandler}
        />
        <Slider
          id="acousticness"
          title="Acousticness"
          minValue={Number(sliderValues.acousticness[0])}
          maxValue={Number(sliderValues.acousticness[1])}
          minLabel="Digital"
          maxLabel="Analog"
          changeHandler={changeHandler}
        />
        <Slider
          id="danceability"
          title="Danceability"
          minValue={Number(sliderValues.danceability[0])}
          maxValue={Number(sliderValues.danceability[1])}
          minLabel="Difficult"
          maxLabel="Easy"
          changeHandler={changeHandler}
        />
      </FormBody>
    </FormWrapper>
  );
}

export default PlaylistForm;
