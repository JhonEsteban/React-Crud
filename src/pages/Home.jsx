import React, { useContext } from 'react';

import TodoAppContext from '../context/TodoAppContext';

import '../assets/styles/pages/Home.scss';

import TodoList from '../components/TodoList';
import { types } from '../types';

const Home = ({ history }) => {
  const { dispatch, resetUser } = useContext(TodoAppContext);

  const createTodo = () => {
    history.push('/createTodo');
  };

  const handleClearTodos = () => {
    dispatch({
      type: types.clearTodos,
    });
  };

  const handleLogout = () => {
    resetUser();
    history.push('/login');
  };

  return (
    <div className='home'>
      <div className='wrapper'>
        <div className='settings'>
          <button onClick={createTodo} className='settings__btn'>
            <span>Crear tarea</span>
            <i className='fas fa-plus'></i>
          </button>
          <button onClick={handleClearTodos} className='settings__btn'>
            <span>Borrar Tareas</span>
            <i className='fas fa-trash'></i>
          </button>
        </div>

        <TodoList />

        <button
          onClick={handleLogout}
          type='button'
          className='btn-logout'
          title='Salir'
        >
          <i className='fas fa-sign-out-alt'></i>
        </button>
      </div>
    </div>
  );
};

export default Home;
