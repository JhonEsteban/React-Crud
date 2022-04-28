import './styles.scss';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { deleteTask } from '../../../redux/task/middlewares';

const TodoCard = ({ id: taskId, title, description, isDone }) => {
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
        <button onClick={handleUpdateTask} className='options__btn'>
          <span>Actualizar</span>
          <i className='fas fa-trash'></i>
        </button>

        <button onClick={handleDeleteTask} className='options__btn'>
          <span>Eliminar</span>
          <i className='fas fa-trash'></i>
        </button>
      </div>
    </article>
  );
};

export default TodoCard;
