import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useForm } from '../../../hooks/useForm';

import TodoAppContext from '../../../context/TodoAppContext';
import { types } from '../../../types';

import { useAlerts } from '../../../hooks/useAlerts';

import TaskForm from '../../../components/TaskForm';

const Update = () => {
  const navigate = useNavigate();
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
    navigate(-1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !description.trim()) {
      alertError('Debes llenar los campos');
      return;
    }

    handleTodoUpdate();
  };

  const handleReturn = () => {
    setTodoUpdate(null);
    navigate(-1);
  };

  return (
    <div className='wrapper animate__animated animate__fadeIn'>
      <h1>Actualizar Tarea</h1>

      <button onClick={handleReturn} className='return-btn'>
        <span>Regresar</span>
        <i className='fas fa-arrow-left'></i>
      </button>

      <TaskForm
        name={name}
        description={description}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Update;
