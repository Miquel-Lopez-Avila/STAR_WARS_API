import React from 'react';
import { connect } from 'react-redux';
import ShowPeopleSaved from "./showPeopleSaved/showPeopleSaved";
import { removePerson, infoPersonSaved, filterSavedPersons } from "../../store/actions/actions";
import { SaveWrapper, Title, PeopleSavedContainer, ParagraphStyle, ButtonsContainer, Button, Error } from "./savePeople.styled";

const SavePeople = ({ personsSaved, showInformation, deleteSavedPerson, filterSavedPerson, error }) => {

    const showError = error ? <Error>No hay nigun personaje guardado del genero seleccionado!</Error> : null;

    const view = personsSaved.length >= 1 ?
        <div>
            <ButtonsContainer>
                <Button onClick={() => filterSavedPerson('All')}>All</Button>
                <Button onClick={() => filterSavedPerson('male')}>Male</Button>
                <Button onClick={() => filterSavedPerson('female')}>Female</Button>
            </ButtonsContainer>
            <PeopleSavedContainer>
                {personsSaved.map((thePerson, index) =>
                    <ShowPeopleSaved
                        img={thePerson.image}
                        name={thePerson.name}
                        info={() => showInformation(index)}
                        remove={() => deleteSavedPerson(index)} />)}
            </PeopleSavedContainer>
        </div>
        : <ParagraphStyle>Choose some Person...</ParagraphStyle>;

    return (
        <SaveWrapper>
            <Title>Saved People</Title>
            {showError}
            {view}
        </SaveWrapper>
    )
}

const mapStateToProps = state => {
    return {
        personsSaved: state.filtered_Saved_Person,
        error: state.error
    };
}

const mapDispatchToProps = dispatch => {
    return {
        showInformation: (index) => dispatch(infoPersonSaved(index)),
        deleteSavedPerson: (index) => dispatch(removePerson(index)),
        filterSavedPerson: (gender) => dispatch(filterSavedPersons(gender)),
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(SavePeople);