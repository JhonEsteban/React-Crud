import './styles.scss';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { forgotMyPassword } from '../../../redux/auth/middlewares';
import { resetForgotPasswordDataAction } from '../../../redux/auth/actions';

import AuthLayout from '../../../components/auth/AuthLayout';
import ForgotPasswordMessage from '../../../components/auth/ForgotPasswordMessage';
import ErrorFormMessage from '../../../components/app/ErrorFormMessage';

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { isLoading, forgotPassword } = useSelector((state) => state.auth);
  const { emailWasSent, email } = forgotPassword;

  const onSubmit = (email) => {
    dispatch(forgotMyPassword(email));
  };

  useEffect(() => {
    dispatch(resetForgotPasswordDataAction());
  }, [dispatch]);

  return (
    <AuthLayout>
      {!emailWasSent ? (
        <form onSubmit={handleSubmit(onSubmit)} className='forgot-form'>
          <h1 className='forgot-form__title animate__animated animate__fadeIn'>
            Se le enviará un enlace a su correo para que cambie la contraseña
          </h1>

          <input
            type='email'
            className={`forgot-form__input animate__animated animate__fadeIn ${
              errors.email ? 'error' : ''
            }`}
            placeholder='Correo electrónico'
            autoComplete='off'
            autoFocus
            {...register('email', {
              required: {
                value: true,
                message: 'El correo electrónico es requerido',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Correo electrónico no válido',
                },
              },
            })}
          />

          {errors.email && <ErrorFormMessage message={errors.email.message} />}

          <button
            type='submit'
            className='forgot-form__btn'
            disabled={isLoading}
          >
            {isLoading ? 'Espere por favor...' : ' Cambiar mi contraseña'}
          </button>

          <button
            onClick={() => navigate('/auth/login')}
            className='forgot-form__link'
            type='button'
          >
            Regresar a inicio de sesión
          </button>

          <div className='options'>
            <span className='options__name'>¿Aún no tienes cuenta?</span>

            <button
              onClick={() => navigate('/auth/register')}
              className='options__btn'
              type='button'
            >
              Ir a registrarse
            </button>
          </div>
        </form>
      ) : (
        <ForgotPasswordMessage email={email} />
      )}
    </AuthLayout>
  );
};

export default ForgotPassword;
