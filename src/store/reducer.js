import { ACTIONS } from "./actions/actions";

const initialState = {
    all_People: [],
    filtered_People: [],
    saved_People: [],
    info_Person: [],
    filtered_Saved_Person: [],
    error: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case ACTIONS.GET_PEOPLE:
            return { ...state, ['all_People']: action.payload };

        case ACTIONS.FILTER_PEOPLE:
            if(action.payload === '') return { ...state, ['filtered_People']: [] };
            
            const reg = new RegExp(action.payload, 'gi');
            const peopleToFilter = [...state.all_People];
            const filteredPeople = peopleToFilter.map(thePerson => thePerson.name.match(reg) ? thePerson : null);
            const filteredPeopleNoNull = filteredPeople.filter(person => person !== null);

            return { ...state, ['filtered_People']: filteredPeopleNoNull };

        case ACTIONS.INFO_PERSON:
            const people = [...state.filtered_People];
            const index = action.payload;
            const infoPerson = people.filter((PersonToShow, indexPersons) => indexPersons === index);

            return { ...state, ['info_Person']: infoPerson };

        case ACTIONS.INFO_PERSON_SAVED:
            const peopleSaved = [...state.filtered_Saved_Person];
            const indexToShow = action.payload;
            const infoPersonSaved = peopleSaved.filter((PersonToShow, indexPersons) => indexPersons === indexToShow);

            return { ...state, ['info_Person']: infoPersonSaved };

        case ACTIONS.SAVE_PERSON:
            const savedPersons = [...state.saved_People];
            const peopleFilter = [...state.filtered_People];
            const indexToSave = action.payload;
            const saveCollection = peopleFilter.filter((PersonToSave, indexPersons) => indexPersons === indexToSave);
        
            let repeated = false;
            savedPersons.length >= 1 && savedPersons.forEach(thePersonsSaved => {
                if(saveCollection[0].id === thePersonsSaved.id) {
                    repeated = true;
                }
             
            });
             if(repeated)return {...state};
             savedPersons.push(...saveCollection);
             const savingPeopleToBeFiltered = { ...state, ['filtered_Saved_Person']: savedPersons }
             return { ...savingPeopleToBeFiltered, ['saved_People']: savedPersons };

        case ACTIONS.REMOVE_SAVED_PERSON:
            const allPersonsSaved = [...state.saved_People];
            const indexToRemove = action.payload;
            const removeFromSaveCollection = allPersonsSaved.filter((PersonToSave, indexPersons) => indexPersons !== indexToRemove);
            const removePeopleFiltered = { ...state, ['filtered_Saved_Person']: removeFromSaveCollection }
            
            return { ...removePeopleFiltered, ['saved_People']: removeFromSaveCollection };

        case ACTIONS.FILTER_SAVED_PERSON:
            const savedPeopleToFilter = [...state.saved_People];
            const gender = action.payload;
            if (gender === 'All') {
                const FilterByAll = { ...state, ['filtered_Saved_Person']: savedPeopleToFilter }
                return { ...FilterByAll, ['error']: false };
            } else {
                const filteredSavedPeople = savedPeopleToFilter.filter(PersonSaved => PersonSaved.gender === gender);
                if (filteredSavedPeople.length === 0) {
                    const allSaved = { ...state, ['filtered_Saved_Person']: savedPeopleToFilter }
                    return { ...allSaved, ['error']: true };
                }
                const FilterByGender = { ...state, ['filtered_Saved_Person']: filteredSavedPeople }
                return { ...FilterByGender, ['error']: false };
            }

        default:
            return state;
    }
}

export default reducer;