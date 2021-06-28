import React from 'react';
import styled from "styled-components";

import bgDesktop from "../Assets/bg-boost-desktop.svg";
import bgMobile from "../Assets/bg-boost-mobile.svg";

const CTA = styled.div`
width: 100%;
min-height: 300px;
background: url(${props =>  props.ImageDesktop});
background-color: ${props => props.theme.Dark_Violet};
background-size: cover;
background-position: center;
background-repeat: no-repeat;

display: flex;
align-items: center;
`;

const Body = styled.div`
  margin: 0 auto;
`;

const Heading = styled.h1`
  color: white;
  font-size: 2.5em;

  @media (max-width: 375px) {
    font-size: 1.5em;
  }
`;

const CTAButton = styled.button`
  background-color: ${props => props.theme.Cyan};
  color: white;

  margin-top: 20px;
  font-weight: 600;
  font-size: 1em;

  outline: none;
  border: none;
  border-radius: 25px;
  padding: 0.8em 2em;
  cursor: pointer;
`;

const CallToAction = () => {
  return ( 
    <CTA ImageDesktop={bgDesktop} ImageMobile={bgMobile}>
      <Body>
        <Heading>Boost your links today</Heading>
        <CTAButton>Get Started</CTAButton>
      </Body>
    </CTA>
   );
}
 

export default CallToAction;