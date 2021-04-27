import React from 'react';

import { useNameLogin } from '../hooks/useNameLogin';

const TodoHome = () => {
  const { userName, handleInputChange, handleSubmit } = useNameLogin();

  return (
    <div>
      <h1>Todo Home</h1>
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

export default TodoHome;
