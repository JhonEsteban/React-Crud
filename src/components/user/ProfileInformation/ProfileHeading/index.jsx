import './styles.scss';

import { useSelector } from 'react-redux';

const ProfileHeading = () => {
  const { user } = useSelector((state) => state.auth);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className='profile-heading'>
      <img
        src={user.image}
        alt={`Imagen de perfil de ${user.name}`}
        title={`Imagen de perfil de ${user.name}`}
      />

      <form onSubmit={onSubmit}>
        <label className='load-image'>
          <input type='file' className='load-image__input' />

          <button className='load-image__btn' type='submit'>
            <span>Actualizar imagen</span>
          </button>
        </label>
      </form>
    </section>
  );
};

export default ProfileHeading;
