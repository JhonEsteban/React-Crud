import './styles.scss';

import { useSelector } from 'react-redux';

import EmptyTaskList from './EmptyTaskList';
import TaskLoader from '../TaskLoader';
import TaskCard from '../TaskCard';

const TaskList = () => {
  const { tasks, isLoadingTasks } = useSelector((state) => state.task);

  return (
    <section className='task-list animate__animated animate__fadeIn'>
      <h1 className='task-list__title'>Lista de tareas</h1>

      {!isLoadingTasks && tasks.length === 0 && <EmptyTaskList />}

      {isLoadingTasks ? (
        <TaskLoader />
      ) : (
        <section className='task-list__container'>
          {tasks.map((task) => (
            <TaskCard key={task.id} {...task} />
          ))}
        </section>
      )}
    </section>
  );
};

export default TaskList;
