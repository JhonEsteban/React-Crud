import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { deleteAllTasks } from '../../redux/task/middlewares';

const TasksOptions = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { tasks } = useSelector((state) => state.task);

  const handleCreateTask = () => {
    navigate('/tasks/create');
  };

  const handleClearTasks = () => {
    dispatch(deleteAllTasks());
  };

  return (
    <section className='settings'>
      <button
        onClick={handleCreateTask}
        className='settings__btn settings__btn--one'
      >
        <span>Crear tarea</span>
        <i className='fas fa-plus'></i>
      </button>

      {tasks.length !== 0 && (
        <button
          onClick={handleClearTasks}
          className='settings__btn settings__btn--two'
        >
          <span>Borrar Tareas</span>
          <i className='fas fa-trash'></i>
        </button>
      )}
    </section>
  );
};

export default TasksOptions;
