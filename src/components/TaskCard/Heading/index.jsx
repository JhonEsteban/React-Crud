const TodoCardHeading = ({ name, todo, handleTodoUpdate }) => (
  <div className='heading'>
    <h3 className='heading__title'>{name}</h3>

    <span
      onClick={() => handleTodoUpdate(todo)}
      className='btn-update fas fa-pencil-alt'
    ></span>
  </div>
);

export default TodoCardHeading;
