import React, { useState, useEffect } from "react";
import { ResponsiveBar } from "@nivo/bar";
import styled from "styled-components/macro";

const metricDescriptor = {
  acousticness:
    "A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence the track is acoustic.",
  danceability:
    "Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable.",
  energy:
    "Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy.",
  instrumentalness:
    "Predicts whether a track contains no vocals. “Ooh” and “aah” sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly “vocal”. The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0.",
  liveness:
    "Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live. A value above 0.8 provides strong likelihood that the track is live.",
  speechiness:
    "Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value. Values above 0.66 describe tracks that are probably made entirely of spoken words. Values between 0.33 and 0.66 describe tracks that may contain both music and speech, either in sections or layered, including such cases as rap music. Values below 0.33 most likely represent music and other non-speech-like tracks.",
  valence:
    "A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).",
};

const Header = styled.p`
  font-size: var(--font-size-xl);
  font-weight: bold;
`;

const BarChart = ({ data }) => {
  // Workaround for initial animation
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    let animation = setTimeout(() => setChartData(data), 1);

    return () => {
      clearTimeout(animation);
    };
  }, [data]);

  return (
    <>
      <Header>Audio Features</Header>
      <ResponsiveBar
        data={chartData}
        minValue={0}
        maxValue={1}
        theme={{
          axis: {
            textColor: "#eee",
            fontSize: "14px",
            tickColor: "#eee",
            ticks: {
              text: {
                fill: "#eee",
              },
            },
            legend: {
              text: {
                fill: "#aaaaaa",
                fontSize: "18px",
              },
            },
          },
          tooltip: {
            container: {
              background: "#444",
            },
          },
        }}
        keys={["value"]}
        indexBy="metric"
        margin={{ top: 50, right: 0, bottom: 65, left: 60 }}
        padding={0.2}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={[
          "#1e3842a1",
          "#264653a1",
          "#516b75a1",
          "#2a9d8fa1",
          "#179443a1",
          "#1db954a1",
          "#4ac776a1",
        ]}
        colorBy="index"
        borderColor={{ from: "color" }}
        borderWidth="1px"
        axisBottom={{
          tickSize: 5,
          tickPadding: 10,
          tickRotation: -25,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 15,
          tickRotation: 0,
          tickValues: [0, 0.5, 1],
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor="#fff"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        enableGridY={false}
        tooltip={({ value, indexValue, color }) => (
          <div style={{ maxWidth: "30rem" }}>
            <p
              style={{ color, filter: "brightness(200%)", fontSize: "1.6rem" }}
            >
              <strong>
                {indexValue}: {value}
              </strong>
            </p>
            <p style={{ fontSize: "1.3rem" }}>{metricDescriptor[indexValue]}</p>
          </div>
        )}
      />
    </>
  );
};

export default BarChart;
