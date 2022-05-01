import './styles.scss';

import { useSelector } from 'react-redux';

const UserProfileData = () => {
  const { auth, task } = useSelector((state) => state);

  const { user } = auth;
  const { tasks } = task;

  return (
    <section className='profile-data'>
      <div className='data'>
        <p className='data__name'>
          <span>Nombres: </span>
          <span>{user.name}</span>
        </p>

        <p className='data__email'>
          <span>Correo electrónico: </span>
          <span>{user.email}</span>
        </p>

        {tasks.length !== 0 && (
          <p className='data__count'>
            <span>Tareas creadas: </span>
            <span>{tasks.length}</span>
          </p>
        )}
      </div>
    </section>
  );
};

export default UserProfileData;
