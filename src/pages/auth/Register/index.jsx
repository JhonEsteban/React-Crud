import './styles.scss';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { registerUser } from '../../../redux/auth/middlewares';

import AuthLayout from '../../../components/auth/AuthLayout';
import ErrorFormMessage from '../../../components/app/ErrorFormMessage';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { isLoading } = useSelector((state) => state.auth);

  const onSubmit = (userData) => {
    dispatch(registerUser(userData));
  };

  return (
    <AuthLayout description='¡Bienvenido registrate!'>
      <form onSubmit={handleSubmit(onSubmit)} className='register-form'>
        <input
          className={`register-form__input ${errors.name ? 'error' : ''}`}
          type='text'
          name='name'
          placeholder='Nombre'
          autoFocus
          autoComplete='off'
          {...register('name', {
            required: {
              value: true,
              message: 'El nombre es requerido',
            },
          })}
        />

        {errors.name && <ErrorFormMessage message={errors.name.message} />}

        <input
          className={`register-form__input ${errors.email ? 'error' : ''}`}
          type='email'
          name='email'
          placeholder='Correo electrónico'
          autoComplete='off'
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

        <input
          className={`register-form__input ${errors.password ? 'error' : ''}`}
          type='password'
          name='password'
          placeholder='Contraseña'
          autoComplete='off'
          {...register('password', {
            required: {
              value: true,
              message: 'La contraseña es requerida',
            },
            minLength: {
              value: 6,
              message: 'La contraseña debe tener al menos 6 caracteres',
            },
          })}
        />

        {errors.password && (
          <ErrorFormMessage message={errors.password.message} />
        )}

        <div className='register-options'>
          <button
            onClick={() => navigate('/auth/login')}
            className='btn-link'
            type='button'
          >
            Ir a iniciar sesión
          </button>
        </div>

        <button className='register-btn' type='submit' disabled={isLoading}>
          {isLoading ? 'Espere por favor...' : 'Registrarse'}
        </button>
      </form>
    </AuthLayout>
  );
};

export default Register;
