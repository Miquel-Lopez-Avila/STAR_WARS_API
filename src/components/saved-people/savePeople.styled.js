import styled from 'styled-components';

export const SaveWrapper = styled.div` 
  background-color:white;
  max-width: 100%;
  margin-right: 20px;
  margin-top: 20px;
  margin-bottom:20px;
  padding:20px;
  box-sizing:border-box;
  @media (max-width: 1150px){
    margin-right: 0px;
  }
`;

export const PeopleSavedContainer = styled.div` 
  display:flex;
  flex-wrap:wrap;
  @media (max-width: 1150px){
    justify-content:center;
  }
`;

export const Title = styled.h1` 
  color:black;
  margin-bottom:10px;
  margin-left:10px;
`;

export const ParagraphStyle = styled.p` 
  color:black;
`;

export const ButtonsContainer = styled.div` 
  margin: 10px;
  margin-left:10px;
`;

export const Button = styled.button` 
  color:white;
  border: none;
  background-color: #696666;
  border-radius: 3px;
  padding:5px;

`;

export const Error = styled.p` 
  color:red;
  font-weight:bold;
  margin-left: 5px;
`;
