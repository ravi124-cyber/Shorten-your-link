import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Wrapper = styled.div`
  display: flex;
  width: 70%;
  height: 300px;
  margin: 0 auto;
  padding: 10px 0px;
  justify-content: space-between;


  @media (max-width : 786px) {
    width: 90%;
  }

  @media (max-width : 375px) {
    flex-direction: column;
    height: auto;
  padding: 0px;
  }

`;

const HorizontalLine = styled.div`
  width: 70%;
  height: 10px;
  z-index: 1;
  align-self: center;
  position: absolute;
  background-color: ${(props) => props.theme.Cyan};

  @media  (max-width: 375px) {
    margin: 0 auto;
    width: 10px;
    height: 100%;
  }
`;

const CardsWrapper = () => {
  return (
    <Wrapper>
      <HorizontalLine />
      <Card
        position="top"
        title="Brand Recognition"
        text="
        Boost your brand recognition with one click. Generic links don't mean a thing. Branded links help instil coonfidence in tour content."
      ></Card>
      <Card
        position="center"
        title="Detailed Records"
        text="
      Boost your brand recognition with one click. Generic links don't mean a thing. Branded links help instil coonfidence in tour content."
      ></Card>

      <Card
        position="bottom"
        title="Fully Customizable"
        text="
      Boost your brand recognition with one click. Generic links don't mean a thing. Branded links help instil coonfidence in tour content."
      ></Card>
    </Wrapper>
  );
};

export default CardsWrapper;
