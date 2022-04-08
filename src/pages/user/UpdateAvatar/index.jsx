import { Link } from 'react-router-dom';

import './styles.scss';

import defaultAvatar from '../../../assets/images/default-avatar.png';

import { useAvatar } from '../../../hooks/useAvatar';

import BackButton from '../../../components/BackButton';
import UpdateAvatarForm from '../../../components/UpdateAvatarForm';

const UpdateAvatar = () => {
  const { handleUpdateUser, handleFileChange, inputFileRef, userAvatar } =
    useAvatar();

  return (
    <div className='wrapper animate__animated animate__fadeIn'>
      <h1>Actualizar Avatar</h1>

      <Link to='/tasks'>
        <BackButton />
      </Link>

      <UpdateAvatarForm
        handleUpdateUser={handleUpdateUser}
        handleFileChange={handleFileChange}
        inputFileRef={inputFileRef}
        userAvatar={userAvatar}
        defaultAvatar={defaultAvatar}
      />
    </div>
  );
};

export default UpdateAvatar;
