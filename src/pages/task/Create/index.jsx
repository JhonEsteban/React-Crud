import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useForm } from '../../../hooks/useForm';

import TodoAppContext from '../../../context/TodoAppContext';
import { types } from '../../../types';

import { useAlerts } from '../../../hooks/useAlerts';

import TaskForm from '../../../components/TaskForm';
import BackButton from '../../../components/BackButton';

const Create = () => {
  const navigate = useNavigate();

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
    navigate(-1);
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

      <Link to='/tasks'>
        <BackButton />
      </Link>

      <TaskForm
        name={name}
        description={description}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Create;
