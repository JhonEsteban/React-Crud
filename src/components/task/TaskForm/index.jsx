import './styles.scss';

import PropTypes from 'prop-types';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { createTask, updateTask } from '../../../redux/task/middlewares';

import TaskLoader from '../TaskLoader';
import ErrorFormMessage from '../../app/ErrorFormMessage';

const TaskForm = ({ isToCreate, taskId }) => {
  const dispatch = useDispatch();
  const { isLoadingTaskForm, currentTask } = useSelector((state) => state.task);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (task) => {
    isToCreate
      ? dispatch(createTask(task))
      : dispatch(updateTask(taskId, task));
  };

  useEffect(() => {
    if (currentTask) {
      setValue('title', currentTask.title);
      setValue('description', currentTask.description);
      setValue('isDone', currentTask.isDone);
    }
  }, [currentTask, setValue]);

  return (
    <>
      {isLoadingTaskForm ? (
        <TaskLoader />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className='task-form'>
          <input
            name='title'
            type='text'
            className={`task-form__input  ${errors.title ? 'error' : ''}`}
            placeholder='Título'
            autoComplete='off'
            autoFocus
            {...register('title', {
              required: {
                value: true,
                message: 'El título es requerido',
              },
              maxLength: {
                value: 40,
                message: 'El título no puede tener más de 40 caracteres',
              },
            })}
          />

          {errors.title && <ErrorFormMessage message={errors.title.message} />}

          <textarea
            name='description'
            className={`task-form__input  ${errors.description ? 'error' : ''}`}
            placeholder='Descripción'
            cols='30'
            rows='10'
            {...register('description', {
              required: {
                value: true,
                message: 'La descrición es requerida',
              },
              maxLength: {
                value: 120,
                message: 'La descripción no puede tener más de 120 caracteres',
              },
            })}
          ></textarea>

          {errors.description && (
            <ErrorFormMessage message={errors.description.message} />
          )}

          <label className='task-form__check'>
            <input type='checkbox' {...register('isDone')} />
            <span>Completar tarea</span>
          </label>

          <button className='task-form__btn' type='submit'>
            <span className='fas fa-save icon'></span>
            <span>{isToCreate ? 'Crear' : 'Actualizar'}</span>
          </button>
        </form>
      )}
    </>
  );
};

TaskForm.defaultProps = {
  isToCreate: true,
};

TaskForm.propTypes = {
  isToCreate: PropTypes.bool.isRequired,
  taskId: PropTypes.string,
};

export default TaskForm;
