import React, { useContext } from 'react';
import TodoAppContext from '../context/TodoAppContext';

import { useRegistrationForm } from '../hooks/useRegistrationForm';

const TodoHome = ({ history }) => {
  const { userName, handleInputChange, resetForm } = useRegistrationForm();
  const { setUser } = useContext(TodoAppContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userName.trim()) {
      return;
    }

    setUser({
      name: userName.trim(),
      isLogged: true,
    });

    resetForm();
    history.replace('/todoAppList');
  };

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
