import React from 'react';
import styled from 'styled-components';
import illustration from  "../Assets/illustration-working.svg";

const Container =  styled.div`
  width: 100%;
  height:auto;
  display: grid;
  padding-bottom: 100px;
  grid-template-columns: 50% 50%;

  @media (max-width: 375px) {
    grid-template-columns: 100%;
  }
`;

const Section = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 120px 20px;

  ${props => {
    if(props.Img) return `background-image: url(${props.Img})
    
    `
  }}

  //Hero

  ${props => {
    if(props.type === "hero") {
      return `
      display: flex;
      justify-content: flex-end;
      background-size: none;
    `
    }
  }}
`;
export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

const Wrapper = styled.div`
  display: flex;
   flex-direction: column;
  width: 70%;
  padding-top: 100px;
  text-align: left;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

const Heading =  styled.h1`
@media screen and (max-width: 650px) {
  width: 100%;
}
  font-size: 4em;
  font-weight: 700;
  color: ${props => props.theme.Very_dark_violet};
`;

const Description = styled.p`
  width: fit-content;
  color: ${props => props.theme.Gray};
`;

const Button = styled.button`
  cursor: pointer;
  background-color: ${props =>  props.theme.Cyan};
  color: white;
  font-size: 1em;
  font-weight: 600;

  width: max-content;
  border: none;
  border-radius: 15px;
  outline :  none;
  padding: 10px 30px;
  margin-top:20px;
`;
const Hero = () => {
  return ( 
    <Container>
      <Section type="hero">
        <Wrapper>
          <Heading>More than just shorter links</Heading>
          <Description>Build your brand recognition and get detailed insights on how your links are performing</Description>
          <Button>Get Started</Button>
        </Wrapper>
      </Section>

      <Section Img={illustration} />

    </Container>
   );
}
 
export default Hero;