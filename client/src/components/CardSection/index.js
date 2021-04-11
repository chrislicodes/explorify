import React from "react";
import CardContainer from "./CardContainer";
import SectionTemplate from "components/SectionTemplate";
import CardItem from "./CardItem";
import Loader from "components/Loader";

const CardSection = ({ data, type, title, link = "/" }) => {
  const content = data.map((item) => (
    <li key={item.id}>
      <CardItem data={item} type={type} />
    </li>
  ));

  return (
    <>
      <SectionTemplate headline={title || "Section"} link={link}>
        <CardContainer>{content || <Loader />}</CardContainer>
      </SectionTemplate>
    </>
  );
};

export default CardSection;
