import './styles.scss';

const TaskForm = ({ name, description, handleInputChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      <input
        onChange={handleInputChange}
        value={name}
        name='name'
        type='text'
        placeholder='Nombre'
      />

      <textarea
        onChange={handleInputChange}
        value={description}
        name='description'
        placeholder='Descripción'
        cols='30'
        rows='10'
      ></textarea>

      <button className='todo-form__btn'>
        <i className='fas fa-save'></i>
      </button>
    </form>
  );
};

export default TaskForm;
