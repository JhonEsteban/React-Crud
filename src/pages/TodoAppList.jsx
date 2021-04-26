import React, { useContext } from 'react';
import TodoAppContext from '../context/TodoAppContext';

const TodoAppList = ({ history }) => {
  const { user, resetUser } = useContext(TodoAppContext);

  const handleLogout = () => {
    resetUser();
    history.push('/todoHome');
  };

  return (
    <div>
      <h1>TodoAppList</h1>
      <hr />

      <h2>Welcome {user?.name}</h2>
      <br />

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default TodoAppList;
