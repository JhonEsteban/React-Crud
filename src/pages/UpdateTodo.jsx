import React, { useContext, useEffect } from 'react';

import TodoAppContext from '../context/TodoAppContext';

import { useForm } from '../hooks/useForm';
import { types } from '../types';

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

  useEffect(() => {
    todoUpdate && setFormValues(todoUpdate);
  }, [todoUpdate, setFormValues]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !description.trim()) {
      alert('Debe llenar los campos');
      return;
    }

    dispatch({
      type: types.updateTodo,
      payload: formValues,
    });

    alert('Succesfully Updated Todo');
    resetForm();
    history.goBack();
  };

  const handleReturn = () => {
    setTodoUpdate(null);
    history.goBack();
  };

  return (
    <div className='wrapper'>
      <h1>Update Todo</h1>

      <button onClick={handleReturn}>Return</button>

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
