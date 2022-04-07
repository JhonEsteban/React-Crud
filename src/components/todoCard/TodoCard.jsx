import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { useNavigate } from 'react-router';

import './TodoCard.scss';

import TodoAppContext from '../../context/TodoAppContext';

import { types } from '../../types';
import { useAlerts } from '../../hooks/useAlerts';

import TodoCardOptions from '../todoCardOptions/TodoCardOptions';
import TodoCardHeading from '../todoCardHeading/TodoCardHeading';

const TodoCard = ({ todo }) => {
  const { id, name, description, completed } = todo;
  const { dispatch, setTodoUpdate } = useContext(TodoAppContext);

  const navigate = useNavigate();

  const { alertSuccess, alertQuestion } = useAlerts();

  const handleTodoCompleted = (todoId) => {
    dispatch({
      type: types.toggleTodoCompleted,
      payload: todoId,
    });
  };

  const handleTodoDelete = (todoId) => {
    alertQuestion(
      'Eliminar Tarea',
      '¿Desea eliminar la tarea?',
      'Eliminar'
    ).then((result) => {
      if (result.isConfirmed) {
        alertSuccess('Eliminando...', 500);

        dispatch({
          type: types.deleteTodo,
          payload: todoId,
        });
      }
    });
  };

  const handleTodoUpdate = (todoUpdate) => {
    setTodoUpdate(todoUpdate);
    navigate(`/updateTodo/${todoUpdate.id}`);
  };

  return (
    <article className={`todo-card ${completed ? 'completed' : ''}`}>
      <TodoCardHeading
        name={name}
        todo={todo}
        handleTodoUpdate={handleTodoUpdate}
      />

      <p className='todo-card__description'>{description}</p>

      <TodoCardOptions
        id={id}
        handleTodoCompleted={handleTodoCompleted}
        handleTodoDelete={handleTodoDelete}
      />
    </article>
  );
};

TodoCard.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoCard;
