import React from 'react';
import { Td, Button } from "./List.styled";

const List = ({ name, gender, birth_year, eye_color, showDetails, saveThePerson }) => {
    return (
        <tr>
            <Td>{name}</Td>
            <Td>{gender}</Td>
            <Td>{birth_year}</Td>
            <Td>{eye_color}</Td>
            <Td><Button onClick={showDetails}>Show details</Button><Button onClick={saveThePerson}>Save</Button></Td>
        </tr>
    )
}

export default List;
