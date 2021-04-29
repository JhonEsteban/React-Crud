import { types } from '../types';

const todoAppReducer = (state = [], action) => {
  switch (action.type) {
    case types.addTodo:
      return [action.payload, ...state];

    default:
      return state;
  }
};

export default todoAppReducer;
