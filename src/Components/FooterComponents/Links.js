import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  height: auto;

  @media (max-width: 786px) {
    padding-bottom: 20px;
  }
  
  @media (max-width: 375px) {
    flex-direction: column;
    padding-bottom: 0px;
  }
`;

const Section = styled.div`
  width: 100%;
  text-align: right;

  @media (max-width: 786px) {
    text-align: center;
  }
`;

const Title = styled.h5`
  color: white;
  font-size: 1.4em;
  

  @media (max-width: 300px) {
    margin: 10px 0px;
    text-align: center;
  }

`;

const LinkItem = styled.li`
  cursor: pointer;
  list-style-type: none;
  color: ${props => props.theme.Gray};
  font-size: 0.8em;
  margin: 8px 0px;

  &:hover {
    color: ${props => props.theme.Cyan};
  }
`;

const Links = () => {
  return ( 
    <Wrapper>
      <Section>
        <Title>Features</Title>
        <LinkItem>Link Shortening</LinkItem>
        <LinkItem>Branded Links</LinkItem>
        <LinkItem>Analytics</LinkItem>
      </Section>
      <Section>
        <Title>Resources</Title>
        <LinkItem>Blog</LinkItem>
        <LinkItem>Developers</LinkItem>
        <LinkItem>Support</LinkItem>
      </Section>
      <Section>
        <Title>Company</Title>
        <LinkItem>About</LinkItem>
        <LinkItem>Our Team</LinkItem>
        <LinkItem>Careers</LinkItem>
        <LinkItem>Contact</LinkItem>
      </Section>
    </Wrapper>
   );
}
 

export default Links;