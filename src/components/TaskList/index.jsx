import { useContext } from 'react';

import './styles.scss';

import TodoAppContext from '../../context/TodoAppContext';

import EmptyTaskList from './EmptyTaskList';
import TaskCard from '../TaskCard';

const TaskList = () => {
  const { todos: tasks } = useContext(TodoAppContext);

  return (
    <section className='todo-list'>
      <h1 className='todo-list__title'>Lista de tareas</h1>

      {tasks.length === 0 && <EmptyTaskList />}

      <section className='todo-list__container'>
        {tasks.map((task) => (
          <TaskCard key={task.id} todo={task} />
        ))}
      </section>
    </section>
  );
};

export default TaskList;
