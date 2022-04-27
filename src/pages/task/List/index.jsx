import './styles.scss';

import TasksOptions from '../../../components/TasksOptions';
import TaskList from '../../../components/TaskList';
import LogoutButton from '../../../components/LogoutButton';

const List = () => {
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
