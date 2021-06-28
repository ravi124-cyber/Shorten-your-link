import styled from "styled-components";

/*
  Aliases
  padding - pd
  background-color: bgColor
*/ 

const Button = styled.button`
  //padding
  ${props => {
    if(props.pd) return `padding: ${props.pd}`
  }}

  //margin

  ${props => {
    if(props.mg) return `margin: ${props.mg}`
  }}

  //background-color
  background-color
  ${props => {
    if(props.bgColor) return `background-color: ${props.bgColor}`
  }}
  //color
  
  ${props => {
    if(props.color) return `color: ${props.color}`
  }}
`;

export default Button;