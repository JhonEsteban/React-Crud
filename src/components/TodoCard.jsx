import React, { useContext } from 'react';
import { useHistory } from 'react-router';

import '../assets/styles/components/TodoCard.scss';
import TodoAppContext from '../context/TodoAppContext';
import { types } from '../types';

const TodoCard = ({ todo }) => {
  const { id, name, description, completed } = todo;
  const { dispatch, setTodoUpdate } = useContext(TodoAppContext);

  const history = useHistory();

  const handleTodoCompleted = (todoId) => {
    dispatch({
      type: types.toggleTodoCompleted,
      payload: todoId,
    });
  };

  const handleTodoDelete = (todoId) => {
    dispatch({
      type: types.deleteTodo,
      payload: todoId,
    });
  };

  const handleTodoUpdate = (todoUpdate) => {
    setTodoUpdate(todoUpdate);
    history.push(`/updateTodo/${todoUpdate.id}`);
  };

  return (
    <article className={`todo-card ${completed ? 'completed' : ''}`}>
      <div className='heading'>
        <h3 className='heading__title'>{name}</h3>
        <span
          onClick={() => handleTodoUpdate(todo)}
          className='btn-update fas fa-pencil-alt'
        ></span>
      </div>

      <p className='todo-card__description'>{description}</p>

      <div className='options'>
        <button
          onClick={() => handleTodoCompleted(id)}
          className='options__btn'
        >
          <span>Completar</span>
          <i className='fas fa-check'></i>
        </button>

        <button onClick={() => handleTodoDelete(id)} className='options__btn'>
          <span>Eliminar</span>
          <i className='fas fa-trash'></i>
        </button>
      </div>
    </article>
  );
};

export default TodoCard;
