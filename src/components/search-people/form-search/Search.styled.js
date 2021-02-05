import styled from 'styled-components';

export const SearchWrapper = styled.div` 
  background-color:white;
  max-width: 100%;
  margin-right: 20px;
  @media (max-width: 1150px){
    margin-right: 0px;
  }
`;

export const SearchAlign = styled.div` 
  margin-left: 50px;
  padding:10px;
`;

export const TableWrapper = styled.div` 
  padding:10px;
`;


export const Title = styled.h1` 
  margin:0;
  color:black;
  margin-bottom: 10px;
`;

export const Table = styled.table` 
  color:black;
  text-align:center;
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 90%;
  margin:auto;
  
  tr:nth-child(even) {
  background-color: #dddddd;
  }

  th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
`;

export const Button = styled.button` 
  color:white;
  border: none;
  background-color: #226bb1;
  border-radius: 3px;
  padding: 7px;
`;

export const InputSearch = styled.input` 
  padding:5px;
  margin-right: 3px;
`;