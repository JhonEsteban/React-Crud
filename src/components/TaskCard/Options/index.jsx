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

export default TodoCardOptions;
