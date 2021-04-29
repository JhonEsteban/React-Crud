import React, { useContext } from 'react';

import '../assets/styles/components/TodoCard.scss';
import TodoAppContext from '../context/TodoAppContext';
import { types } from '../types';

const TodoCard = ({ todo }) => {
  const { id, name, description, completed } = todo;

  const { dispatch } = useContext(TodoAppContext);

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

  return (
    <article className={`todo-card ${completed ? 'completed' : ''}`}>
      <h3>{name}</h3>
      <p>{description}</p>
      <div>
        <button onClick={() => handleTodoCompleted(id)}>Completar</button>
        <button onClick={() => handleTodoDelete(id)}>Eliminar</button>
      </div>
    </article>
  );
};

export default TodoCard;
