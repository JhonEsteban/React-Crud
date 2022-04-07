import { useState } from 'react';

import './assets/styles/TodoApp.scss';

import TodoAppContext from './context/TodoAppContext';

import { useUserSession } from './hooks/useUserSession';
import { useTodoList } from './hooks/useTodoList';

import TodoAppRouter from './router/TodoAppRouter';

const TodoApp = () => {
  const { user, setUser, resetUser } = useUserSession();
  const [todoUpdate, setTodoUpdate] = useState(null);
  const { todos, dispatch } = useTodoList();

  const globalData = {
    user,
    setUser,
    resetUser,
    todoUpdate,
    setTodoUpdate,
    todos,
    dispatch,
  };

  return (
    <TodoAppContext.Provider value={globalData}>
      <TodoAppRouter />
    </TodoAppContext.Provider>
  );
};

export default TodoApp;
