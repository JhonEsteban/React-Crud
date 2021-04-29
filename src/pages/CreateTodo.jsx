import React, { useContext } from 'react';

import TodoAppContext from '../context/TodoAppContext';

import { Link, useHistory } from 'react-router-dom';

import { useForm } from '../hooks/useForm';
import { types } from '../types';

import TodoForm from '../components/TodoForm';

const CreateTodo = () => {
  const history = useHistory();
  const { name, description, handleInputChange, resetForm } = useForm();
  const { dispatch } = useContext(TodoAppContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !description.trim()) {
      alert('Debes llenar los campos');
      return;
    }

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

  return (
    <div className='wrapper'>
      <h1>Crear todo</h1>

      <Link to='/home'>Return</Link>

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
