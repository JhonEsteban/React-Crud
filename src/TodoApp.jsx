import React, { useState } from 'react';

import TodoAppContext from './context/TodoAppContext';
import { useTodoList } from './hooks/useTodoList';

import TodoAppRouter from './router/TodoAppRouter';

const initialUser = {
  name: '',
  isLogged: false,
};

const TodoApp = () => {
  const [user, setUser] = useState(initialUser);
  const { todos, dispatch } = useTodoList();

  return (
    <TodoAppContext.Provider value={{ user, setUser, todos, dispatch }}>
      <TodoAppRouter />
    </TodoAppContext.Provider>
  );
};

export default TodoApp;
