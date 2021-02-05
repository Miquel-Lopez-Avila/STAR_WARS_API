import React from 'react'
import { Img, Name, UserSaved, Button } from "./showPeopleSaved.styled";

const ShowPeopleSaved = ({ img, name, info, remove }) => {
    return (
        <UserSaved>
            <Img src={img}></Img>
            <Name>{name}</Name>
            <Button onClick={info}>Show Details</Button>
            <Button onClick={remove}>Remove</Button>
        </UserSaved>
    )
}

export default ShowPeopleSaved;
