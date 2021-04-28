import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import TodoAppContext from '../context/TodoAppContext';

const Header = () => {
  const { user, resetUser } = useContext(TodoAppContext);
  const history = useHistory();

  const handleLogout = () => {
    resetUser();
    history.push('/login');
  };
  return (
    <header>
      <h1>This is the header</h1>

      <p>
        Welcome <strong>{user.name}</strong>
      </p>

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

      <hr />
    </header>
  );
};

export default Header;
