import React from 'react';
import styled from "styled-components";
// import Icon from '../../Shared/Icon';
import brands from "../../Assets/icon-brand-recognition.svg"
// import detailed from "../../Assets/icon-detailed-records.svg"
// import fully from "../../Assets/icon-fully-customizable.svg"


const CardWrapper = styled.div`
  width:32%;
  background-color: white;
  height: auto;
  padding: 0px 20px;
  padding-bottom: 30px;
  z-index: 10;
  text-align: left;


  @media (min-width: 375px) {
    ${props => {
    switch (props.position) {
      case "top": 
        return `align-self: flex-start`;
      case "center": 
        return `align-self: center`;
      case "bottom": 
        return `align-self: flex-end`;
      
        default: 
          return 0;
    }
  }}
  }
  

  @media (max-width: 375px) {
    width: 100%;
    margin-bottom: 50px;
    text-align: center;
  }

`;

const Motif = styled.div`
  width: 70px;
  height: 70px;
  border-radius:50%;
  display: flex;
  align-items : center;
  justify-content: center;
  position:relative;
  bottom: 35px;
  background: url(${props => props.Img});
  background-color: ${props => props.theme.Dark_Violet};
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 786px) {
    width: 70px;
  height: 70px;
  }

  @media  (max-width: 375px) {
    margin: 0 auto;
  }
`;



const Title = styled.h3`
  color: ${props => props.theme.Very_dark_Blue};

  @media (max-width: 786px) {
    font-size: 1em;
  }

  @media (max-width: 375px) {
    margin-bottom: 10px;
  }
`;


const Text = styled.p`
  color: ${props => props.theme.Gray};

  @media (max-width: 786px) {
    font-size: 0.8em;
  }
`;


const Card = ({text, title, position}) => {
  return ( 
    <CardWrapper position={position}>
      <Motif Img={brands}>
      </Motif>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </CardWrapper>
   );
}
 
export default Card;

