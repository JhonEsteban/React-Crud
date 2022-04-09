import { Link } from 'react-router-dom';

import './styles.scss';

import AuthLayout from '../../../components/Layouts/AuthLayout';

const Login = () => {
  return (
    <AuthLayout description='¡Bienvenido inicia sesión!'>
      <form className='login-form'>
        <input
          className='login-form__input'
          type='email'
          placeholder='Correo electrónico'
          autoComplete='off'
          autoFocus
        />

        <input
          className='login-form__input'
          type='password'
          placeholder='Contraseña'
          autoComplete='off'
        />

        <div className='login-options'>
          <label className='input-container'>
            <span>Recordar datos</span>
            <input type='checkbox' />
          </label>

          <Link to='/auth/register'>Ir a registrarse</Link>
        </div>

        <button className='login-btn' type='button'>
          Iniciar sesión
        </button>
      </form>
    </AuthLayout>
  );
};

export default Login;
