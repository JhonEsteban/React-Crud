import './styles.scss';

import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { deleteTask } from '../../../redux/task/middlewares';

const TaskCard = ({ id: taskId, title, description, isDone }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdateTask = () => {
    navigate(`/tasks/${taskId}/update`);
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(taskId));
  };

  return (
    <article className={`task-card ${isDone ? 'completed' : ''}`}>
      <h3 className='task-card__title'>{title}</h3>
      <p className='task-card__description'>{description}</p>

      <div className='options'>
        <button
          onClick={handleUpdateTask}
          className='options__btn options__btn--one'
          type='button'
        >
          <span className='fas fa-trash icon'></span>
          <span>Actualizar</span>
        </button>

        <button
          onClick={handleDeleteTask}
          className='options__btn options__btn--two'
          type='button'
        >
          <span className='fas fa-trash icon'></span>
          <span>Eliminar</span>
        </button>
      </div>
    </article>
  );
};

TaskCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
};

export default TaskCard;
