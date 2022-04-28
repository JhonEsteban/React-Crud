import './styles.scss';

const EmptyTaskList = () => {
  return (
    <div className='empty-todos empty-todos  animate__animated animate__fadeIn'>
      <i className='fas fa-exclamation-circle empty-todos__icon'></i>
      <p className='empty-todos__text'>No hay tareas creadas</p>
    </div>
  );
};

export default EmptyTaskList;
