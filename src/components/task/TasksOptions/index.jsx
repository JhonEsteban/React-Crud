import './styles.scss';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { deleteAllTasks } from '../../../redux/task/middlewares';

const TasksOptions = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        type='button'
      >
        <span className='fas fa-plus icon'></span>
        <span>Crear tarea</span>
      </button>

      {tasks.length !== 0 && (
        <button
          onClick={handleClearTasks}
          className='settings__btn settings__btn--two'
          type='button'
        >
          <span className='fas fa-trash icon'></span>
          <span>Borrar Tareas</span>
        </button>
      )}
    </section>
  );
};

export default TasksOptions;
