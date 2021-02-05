import React from 'react';
import { connect } from 'react-redux';
import { SearchWrapper, SearchAlign, TableWrapper, Title, Table, Button, InputSearch } from "./Search.styled";
import List from "../list-search/List";
import { filterPeople, infoPerson, savePerson } from "../../../store/actions/actions";

const Search = ({ peopleFilteredDispatch, showInformation, savePerson, peopleFilteredState }) => {

    return (
        <SearchWrapper>
            <SearchAlign>
                <Title>Search people</Title>
                <InputSearch type='text' placeholder='Search' onChange={(event) => peopleFilteredDispatch(event)} />
                <Button>Search</Button>
            </SearchAlign>
            <TableWrapper>
                <Table>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Born</th>
                        <th>Eye color</th>
                        <th>Buttons</th>
                    </tr>
                    {peopleFilteredState.map((thePerson, index) =>
                        <List
                            name={thePerson.name}
                            gender={thePerson.gender}
                            birth_year={thePerson.born}
                            eye_color={thePerson.eyeColor}
                            showDetails={() => showInformation(index)}
                            saveThePerson={() => savePerson(index)} />)}

                </Table>
            </TableWrapper>
        </SearchWrapper>
    )
}

const mapStateToProps = state => {
    return {
        peopleFilteredState: state.filtered_People,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        peopleFilteredDispatch: (event) => dispatch(filterPeople(event)),
        showInformation: (index) => dispatch(infoPerson(index)),
        savePerson: (index) => dispatch(savePerson(index)),
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Search);