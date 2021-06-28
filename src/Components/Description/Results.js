import React, { useContext, useEffect, useState } from 'react';
import styled from "styled-components";
import copy from "copy-to-clipboard";  
import { LinkContext } from '../../Context/Context';

const ResultItem = styled.div`
  width: 70%;
  height:fit-content;
  margin : 20px auto;
  padding: 10px 10px;  
  border-radius: 5px;

  background-color: white;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 786px){
    width: 90%;
  }
`;

const Link = styled.div`
    height: auto;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media (max-width: 375px){
    border-bottom: 1px solid ${props => props.theme.Gray};
    width:auto;
    padding : 5px 0px;
  }
`;

const Action = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 375px){
    flex-direction: column;
    width: 100%;

    text-align: left;
  }
`;

const ShortLink = styled.p`
  color: ${props => props.theme.Cyan};

  overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  cursor: pointer;

  @media (max-width: 375px){
    width: 100%;
    margin: 10px 0px;

  }
  `;

const Button = styled.button`
  background-color: ${props => props.theme.Cyan};
  color: white;

  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 8px 15px;
  font-weight: 600;
  margin-left: 10px;

  ${props => {
    if(props.copied) {
      return `background-color: ${props.theme.Dark_Violet};`
    }
  }}

  @media (max-width: 375px){
    width: 100%;
    margin-left: 0px;
    padding: 10px 0px;
    font-size: 1.2em;
  }
`;


const Result = ({index, code, copied,shortLink,original_link}) => {
  const [links , setLinks] = useContext(LinkContext);
  const [Iscopy ,setIsCopy] = useState(false);

  const copyText = () => {
    copy(shortLink);
    let tempArray  = [...links];
    tempArray[index].copied = true;
    setLinks(tempArray);
    setIsCopy(true);
  }
  
  useEffect(() => {
    //Change Copied to False after 5 seconds
    setTimeout(() => {
      let tempArray  = [...links];
      tempArray[index].copied = false;
      setLinks(tempArray);
    }, 5000);
  }, [setLinks]);

  return ( 
    <ResultItem>
      <Link>{original_link}</Link>
      <Action>
        <ShortLink>{shortLink}</ShortLink>
        <Button copied={copied} onClick={() => copyText(shortLink)}>
          {copied ? "Copied!" : "Copy"}
        </Button>
      </Action>
    </ResultItem>
   );
}
 
export default Result;