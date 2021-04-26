import { useEffect, useReducer } from 'react';

import todoAppReducer from '../reducer/todoAppReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodoList = () => {
  const [todos, dispatch] = useReducer(todoAppReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return {
    todos,
    dispatch,
  };
};
