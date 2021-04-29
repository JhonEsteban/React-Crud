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
      <h3>{name}</h3>
      <p>{description}</p>
      <div>
        <button onClick={() => handleTodoCompleted(id)}>Completar</button>
        <button onClick={() => handleTodoDelete(id)}>Eliminar</button>
        <button onClick={() => handleTodoUpdate(todo)}>Actualizar</button>
      </div>
    </article>
  );
};

export default TodoCard;
