import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 100px auto;
  text-align: center;
`;

const Title = styled.h1`
  color: ${props => props.theme.Very_dark_violet};

  @media (max-width: 375px) {
    font-size: 1.8em;
  }
`;

const Description = styled.div`
  width: 50%;
  margin: 0 auto;
  color: ${props => props.theme.Gray};

  @media (max-width: 375px) {
    width: 90%;
    font-size: 1em;
  }
`;
const CardTitle = () => {
  return ( 
    <Container>
      <Title>Advanced Statistics</Title>
      <Description>Track how your links are performing across the web with our advanced statistics dashboard</Description>
    </Container>
   );
}
 
export default CardTitle;