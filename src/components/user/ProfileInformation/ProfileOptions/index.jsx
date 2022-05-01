import './styles.scss';

import { useNavigate } from 'react-router-dom';

const ProfileOptions = () => {
  const navigate = useNavigate();

  const handleGoToUpdateName = () => {
    navigate('./update/name');
  };

  const handleGoToUpdatePassword = () => {
    navigate('./update/password');
  };

  return (
    <section className='profile-options'>
      <button
        onClick={handleGoToUpdateName}
        className='profile-options__btn profile-options__btn--one'
        type='button'
      >
        <span>Actualizar nombre</span>
      </button>

      <button
        onClick={handleGoToUpdatePassword}
        className='profile-options__btn profile-options__btn--two'
        type='button'
      >
        <span>Actualizar contraseña</span>
      </button>
    </section>
  );
};

export default ProfileOptions;
