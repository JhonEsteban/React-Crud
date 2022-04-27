import TaskForm from '../../../components/TaskForm';

const Update = () => {
  return (
    <div className='wrapper animate__animated animate__fadeIn'>
      <h1>Actualizar Tarea</h1>

      <button className='return-btn'>
        <span>Regresar</span>
        <i className='fas fa-arrow-left'></i>
      </button>

      <TaskForm />
    </div>
  );
};

export default Update;
