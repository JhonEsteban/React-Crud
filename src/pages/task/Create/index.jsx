import BackButton from '../../../components/task/BackButton';
import TaskForm from '../../../components/task/TaskForm';

const Create = () => {
  return (
    <div className='wrapper animate__animated animate__fadeIn'>
      <h1>Crear Tarea</h1>

      <BackButton />
      <TaskForm isToCreate />
    </div>
  );
};

export default Create;
