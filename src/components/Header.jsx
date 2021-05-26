import React, { useContext } from 'react';
import { useHistory } from 'react-router';

import '../assets/styles/components/Header.scss';

import defaultAvatar from '../assets/images/default-avatar.png';

import TodoAppContext from '../context/TodoAppContext';

const Header = () => {
  const { user } = useContext(TodoAppContext);
  const history = useHistory();

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
            <img
              className='avatar__image'
              src={user.avatar || defaultAvatar}
              alt='default avatar'
              width='60'
            />
          </figure>
        </section>
      </header>
    </div>
  );
};

export default Header;
