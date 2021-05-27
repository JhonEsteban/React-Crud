import PropTypes from 'prop-types';

const TodoCardHeading = ({ name, todo, handleTodoUpdate }) => (
  <div className='heading'>
    <h3 className='heading__title'>{name}</h3>

    <span
      onClick={() => handleTodoUpdate(todo)}
      className='btn-update fas fa-pencil-alt'
    ></span>
  </div>
);

TodoCardHeading.propTypes = {
  name: PropTypes.string.isRequired,
  todo: PropTypes.object.isRequired,
  handleTodoUpdate: PropTypes.func.isRequired,
};

export default TodoCardHeading;
