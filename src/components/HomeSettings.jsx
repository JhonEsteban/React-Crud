import PropTypes from 'prop-types';

const HomeSettings = ({ createTodo, handleClearTodos }) => (
  <section className='settings'>
    <button onClick={createTodo} className='settings__btn'>
      <span>Crear tarea</span>
      <i className='fas fa-plus'></i>
    </button>

    <button onClick={handleClearTodos} className='settings__btn'>
      <span>Borrar Tareas</span>
      <i className='fas fa-trash'></i>
    </button>
  </section>
);

HomeSettings.propTypes = {
  createTodo: PropTypes.func.isRequired,
  handleClearTodos: PropTypes.func.isRequired,
};

export default HomeSettings;
