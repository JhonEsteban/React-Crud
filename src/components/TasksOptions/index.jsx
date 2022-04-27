const TasksOptions = () => {
  const handleCreateTask = () => {
    console.log('create task');
  };

  const handleClearTasks = () => {
    console.log('clear task');
  };

  return (
    <section className='settings'>
      <button onClick={handleCreateTask} className='settings__btn'>
        <span>Crear tarea</span>
        <i className='fas fa-plus'></i>
      </button>

      <button onClick={handleClearTasks} className='settings__btn'>
        <span>Borrar Tareas</span>
        <i className='fas fa-trash'></i>
      </button>
    </section>
  );
};

export default TasksOptions;
