import { types } from '../types';

const todoAppReducer = (state = [], action) => {
  switch (action.type) {
    case types.addTodo:
      return [action.payload, ...state];

    case types.toggleTodoCompleted:
      const todoListChanged = state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

      return todoListChanged;

    case types.deleteTodo:
      const todoListFiltered = state.filter(
        (todo) => todo.id !== action.payload
      );

      return todoListFiltered;

    default:
      return state;
  }
};

export default todoAppReducer;
