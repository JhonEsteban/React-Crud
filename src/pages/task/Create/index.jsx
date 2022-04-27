import { Link } from 'react-router-dom';

import BackButton from '../../../components/BackButton';
import TaskForm from '../../../components/TaskForm';

const Create = () => {
  return (
    <div className='wrapper animate__animated animate__fadeIn'>
      <h1>Crear Tarea</h1>

      <Link to='/tasks'>
        <BackButton />
      </Link>

      <TaskForm />
    </div>
  );
};

export default Create;
