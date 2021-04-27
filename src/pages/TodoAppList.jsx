import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

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

      {user.avatar ? (
        <img src={user.avatar} alt={user.name} width='70' />
      ) : (
        <img
          src='https://i.imgur.com/L8AvVdO.png'
          alt='default avatar'
          width='80'
        />
      )}

      <Link to={`/updateAvatar/${user.name.toLowerCase()}`}>Update Avatar</Link>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default TodoAppList;
