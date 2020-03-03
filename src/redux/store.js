import {applyMiddleware, createStore} from 'redux';

import logger from 'redux-logger';
import notesReducer from './reducer/notesReducer';

const store = createStore(notesReducer, applyMiddleware(logger));

export default store;
