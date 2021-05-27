import PropTypes from 'prop-types';

const TodoCardOptions = ({ id, handleTodoCompleted, handleTodoDelete }) => (
  <div className='options'>
    <button onClick={() => handleTodoCompleted(id)} className='options__btn'>
      <span>Completar</span>
      <i className='fas fa-check'></i>
    </button>

    <button onClick={() => handleTodoDelete(id)} className='options__btn'>
      <span>Eliminar</span>
      <i className='fas fa-trash'></i>
    </button>
  </div>
);

TodoCardOptions.propTypes = {
  id: PropTypes.number.isRequired,
  handleTodoCompleted: PropTypes.func.isRequired,
  handleTodoDelete: PropTypes.func.isRequired,
};

export default TodoCardOptions;
