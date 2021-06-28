import React from 'react';
import styled from "styled-components";

import logo from "../Assets/logo.svg";


const NavContainer = styled.header`
  width: 100%;
  padding: 0;
  height: auto;
`;

const NavInner = styled.div`
  width: 70%;
  height: auto;
  padding: 20px 0px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 786px) {
    width: 100%;
  }
`;

const NavSection =  styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 786px) {
    padding: 0px 10px;  
  }
`;

const Logo = styled.img.attrs(props => ({
  src: props.Img,
}))`
  margin-right: 1em;

  @media (max-width: 680px) {
    width: 100px;
  }
`;

const NavItem = styled.li`
  color: ${props => props.theme.Gray};
  list-style-type: none;
  margin: 0 0.8em;
  font-weight: 600;

  cursor: pointer;

  &:hover {
    color: ${props => props.theme.Very_dark_violet};
  }

  @media (max-width: 680px) {
    font-size: 0.8em;
  }
  @media (max-width: 375px) {
    display: none;
  }

  ${props => {
    if(props.type === "button"){
      return `
      background-color: ${props.theme.Cyan};
      color: white;
      padding: 8px 15px;
      border-radius: 25px;

      &:hover {
        color: white;
      }
      ` 
    }
  }}
`;

const BurgerNav = styled.img.attrs({
  src: `https://img.icons8.com/ios-filled/50/000000/menu-rounded.png`,
})`

  display: none;

  width: 30px;
  @media (max-width: 375px){
    display: block;
  }
`;
const Nav = (props) => {
  return ( 
    <NavContainer>
      <NavInner>

        <NavSection>
          <Logo Img={logo}/>
            
            <NavItem>Features</NavItem>
            <NavItem>Pricing</NavItem>
            <NavItem>Resources</NavItem>

        </NavSection>

        <NavSection>

          <NavItem>Login</NavItem>
          <NavItem
            type="button"
          >
              Signup
          </NavItem>
          
          <BurgerNav/>
        </NavSection>

      </NavInner>
    </NavContainer>
   );
}
 
export default Nav;