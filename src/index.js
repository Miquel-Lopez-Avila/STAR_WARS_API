import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './App';
import  reducer  from "./store/reducer";

const logger = store => {
    return next => {
        return action => {
            const results = next(action);
            return results;
        }
    }
}

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(logger, thunk)),
    
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
