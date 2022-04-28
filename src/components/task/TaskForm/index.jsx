import './styles.scss';

import PropTypes from 'prop-types';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { createTask, updateTask } from '../../../redux/task/middlewares';

import FormLoader from './FormLoader';
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
        <FormLoader />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className='todo-form'>
          <input
            name='title'
            type='text'
            className={errors.title ? 'error' : ''}
            placeholder='Título'
            autoComplete='off'
            autoFocus
            {...register('title', {
              required: {
                value: true,
                message: 'El título es requerido',
              },
            })}
          />

          {errors.title && <ErrorFormMessage message={errors.title.message} />}

          <textarea
            name='description'
            className={errors.description ? 'error' : ''}
            placeholder='Descripción'
            cols='30'
            rows='10'
            {...register('description', {
              required: {
                value: true,
                message: 'La descrición es requerida',
              },
            })}
          ></textarea>

          {errors.description && (
            <ErrorFormMessage message={errors.description.message} />
          )}

          <label className='todo-form__check'>
            <input type='checkbox' {...register('isDone')} />
            <span>Completar tarea</span>
          </label>

          <button className='todo-form__btn' type='submit'>
            <span>{isToCreate ? 'Crear' : 'Actualizar'}</span>
            <i className='fas fa-save'></i>
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
