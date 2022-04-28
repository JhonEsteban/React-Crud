import { useSelector } from 'react-redux';

import './styles.scss';

import EmptyTaskList from './EmptyTaskList';
import TaskLoader from './TaskLoader';
import TaskCard from '../TaskCard';

const TaskList = () => {
  const { tasks, isLoadingTasks } = useSelector((state) => state.task);

  return (
    <section className='todo-list'>
      <h1 className='todo-list__title'>Lista de tareas</h1>

      {!isLoadingTasks && tasks.length === 0 && <EmptyTaskList />}

      <section className='todo-list__container'>
        {isLoadingTasks ? (
          <TaskLoader />
        ) : (
          tasks.map((task) => <TaskCard key={task._id} {...task} />)
        )}
      </section>
    </section>
  );
};

export default TaskList;
