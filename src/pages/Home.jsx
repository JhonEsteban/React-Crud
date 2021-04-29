import React, { useContext } from 'react';

import TodoAppContext from '../context/TodoAppContext';

import '../assets/styles/pages/Home.scss';

import TodoList from '../components/TodoList';
import { types } from '../types';

const Home = ({ history }) => {
  const { dispatch } = useContext(TodoAppContext);

  const createTodo = () => {
    history.push('/createTodo');
  };

  const handleClearTodos = () => {
    dispatch({
      type: types.clearTodos,
    });
  };

  return (
    <div className='home'>
      <div className='wrapper'>
        <div className='options'>
          <button onClick={createTodo}>Crear Todo</button>
          <button onClick={handleClearTodos}>Clear Todos</button>
        </div>

        <TodoList />
      </div>
    </div>
  );
};

export default Home;
