import { createStore, combineReducers } from 'redux';
import mainReducer from './mainReducer';
import viewReducer from './viewReducer';

const store = createStore(
   combineReducers({ mainData: mainReducer, viewData: viewReducer }),
);

export default store;