import './styles.scss';

import { useForm } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { changePassword } from '../../../redux/auth/middlewares';

import AuthLayout from '../../../components/auth/AuthLayout';
import ChangePasswordMessage from '../../../components/auth/ChangePasswordMessage';
import ErrorFormMessage from '../../../components/app/ErrorFormMessage';

const ChangePassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch('password');
  const passwordTwo = watch('passwordTwo');

  const [searchParams] = useSearchParams();
  const token = searchParams.get('token') || '';

  const { isLoading, recoverAccount } = useSelector((state) => state.auth);
  const { passwordWasChanged } = recoverAccount;

  const onSubmit = ({ passwordTwo }) => {
    dispatch(changePassword({ newPassword: passwordTwo }, token));
  };

  return (
    <>
      {!passwordWasChanged ? (
        <AuthLayout description='Restablece tu contraseña'>
          <form onSubmit={handleSubmit(onSubmit)} className='password-form'>
            <input
              type='password'
              className={`password-form__input ${
                errors.password ? 'error' : ''
              }`}
              placeholder='Contraseña'
              autoComplete='off'
              autoFocus
              {...register('password', {
                required: {
                  value: true,
                  message: 'La contraseña es requerida',
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

            {errors.password && (
              <ErrorFormMessage message={errors.password.message} />
            )}

            <input
              type='password'
              className={`password-form__input ${
                errors.passwordTwo ? 'error' : ''
              }`}
              placeholder='Confirmar contraseña'
              autoComplete='off'
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
                    value === password ||
                    'Ingrese la misma contraseña en los dos campos'
                  );
                },
              })}
            />

            {errors.passwordTwo && (
              <ErrorFormMessage message={errors.passwordTwo.message} />
            )}

            <button
              type='submit'
              className='password-form__btn'
              disabled={isLoading}
            >
              {isLoading ? 'Espere por favor...' : 'Cambiar contraseña'}
            </button>

            <div className='options'>
              <span className='options__name'>¿Recordaste tu contraseña?</span>

              <button
                onClick={() => navigate('/auth/login')}
                className='options__btn'
                type='button'
              >
                Ir a iniciar sesión
              </button>
            </div>
          </form>
        </AuthLayout>
      ) : (
        <ChangePasswordMessage />
      )}
    </>
  );
};

export default ChangePassword;
