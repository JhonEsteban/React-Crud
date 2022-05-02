import './styles.scss';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { changePassword } from '../../../redux/auth/middlewares';

import useCustomError from '../../../hooks/useCustomError';

import AuthLayout from '../../../components/auth/AuthLayout';
import ChangePasswordMessage from '../../../components/auth/ChangePasswordMessage';
import ErrorFormMessage from '../../../components/app/ErrorFormMessage';
import useQueryParams from '../../../hooks/useQueryParams';

const ChangePassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();

  const [token] = useQueryParams('token');
  const { customError, setNewError, resetError } = useCustomError();

  const { isLoading, recoverAccount } = useSelector((state) => state.auth);
  const { passwordWasChanged } = recoverAccount;

  const areEqualPasswords = ({ password, passwordTwo }) => {
    const validFields = password.trim() === passwordTwo.trim();

    if (!validFields) {
      setNewError({
        state: true,
        message: 'Las contraseñas deben ser iguales',
      });

      return validFields;
    }

    resetError();
    return validFields;
  };

  const onSubmit = (userData) => {
    const areEquals = areEqualPasswords(userData);

    if (!areEquals) {
      return;
    }

    const { passwordTwo } = userData;
    dispatch(changePassword({ newPassword: passwordTwo }, token));
  };

  return (
    <>
      {!passwordWasChanged ? (
        <AuthLayout description='Restablece tu contraseña'>
          <form onSubmit={handleSubmit(onSubmit)} className='password-form'>
            <input
              type='password'
              className={`password-form__input animate__animated animate__fadeIn ${
                errors.password || errors.emptyPassword || customError.state
                  ? 'error'
                  : ''
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
                  const validField = value.trim() !== '';
                  validField && clearErrors('emptyPassword');

                  return (
                    validField ||
                    setError('emptyPassword', {
                      message: 'La contraseña no debe estar vacía',
                    })
                  );
                },
              })}
            />

            {errors.password && (
              <ErrorFormMessage message={errors.password.message} />
            )}

            {errors.emptyPassword && (
              <ErrorFormMessage message={errors.emptyPassword.message} />
            )}

            <input
              type='password'
              className={`password-form__input animate__animated animate__fadeIn ${
                errors.passwordTwo ||
                errors.emptyPasswordTwo ||
                customError.state
                  ? 'error'
                  : ''
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
                  const validField = value.trim() !== '';
                  validField && clearErrors('emptyPasswordTwo');

                  return (
                    validField ||
                    setError('emptyPasswordTwo', {
                      message:
                        'La confirmación de contraseña no debe estar vacía',
                    })
                  );
                },
              })}
            />

            {errors.passwordTwo && (
              <ErrorFormMessage message={errors.passwordTwo.message} />
            )}

            {errors.emptyPasswordTwo && (
              <ErrorFormMessage message={errors.emptyPasswordTwo.message} />
            )}

            {customError.state && (
              <ErrorFormMessage message={customError.message} />
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
