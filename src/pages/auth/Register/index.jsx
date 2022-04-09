import { Link } from 'react-router-dom';

import './styles.scss';

import AuthLayout from '../../../components/Layouts/AuthLayout';

const Register = () => {
  return (
    <AuthLayout description='¡Bienvenido registrate!'>
      <form className='register-form'>
        <input
          className='register-form__input'
          type='text'
          placeholder='Nombre'
          autoComplete='off'
          autoFocus
        />

        <input
          className='register-form__input'
          type='email'
          placeholder='Correo electrónico'
          autoComplete='off'
        />

        <input
          className='register-form__input'
          type='password'
          placeholder='Contraseña'
          autoComplete='off'
        />

        <div className='register-options'>
          <Link to='/auth/login'>Ir a iniciar sesión</Link>
        </div>

        <button className='register-btn' type='button'>
          Registrarse
        </button>
      </form>
    </AuthLayout>
  );
};

export default Register;
