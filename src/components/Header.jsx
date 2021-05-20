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

  const handleUpdateAvatar = () => {
    history.push(`/updateAvatar/${user.name.toLowerCase()}`);
  };

  return (
    <div className='wrapper'>
      <header className='header'>
        <h2 className='header__title'>{user.name}</h2>

        <section className='profile'>
          <div className='profile__update' onClick={handleUpdateAvatar}>
            <span
              className=' icon fas fa-pencil-alt'
              title='Editar Avatar'
            ></span>
          </div>

          <figure className='avatar'>
            {user.avatar ? (
              <img
                className='avatar__image'
                src={user.avatar}
                alt={user.name}
                width='60'
              />
            ) : (
              <img
                className='avatar__image'
                src={defaultAvatar}
                alt='default avatar'
                width='60'
              />
            )}
          </figure>

          <button
            onClick={handleLogout}
            className='profile__button'
            type='button'
          >
            Salir
          </button>
        </section>
      </header>
    </div>
  );
};

export default Header;
