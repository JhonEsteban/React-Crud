import React from 'react';

import '../assets/styles/pages/Login.scss';

import { useNameLogin } from '../hooks/useNameLogin';

const Login = () => {
  const { userName, handleInputChange, handleSubmit } = useNameLogin();

  return (
    <section className='login'>
      <div className='wrapper'>
        <div className='login__container animate__animated animate__fadeIn'>
          <div className='hero'></div>

          <form onSubmit={handleSubmit} className='login-form'>
            <h1 className='login-form__title'>Iniciar Sesión</h1>
            <input
              className='login-form__input'
              onChange={handleInputChange}
              value={userName}
              type='text'
              placeholder='Escribe tu nombre'
            />
            <button className='login-form__button'>Entrar</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
