import React, { useContext } from 'react';
import styled from "styled-components";
import { LinkContext } from '../../Context/Context';
import CardsWrapper from './CardsWrapper';
import CardTitle from './CardTitle';
import Results from './Results';


const Container = styled.div`
  width: 100%;
  height: auto;
  padding-top: 80px;
  padding-bottom: 100px;
  background-color: ${props =>  props.theme.Lighter_Gray};
`;


const Description = () => {
  const [links , setLinks] = useContext(LinkContext);  

  return ( 
    <Container>
      {(links.length !== 0) && links.map((link,index) => (
        <Results key={index} index={index} copied={link.copied} original_link={link.original_link} code={link.code} shortLink={link.short_link} />
      ))}
      <CardTitle />
      <CardsWrapper />
    </Container>
   );
}
 
export default Description;