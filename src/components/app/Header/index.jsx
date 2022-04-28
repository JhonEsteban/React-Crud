import './styles.scss';

import { useSelector } from 'react-redux';

import UserProfile from './UserProfile';

const Header = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className='wrapper'>
      <header className='header'>
        <h2 className='header__title'>{user.name}</h2>

        <UserProfile user={user} />
      </header>
    </div>
  );
};

export default Header;
