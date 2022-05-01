import './styles.scss';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getTaskById } from '../../../redux/task/middlewares';

import TaskForm from '../../../components/task/TaskForm';
import BackButton from '../../../components/task/BackButton';

const Update = () => {
  const dispatch = useDispatch();

  const { taskId = '' } = useParams();

  useEffect(() => {
    taskId && dispatch(getTaskById(taskId));
  }, [taskId, dispatch]);

  return (
    <section className='update animate__animated animate__fadeIn'>
      <h1 className='update__title'>Actualizar Tarea</h1>
      <BackButton />

      <TaskForm isToCreate={false} taskId={taskId} />
    </section>
  );
};

export default Update;
