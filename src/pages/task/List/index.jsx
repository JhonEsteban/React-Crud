import './styles.scss';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getAllTasks } from '../../../redux/task/middlewares';

import TasksOptions from '../../../components/task/TasksOptions';
import TaskList from '../../../components/task/TaskList';
import LogoutButton from '../../../components/auth/LogoutButton';

const List = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch]);

  return (
    <section className='home'>
      <div className='wrapper'>
        <TasksOptions />
        <TaskList />
        <LogoutButton />
      </div>
    </section>
  );
};

export default List;
