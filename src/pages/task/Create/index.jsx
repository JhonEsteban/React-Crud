import BackButton from '../../../components/BackButton';
import TaskForm from '../../../components/TaskForm';

const Create = () => {
  return (
    <div className='wrapper animate__animated animate__fadeIn'>
      <h1>Crear Tarea</h1>

      <BackButton />
      <TaskForm />
    </div>
  );
};

export default Create;
