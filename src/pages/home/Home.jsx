import React, { useContext } from 'react';

import './Home.scss';

import TodoAppContext from '../../context/TodoAppContext';
import { types } from '../../types';

import { useAlerts } from '../../hooks/useAlerts';

import HomeSettings from '../../components/homeSettings/HomeSettings';
import TodoList from '../../components/todoList/TodoList';
import LogoutButton from '../../components/logoutButton/LogoutButton';

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
    <section className='home'>
      <div className='wrapper'>
        <HomeSettings
          createTodo={createTodo}
          handleClearTodos={handleClearTodos}
        />

        <TodoList />

        <LogoutButton handleLogout={handleLogout} />
      </div>
    </section>
  );
};

export default Home;
