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
    setError,
    clearErrors,
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='task-form animate__animated animate__fadeIn'
        >
          <input
            name='title'
            type='text'
            className={`task-form__input  ${
              errors.title || errors.emptyTitle ? 'error' : ''
            }`}
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
              validate: (value) => {
                const validField = value.trim() !== '';
                validField && clearErrors('emptyTitle');

                return (
                  validField ||
                  setError('emptyTitle', {
                    message: 'El título no debe estar vacío',
                  })
                );
              },
            })}
          />

          {errors.title && <ErrorFormMessage message={errors.title.message} />}

          {errors.emptyTitle && (
            <ErrorFormMessage message={errors.emptyTitle.message} />
          )}

          <textarea
            name='description'
            className={`task-form__input  ${
              errors.description || errors.emptyDescription ? 'error' : ''
            }`}
            placeholder='Descripción'
            cols='30'
            rows='10'
            {...register('description', {
              required: {
                value: true,
                message: 'La descripción es requerida',
              },
              maxLength: {
                value: 120,
                message: 'La descripción no puede tener más de 120 caracteres',
              },
              validate: (value) => {
                const validField = value.trim() !== '';
                validField && clearErrors('emptyDescription');

                return (
                  validField ||
                  setError('emptyDescription', {
                    message: 'La descripción no debe estar vacía',
                  })
                );
              },
            })}
          ></textarea>

          {errors.description && (
            <ErrorFormMessage message={errors.description.message} />
          )}

          {errors.emptyDescription && (
            <ErrorFormMessage message={errors.emptyDescription.message} />
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
