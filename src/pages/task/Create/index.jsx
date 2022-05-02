import './styles.scss';

import BackButton from '../../../components/task/BackButton';
import TaskForm from '../../../components/task/TaskForm';

const Create = () => {
  return (
    <section className='create'>
      <h1 className='create__title'>Crear Tarea</h1>

      <BackButton />
      <TaskForm isToCreate />
    </section>
  );
};

export default Create;
