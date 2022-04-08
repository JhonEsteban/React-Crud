import { useContext } from 'react';
import { useNavigate } from 'react-router';

import './Header.scss';

import defaultAvatar from '../../assets/images/default-avatar.png';

import TodoAppContext from '../../context/TodoAppContext';

import UserProfile from '../userProfile/UserProfile';

const Header = () => {
  const { user } = useContext(TodoAppContext);
  const navigate = useNavigate();

  const handleUpdateAvatar = () => {
    navigate(`/user/profile`);
  };

  return (
    <div className='wrapper'>
      <header className='header'>
        <h2 className='header__title'>{user.name}</h2>

        <UserProfile
          user={user}
          handleUpdateAvatar={handleUpdateAvatar}
          defaultAvatar={defaultAvatar}
        />
      </header>
    </div>
  );
};

export default Header;
