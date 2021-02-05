import { useEffect } from "react";
import { connect } from 'react-redux';
import './App.css';
import SearchContainer from './containers/search-container/SearchContainer';
import InfoAbout from "./components/info-about/InfoAbout";
import SavePeople from "./components/saved-people/savePeople";
import { getPeople } from "./store/actions/actions";

const App = ({ getAllPeople }) => {

  useEffect(() => {
    getAllPeople();
  }, []);

  return (
    <div className="App">
      <div className='initialTitles'>
        <h1>Web test</h1>
        <h3>Play with SWAPI</h3>
      </div>
      <div className='page-Wrapper'>
        <div className='containerSearchSave'>
          <SearchContainer />
          <SavePeople />
        </div>
        <div className='containerInfo'>
          <InfoAbout />
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    getAllPeople: () => dispatch(getPeople()),
  };
}

export default connect(null, mapDispatchToProps)(App);
