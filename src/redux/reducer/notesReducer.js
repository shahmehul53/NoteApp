import {ADD_NOTE, DELETE_NOTE} from '../Actions/types';

import remove from 'lodash.remove';

const initialState = [];

function notesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, {id: action.id, note: action.note}];
    case DELETE_NOTE:
      const deleteNewArray = remove(state, obj => {
        return obj.id != action.payload;
      });
      return deleteNewArray;
    default:
      return state;
  }
}

export default notesReducer;
