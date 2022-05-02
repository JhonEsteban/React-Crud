import './styles.scss';

import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import ErrorFormMessage from '../../../app/ErrorFormMessage';

const ProfileHeading = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user } = useSelector((state) => state.auth);

  const onSubmit = () => {};

  return (
    <section className='profile-heading'>
      <img
        src={user.image}
        alt={`Imagen de perfil de ${user.name}`}
        title={`Imagen de perfil de ${user.name}`}
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <label className='load-image'>
          <input
            type='file'
            className='load-image__input'
            name='file'
            {...register('imageFile', {
              required: {
                value: true,
                message: 'La nueva imagen es requerida',
              },
            })}
          />

          {errors.imageFile && (
            <ErrorFormMessage message={errors.imageFile.message} />
          )}

          <button className='load-image__btn' type='submit'>
            <span>Actualizar imagen</span>
          </button>
        </label>
      </form>
    </section>
  );
};

export default ProfileHeading;
