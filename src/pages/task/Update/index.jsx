import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { getTaskById } from '../../../redux/task/middlewares';
import { resetCurrentTaskAction } from '../../../redux/task/actions';

import TaskForm from '../../../components/TaskForm';

const Update = () => {
  const { taskId = '' } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoBack = () => {
    dispatch(resetCurrentTaskAction());
    navigate('/tasks');
  };

  useEffect(() => {
    taskId && dispatch(getTaskById(taskId));
  }, [taskId, dispatch]);

  return (
    <div className='wrapper animate__animated animate__fadeIn'>
      <h1>Actualizar Tarea</h1>

      <button onClick={handleGoBack} className='return-btn'>
        <span>Regresar</span>
        <i className='fas fa-arrow-left'></i>
      </button>

      <TaskForm isToCreate={false} taskId={taskId} />
    </div>
  );
};

export default Update;
