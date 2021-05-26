import React, { useContext } from 'react';

import '../assets/styles/pages/Home.scss';

import Swal from 'sweetalert2';

import TodoAppContext from '../context/TodoAppContext';
import { types } from '../types';

import { useAlerts } from '../hooks/useAlerts';

import TodoList from '../components/TodoList';

const Home = ({ history }) => {
  const { dispatch, resetUser, todos } = useContext(TodoAppContext);
  const { alertSuccess, alertQuestion, alertError } = useAlerts();

  const createTodo = () => {
    history.push('/createTodo');
  };

  const handleClearTodos = () => {
    if (todos.length > 0) {
      alertQuestion(
        'Eliminar las tareas',
        '¿Desea eliminar todas las tareas?',
        'Eliminar'
      ).then((result) => {
        if (result.isConfirmed) {
          alertSuccess('Eliminando...', 600);

          dispatch({
            type: types.clearTodos,
          });
        }
      });
    } else {
      alertError('No hay tareas creadas');
    }
  };

  const handleLogout = () => {
    alertQuestion('Cerrar Sesión', '¿Desea salir de su cuenta?', 'Salir').then(
      (result) => {
        if (result.isConfirmed) {
          alertSuccess('Saliendo...', 600);

          resetUser();
          history.push('/login');
        }
      }
    );
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
