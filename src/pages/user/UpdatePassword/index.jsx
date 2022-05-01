import './styles.scss';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import BackButton from '../../../components/task/BackButton';
import ErrorFormMessage from '../../../components/app/ErrorFormMessage';

const UpdatePassword = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const currentPassword = watch('currentPassword');
  const passwordTwo = watch('passwordTwo');

  const handleGoBack = () => {
    navigate('/user/profile');
  };

  const onSubmit = () => {};

  return (
    <section className='update-password'>
      <BackButton handleGoBack={handleGoBack} isProfile />

      <h1 className='update-password__title'>Actualizar contraseña</h1>

      <form onSubmit={handleSubmit(onSubmit)} className='form'>
        <input
          type='password'
          className={`form__input ${errors.currentPassword ? 'error' : ''}`}
          placeholder='Contraseña actual'
          autoComplete='off'
          autoFocus
          {...register('currentPassword', {
            required: {
              value: true,
              message: 'La contraseña actual es requerida',
            },
            minLength: {
              value: 6,
              message: 'La contraseña debe tener al menos 6 caracteres',
            },
            validate: (value) => {
              return (
                value === passwordTwo ||
                'Ingrese la misma contraseña en los dos campos'
              );
            },
          })}
        />

        {errors.currentPassword && (
          <ErrorFormMessage message={errors.currentPassword.message} />
        )}

        <input
          type='password'
          className={`form__input ${errors.passwordTwo ? 'error' : ''}`}
          placeholder='Confirmar contraseña'
          {...register('passwordTwo', {
            required: {
              value: true,
              message: 'La confirmación de contraseña es requerida',
            },
            minLength: {
              value: 6,
              message: 'La contraseña debe tener al menos 6 caracteres',
            },
            validate: (value) => {
              return (
                value === currentPassword ||
                'Ingrese la misma contraseña en los dos campos'
              );
            },
          })}
        />

        {errors.passwordTwo && (
          <ErrorFormMessage message={errors.passwordTwo.message} />
        )}

        <button type='submit' className='form__btn'>
          Actualizar mi contraseña
        </button>
      </form>
    </section>
  );
};

export default UpdatePassword;
