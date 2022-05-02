import './styles.scss';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { updateUserPassword } from '../../../redux/auth/middlewares';

import BackButton from '../../../components/task/BackButton';
import ErrorFormMessage from '../../../components/app/ErrorFormMessage';

const UpdatePassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();

  const handleGoBack = () => {
    navigate('/user/profile');
  };

  const onSubmit = (passwords) => {
    dispatch(updateUserPassword(passwords));
  };

  return (
    <section className='update-password'>
      <BackButton handleGoBack={handleGoBack} isProfile />

      <h1 className='update-password__title'>Actualizar contraseña</h1>

      <form onSubmit={handleSubmit(onSubmit)} className='form'>
        <input
          type='password'
          className={`form__input ${
            errors.currentPassword || errors.emptyCurrentPassword ? 'error' : ''
          }`}
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
              message: 'La contraseña actual debe tener al menos 6 caracteres',
            },
            validate: (value) => {
              const validField = value.trim() !== '';
              validField && clearErrors('emptyCurrentPassword');

              return (
                validField ||
                setError('emptyCurrentPassword', {
                  message: 'La contraseña actual no debe estar vacía',
                })
              );
            },
          })}
        />

        {errors.currentPassword && (
          <ErrorFormMessage message={errors.currentPassword.message} />
        )}

        {errors.emptyCurrentPassword && (
          <ErrorFormMessage message={errors.emptyCurrentPassword.message} />
        )}

        <input
          type='password'
          className={`form__input ${
            errors.newPassword || errors.emptyNewPassword ? 'error' : ''
          }`}
          placeholder='Nueva contraseña'
          {...register('newPassword', {
            required: {
              value: true,
              message: 'La nueva contraseña es requerida',
            },
            minLength: {
              value: 6,
              message: 'La nueva contraseña debe tener al menos 6 caracteres',
            },
            validate: (value) => {
              const validField = value.trim() !== '';
              validField && clearErrors('emptyNewPassword');

              return (
                validField ||
                setError('emptyNewPassword', {
                  message: 'La nueva contraseña no debe estar vacía',
                })
              );
            },
          })}
        />

        {errors.newPassword && (
          <ErrorFormMessage message={errors.newPassword.message} />
        )}

        {errors.emptyNewPassword && (
          <ErrorFormMessage message={errors.emptyNewPassword.message} />
        )}

        <button className='form__btn' type='submit'>
          Actualizar mi contraseña
        </button>
      </form>
    </section>
  );
};

export default UpdatePassword;
