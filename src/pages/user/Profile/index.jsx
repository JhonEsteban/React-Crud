import './styles.scss';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getAllTasks } from '../../../redux/task/middlewares';

import BackButton from '../../../components/task/BackButton';
import ProfileInformation from '../../../components/user/ProfileInformation';

const Profile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch]);

  return (
    <section className='user-profile'>
      <BackButton />

      <h1 className='user-profile__title'>Perfil de usuario</h1>

      <ProfileInformation />
    </section>
  );
};

export default Profile;
