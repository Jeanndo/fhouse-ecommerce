import 'dotenv/config';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import { initialState } from './initialState';
import reducers from './reducers';

export const middlewares = [thunk];

export default createStore(
    combineReducers(reducers),
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
);

