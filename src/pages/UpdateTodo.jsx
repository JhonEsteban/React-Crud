import React, { useContext, useEffect } from 'react';

import { useForm } from '../hooks/useForm';

import TodoAppContext from '../context/TodoAppContext';
import { types } from '../types';

import { useAlerts } from '../hooks/useAlerts';

import TodoForm from '../components/TodoForm';

const UpdateTodo = ({ history }) => {
  const {
    name,
    description,
    handleInputChange,
    formValues,
    setFormValues,
    resetForm,
  } = useForm();

  const { todoUpdate, setTodoUpdate, dispatch } = useContext(TodoAppContext);

  const { alertSuccess, alertError } = useAlerts();

  useEffect(() => {
    todoUpdate && setFormValues(todoUpdate);
  }, [todoUpdate, setFormValues]);

  const handleTodoUpdate = () => {
    alertSuccess('Tarea Actualizada', 500);

    dispatch({
      type: types.updateTodo,
      payload: formValues,
    });

    resetForm();
    setTodoUpdate(null);
    history.goBack();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !description.trim()) {
      alertError('Debe llenar los campos');
      return;
    }

    handleTodoUpdate();
  };

  const handleReturn = () => {
    setTodoUpdate(null);
    history.goBack();
  };

  return (
    <div className='wrapper animate__animated animate__fadeIn'>
      <h1>Actualizar Tarea</h1>

      <button onClick={handleReturn}>Regresar</button>

      <TodoForm
        name={name}
        description={description}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default UpdateTodo;
