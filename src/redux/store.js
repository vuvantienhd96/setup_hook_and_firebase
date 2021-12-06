import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const middleWare = [thunk]

// check infomation about type and state of redux
if(process.env.NODE_ENV === 'development'){
    middleWare.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middleWare))