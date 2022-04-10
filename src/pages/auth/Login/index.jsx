import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import './styles.scss';

import AuthLayout from '../../../components/Layouts/AuthLayout';
import ErrorFormMessage from '../../../components/ErrorFormMessage';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (userData) => {};

  return (
    <AuthLayout description='¡Bienvenido inicia sesión!'>
      <form onSubmit={handleSubmit(onSubmit)} className='login-form '>
        <input
          className={`login-form__input ${errors.email ? 'error' : ''}`}
          type='email'
          name='email'
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

        <input
          className={`register-form__input ${errors.password ? 'error' : ''}`}
          type='password'
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

        <div className='login-options'>
          <label className='input-container'>
            <span>Recordar datos</span>
            <input type='checkbox' />
          </label>

          <Link to='/auth/register'>Ir a registrarse</Link>
        </div>

        <button className='login-btn' type='submit'>
          Iniciar sesión
        </button>
      </form>
    </AuthLayout>
  );
};

export default Login;
