import { Link } from 'react-router-dom';

import './styles.scss';

import BackButton from '../../../components/BackButton';
import UpdateAvatarForm from '../../../components/UpdateAvatarForm';

const UpdateAvatar = () => {
  return (
    <div className='wrapper animate__animated animate__fadeIn'>
      <h1>Actualizar Avatar</h1>

      <Link to='/tasks'>
        <BackButton />
      </Link>

      <UpdateAvatarForm />
    </div>
  );
};

export default UpdateAvatar;
