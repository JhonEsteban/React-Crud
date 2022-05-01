import './styles.scss';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getAllTasks } from '../../../redux/task/middlewares';

import TasksOptions from '../../../components/task/TasksOptions';
import TaskList from '../../../components/task/TaskList';

const List = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch]);

  return (
    <section className='tasks'>
      <TasksOptions />
      <TaskList />
    </section>
  );
};

export default List;
