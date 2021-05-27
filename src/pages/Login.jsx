import React from 'react';

import '../assets/styles/pages/Login.scss';

import { useNameLogin } from '../hooks/useNameLogin';

import LoginForm from '../components/LoginForm';

const Login = () => {
  const { handleInputChange, handleSubmit, userName } = useNameLogin();

  return (
    <section className='login'>
      <div className='wrapper'>
        <div className='login__container animate__animated animate__fadeIn'>
          <div className='hero'></div>

          <LoginForm
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
            userName={userName}
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
