import React from 'react';

import { useNameLogin } from '../hooks/useNameLogin';

const Login = () => {
  const { userName, handleInputChange, handleSubmit } = useNameLogin();

  return (
    <div>
      <h1>Login</h1>
      <hr />

      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          value={userName}
          type='text'
          placeholder='Write Your Name'
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
