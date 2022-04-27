import './styles.scss';

import EmptyTaskList from './EmptyTaskList';
import TaskCard from '../TaskCard';

const TaskList = () => {
  return (
    <section className='todo-list'>
      <h1 className='todo-list__title'>Lista de tareas</h1>

      {[].length === 0 && <EmptyTaskList />}

      <section className='todo-list__container'>
        {[].map((task) => (
          <TaskCard key={task.id} todo={task} />
        ))}
      </section>
    </section>
  );
};

export default TaskList;
