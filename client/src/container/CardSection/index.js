import React from "react";
import CardContainer from "./CardContainer";
import SectionTemplate from "components/templates/SectionTemplate";
import CardItem from "../../components/items/CardItem";
import Loader from "components/shared/Loader";

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
