import HeaderComponents from "components/templates/AppTemplate/HeaderComponents";
import React from "react";
import styled from "styled-components/macro";
import SongPreview from "components/shared/SongPreview";

const Container = styled.div`
  height: 200px;
  width: 200px;
`;

function Discover() {
  return (
    <Container>
      <SongPreview
        previewURL="https://p.scdn.co/mp3-preview/a3b46ef4e57d571245049aeaadd5592394c031e2?cid=fa9c6d07861f4e3a900bac5c181ecf4e"
        progressBar={false}
        type="rounded"
      />
    </Container>
  );
}

export default Discover;
