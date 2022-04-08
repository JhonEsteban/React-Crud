import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import './styles.scss';

import TodoAppContext from '../../../context/TodoAppContext';
import { types } from '../../../types';

import { useAlerts } from '../../../hooks/useAlerts';

import HomeSettings from '../../../components/homeSettings/HomeSettings';
import TodoList from '../../../components/todoList/TodoList';
import LogoutButton from '../../../components/logoutButton/LogoutButton';

const List = () => {
  const { dispatch, resetUser, todos } = useContext(TodoAppContext);
  const { alertSuccess, alertQuestion, alertError } = useAlerts();

  const navigate = useNavigate();

  const createTodo = () => {
    navigate('./create');
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
          navigate('/auth/login');
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

export default List;
