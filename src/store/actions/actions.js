import axios from "axios";

const SW_API = 'https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/all.json';

export const ACTIONS = {
    GET_PEOPLE: 'get',
    FILTER_PEOPLE: 'filter',
    INFO_PERSON: 'info',
    INFO_PERSON_SAVED: 'infoSaved',
    SAVE_PERSON: 'save',
    REMOVE_SAVED_PERSON: 'remove',
    FILTER_SAVED_PERSON: 'filterSavedPerson',
}

export const getPeopleAction = person => {
    return {
        type: ACTIONS.GET_PEOPLE,
        payload: person,
    }
}

export const getPeople = () => {
    return dispatch => {

        axios.get(SW_API).then(thePersons => dispatch(getPeopleAction(thePersons.data)))
            .catch(err => console.log(err));
    }
}

export const filterPeople = ({ target: { value } }) => {
    return {
        type: ACTIONS.FILTER_PEOPLE,
        payload: value,
    }
}

export const infoPerson = index => {
    return {
        type: ACTIONS.INFO_PERSON,
        payload: index,
    }
}

export const infoPersonSaved = index => {
    return {
        type: ACTIONS.INFO_PERSON_SAVED,
        payload: index,
    }
}

export const savePerson = index => {
    return {
        type: ACTIONS.SAVE_PERSON,
        payload: index,
    }
}


export const removePerson = index => {
    return {
        type: ACTIONS.REMOVE_SAVED_PERSON,
        payload: index,
    }
}

export const filterSavedPersons = gender => {
    return {
        type: ACTIONS.FILTER_SAVED_PERSON,
        payload: gender,
    }
}