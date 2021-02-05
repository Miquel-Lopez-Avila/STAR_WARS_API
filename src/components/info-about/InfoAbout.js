import React from 'react';
import { connect } from 'react-redux';
import { SearchWrapper, Img, ParagraphStyle, TitleStyle } from "./info.styled";

const InfoAbout = ({ personInfo }) => {




    const view = personInfo.length === 1 ?
        <div>
            <Img src={personInfo[0].image}></Img>
            <TitleStyle>{personInfo[0].name}</TitleStyle>
            <ParagraphStyle><strong>Mass: </strong>{personInfo[0].mass}</ParagraphStyle>
            <ParagraphStyle><strong>Hair Color: </strong>{personInfo[0].hairColor}</ParagraphStyle>
            <ParagraphStyle><strong>Skin Color: </strong>{personInfo[0].skinColor}</ParagraphStyle>
            <ParagraphStyle><strong>Eye Color: </strong>{personInfo[0].eyeColor}</ParagraphStyle>
            <ParagraphStyle><strong>Born: </strong>{personInfo[0].born}</ParagraphStyle>
            <ParagraphStyle><strong>Gender: </strong>{personInfo[0].gender}</ParagraphStyle>
        </div>
        : <ParagraphStyle>Choose some Person...</ParagraphStyle>


    return (
        <SearchWrapper>
            <TitleStyle>Information About...</TitleStyle>
            {view}
        </SearchWrapper>
    )
}

const mapStateToProps = state => {
    return {
        personInfo: state.info_Person,
    };
}

export default connect(mapStateToProps, null)(InfoAbout);