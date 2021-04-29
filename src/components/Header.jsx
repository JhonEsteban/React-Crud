import React, { useContext } from 'react';

import '../assets/styles/components/Header.scss';

import defaultAvatar from '../assets/images/default-avatar.png';

import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

import TodoAppContext from '../context/TodoAppContext';

const Header = () => {
  const { user, resetUser } = useContext(TodoAppContext);
  const history = useHistory();

  const handleLogout = () => {
    resetUser();
    history.push('/login');
  };

  return (
    <header className='header'>
      <h1>Welcome {user.name}</h1>

      <section className='profile'>
        <figure className='avatar'>
          {user.avatar ? (
            <img src={user.avatar} alt={user.name} width='70' />
          ) : (
            <img src={defaultAvatar} alt='default avatar' width='80' />
          )}
        </figure>

        <div className='options'>
          <Link to={`/updateAvatar/${user.name.toLowerCase()}`}>
            Update Avatar
          </Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </section>
    </header>
  );
};

export default Header;
