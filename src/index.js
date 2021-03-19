import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import {Provider} from 'react-redux';

import App from './containers/App'
import { searchRobots, requestRobots } from './reducers';
import thunkMiddleware from 'redux-thunk'
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';

const logger= createLogger()

const rootReducer = combineReducers({searchRobots, requestRobots})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))


ReactDOM.render(
  <React.StrictMode> 
    <Provider store={store}>
      <App />  
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
