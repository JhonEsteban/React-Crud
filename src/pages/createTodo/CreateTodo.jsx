import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';

import TodoAppContext from '../../context/TodoAppContext';
import { types } from '../../types';

import { useAlerts } from '../../hooks/useAlerts';

import TodoForm from '../../components/todoForm/TodoForm';
import ReturnButton from '../../components/returnButton/ReturnButton';

const CreateTodo = () => {
  const history = useHistory();

  const { name, description, handleInputChange, resetForm } = useForm();
  const { dispatch } = useContext(TodoAppContext);

  const { alertSuccess, alertError } = useAlerts();

  const handleCreateTodo = () => {
    alertSuccess('Tarea creada', 500);

    dispatch({
      type: types.addTodo,
      payload: {
        id: Date.now(),
        name,
        description,
        completed: false,
      },
    });

    resetForm();
    history.goBack();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !description.trim()) {
      alertError('Debes llenar los campos');
      return;
    }

    handleCreateTodo();
  };

  return (
    <div className='wrapper animate__animated animate__fadeIn'>
      <h1>Crear Tarea</h1>

      <Link to='/home'>
        <ReturnButton />
      </Link>

      <TodoForm
        name={name}
        description={description}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default CreateTodo;
