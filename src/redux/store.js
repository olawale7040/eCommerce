import {createStore, applyMiddleware} from 'redux';
import rooReducer from './root-reducer';
import logger from 'redux-logger';

const middleware = [logger];

const store = createStore(rooReducer,applyMiddleware(...middleware));

export default store;