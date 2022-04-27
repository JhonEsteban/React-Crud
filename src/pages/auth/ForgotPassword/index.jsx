import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import './styles.scss';

import { forgotMyPassword } from '../../../redux/auth/middlewares';
import { resetForgotPasswordDataAction } from '../../../redux/auth/actions';

import AuthLayout from '../../../components/Layouts/AuthLayout';
import ForgotPasswordMessage from '../../../components/ForgotPasswordMessage';
import ErrorFormMessage from '../../../components/ErrorFormMessage';

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { forgotPassword } = useSelector((state) => state.auth);
  const { emailWasSent, email } = forgotPassword;

  const navigate = useNavigate();
  const dispatch = useDispatch();

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
          <h1 className='forgot-form__title'>
            Se le enviará un enlace a su correo para que cambie la contraseña
          </h1>

          <input
            type='email'
            className={`forgot-form__input ${errors.email ? 'error' : ''}`}
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

          <button type='submit' className='forgot-form__btn'>
            Cambiar mi contraseña
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
              Registrate
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
